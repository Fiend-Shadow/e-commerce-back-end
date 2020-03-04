const express = require('express');
const paymentRouter = express.Router();

const createError = require("http-errors");
const Order = require ('../models/ordersModel');
const User = require('./../models/userModel');

// * Post /cartPage/payment
//   * Redirects to `/paymentPage` , get a msg in a component.

paymentRouter.put('/cartPage/payment', (req, res, next) => {
  
  const {_id } = req.body;
  
    Order.findByIdAndUpdate( {_id}, { $set: {"isDone" : true} }, {new:true} )
          
    .then((updatedOrder) => {
            res
              .status(200)
              .json(updatedOrder)
          })
    .catch((err) => {
      res
      .status((500))
      .json(err);
    });
});