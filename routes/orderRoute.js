const express = require("express");
const orderRouter = express.Router();
const createError = require("http-errors");
const Order = require("./../models/ordersModel");
const User = require("./../models/userModel");

const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin
} = require("../helpers/middlewares");
// function orderIsDone (userId, productId) {
//     User.findById(userId).populate("orders")
//     .then((oneUser) => {
//         oneUser.orders.map(oneOrder =>{
//             if (oneOrder.isDone == false){

//                 return next();
//             }
//             // else{
//             //     return true;
//             // }

//         }).then((result)=>{
//             clgresult;
//         })
//     }).catch((err) => {
//         res.status(500).json(createError(err));
//     });
// }

orderRouter.post("/create", isLoggedIn, (req, res, next) => {
  const userId = req.session.currentUser._id;
  const { productId, quantity } = req.body;
  let updatedOrderProducts = [];
  let orderid = "";

  //   User.find({ _id: userId })
  // .populate("orders")
  // .then(users => {
  //     const oneUser = users[0];
  
  User.findByIdAndUpdate(userId, { isAdmin: false }, { new: true })
    .populate("orders")
    .then(oneUser => {
      
      // If no orderds exist create the initial one
      if (oneUser.orders.length == 0) {
        return Order.create({
          orderProducts: [{ id: productId, quantity: quantity || 1 }],
          orderUser: userId,
          isDone: false,
          isDelivered: false
        })
          .then(oneOrder => {
            return User.findByIdAndUpdate(
              userId,
              {
                $push: { orders: oneOrder._id }
              },
              { new: true }
            );
          })
          .then(updatedUser => {
            
            res.status(201).json({ message: "updated user" });
          })
          .catch(err => {
            
            next(createError(400));
          });
      } else {
        // If orders array is not empty, loop over orders and check if there is a pending order
        let pendingOrderFoundAndUpdated = false;

        // Try to find pending order and update it
        oneUser.orders.forEach(oneOrder => {
          if (oneOrder.isDone === false) {
            pendingOrderFoundAndUpdated = true;
            
            // updatedOrderProducts = [
            //   { id: id, quantity: quantity || 1 },
            //   ...oneOrder.orderProducts
            // ];
            const newProduct = { id: productId, quantity: quantity || 1 };
            orderid = oneOrder._id;

            Order.findByIdAndUpdate(
              orderid,
              { $push: { orderProducts: newProduct } },
              { new: true }
            )
              .then(result => {
                

                res.status(200).send();
              })
              .catch(err => {
                
                next(createError(400));
              });
          }
        });

        

        if (!pendingOrderFoundAndUpdated) {
          // break the execution of function (don't run the code below)
          Order.create({
            orderProducts: [{ id: productId, quantity: quantity || 1 }],
            orderUser: userId,
            isDone: false,
            isDelivered: false
          })
            .then(createdOrder => {
              return User.findByIdAndUpdate(
                userId,
                { $push: { orders: createdOrder._id } },
                { new: true }
              );
            })
            .then(() => {
              res.status(201).send();
            })
            .catch(err => {
              
              next(createError(400));
            });
        }
      }
    })
    .catch(err => {
      
      next(createError(400));
    });
});

orderRouter.get("/allOrders", isLoggedIn, (req, res, next) => {
  const { _id } = req.session.currentUser;
  User.findById( _id )
  .populate({
      path : 'orders',
      populate : {
        path : 'orderProducts.id'
      }
    })
    .then(oneUser => {
      res.status(200).json(oneUser.orders);
    })
    .catch(err => {
      res.status(500).json(createError(err));
    });
});

orderRouter.delete("/cancelOrder", (req, res, next) => {
  const { _id } = req.body;
  const userId = req.session.currentUser._id;
  Order.findById({ _id })
    .then(oneOrder => {
      if (oneOrder.orderUser === userId && oneOrder.isDelivered === false) {
        Order.findByIdAndRemove({ _id }).then(() => {
          res.status(204).send();
        });
      }
    })
    .catch(err => {
      res.status(500).json(createError(err));
    });
});

orderRouter.put("/updateQuantity", (req, res, next) => {
  const { _id, productId, plus, minus } = req.body;

  Order.findById({ _id })

    .then(oneOrder => {
      let updatedArray = oneOrder.orderProducts;
      updatedArray.map((oneProduct, index) => {
        if (oneProduct.id == productId) {
          let updatedProduct = updatedArray.slice(index, index + 1);
          if (plus == true) {
            updatedProduct.quantity++;
          } else if (minus == true) {
            updatedProduct.quantity--;
          }
          updatedArray = updatedArray.unshift(updatedProduct);
          Order.findByIdAndUpdate(
            { _id },
            { $set: { orderProducts: updatedArray } },
            { new: true }
          ).then(updatedOrder => {
            res.status(200).json(updatedOrder);
          });
        }
      });
    })
    .catch(err => {
      res.status(500).json(createError(err));
    });
});

module.exports = orderRouter;
