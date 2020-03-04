const express = require("express");
const orderRouter = express.Router();
const createError = require("http-errors");

const Order = require("../models/ordersModel");
const User = require("./../models/userModel");

orderRouter.post("/create" , (req,res,next) => {
    const userId = req.session.currentUser._id;
    const productId = req.body._id;
    const updatedOrderProducts =[];
    const orderid="";

    User.findById({userId}).populate("orders")
    .then((oneUser) => {
        oneUser.orders.map(oneOrder =>{
            if (oneOrder.isDone === false){
                updatedOrderProducts = [{id:productId , quantity:1},...oneOrder.orderProducts.id];
                orderid = oneOrder._id;
                return Order.findByIdAndUpdate({orderid},{$set: {orderProducts: updatedOrderProducts}},{new:true})
            }
            else {
                return Order.create({
                    orderProducts :[{id:productId , quantity: 1}],
                    orderUser : userId,
                    isDone : false,
                    isDelivered : false
                })
            }
        })
        .then((oneProductOrder) => {
            res
            .status(200)
            .json(oneProductOrder);
        })
    }).catch((err) => {
        res
        .status(createError(400))
        .json(err);
    });
    
});

orderRouter.get("/allOrders" , (req,res,next) => {
    const {_id} = req.session.currentUser ;
    User.findById({_id}).populate("orders")
    .then((oneUser) => {
        res
        .status(200)
        .json(oneUser.orders);
    }).catch((err) => {
        res
        .status(500)
        .json(createError(err));
    });
});

orderRouter.delete("/cancelOrder" , (req,res,next) => {
    const {_id} = req.body;
    const userId = req.session.currentUser._id;
    Order.findById({_id})
    .then((oneOrder) => {
        if (oneOrder.orderUser === userId && oneOrder.isDelivered === false)
        {
            Order.findByIdAndRemove({_id})
            .then(() => {
                res
                .status(204)
                .send();
            })
        }
    }).catch((err) => {
        res
        .status(500)
        .json(createError(err));
    });
});

orderRouter.put("/updateQuantity" , (req,res,next) => {
    const {_id , productId , plus , minus} = req.body;
    Order.findById({_id})
    .then((oneOrder) => {
        let updatedArray = oneOrder.orderProducts;
        updatedArray.map((oneProduct, index)=>{
            if (oneProduct.id == productId){
                let updatedProduct = updatedArray.slice(index,index+1);
                if (plus == true){
                    updatedProduct.quantity ++ ;
                }
                else if(minus == true){
                    updatedProduct.quantity --;
                }
                updatedArray = updatedArray.unshift(updatedProduct)
                Order.findByIdAndUpdate({_id} , {$set : {"orderProducts" : updatedArray}  } , {new : true})
                .then((updatedOrder)=>{
                    res
                    .status(200)
                    .json(updatedOrder);
                })
            }
        })
    }).catch((err) => {
        res
        .status(500)
        .json(createError(err));
    });
});


module.exports = orderRouter;