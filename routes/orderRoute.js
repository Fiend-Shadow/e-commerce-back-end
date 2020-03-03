const express = require("express");
const orderRouter = express.Router();
const createError = require("http-errors");
const Order = require("../models/ordersModel");
const User = require("./../models/userModel");

orderRouter.post("/create" , (req,res,next) => {
    const userId = req.session.currentUser._id;
    const productId = req.body._id;
    const newProductsList =[];
    const orderid=0;

    User.findById({userId}).populate("orders")
    .then((oneUser) => {
        oneUser.orders.map(oneOrder =>{
            if (oneOrder.isDone === false){
                newProductsList = [productId,...oneOrder.orderProducts.id];
                orderid = oneOrder._id;
                return Order.findByIdAndUpdate({orderid},{$set: {orderProducts: newProductsList}})
            }
            else {
                return Order.create({
                    orderProducts :[{id:productId , quantity: 1}],
                    orderUser : userId,
                    isDone : false,
                    isDelevired : false
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
        .status(400)
        .json(err);
    });
    
});









module.exports = orderRouter;




