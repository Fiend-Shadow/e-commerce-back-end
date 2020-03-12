// productRoute.js
const express = require("express");
const productRouter = express.Router();
const createError = require("http-errors");
const Product = require("../models/productsModel");
const uploader = require("../config/cloudinary");
//POST
productRouter.post("/searchPage", (req, res, next) => {
  const { productName } = req.body;
  console.log("req.body", req.body);
  Product.find({ productName })
    .then(foundProduct => {
      console.log(foundProduct);
      res
        .status(200) // Created
        .json(foundProduct);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
//GET products based on category
productRouter.get("/searchPage/:category", (req, res, next) => {
  Product.find({ category: req.params.category })
    .then(productsByCategory => {
      res.status(200).json(productsByCategory);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
// GET specific product and show in productDetails page
productRouter.get("/allProducts", (req, res) => {
  Product.find({})
    .then(dataProducts => {
      res.status(200).json(dataProducts);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
// -------------ADMIN CREATE, ADD, DELETE PRODUCTS FROM HERE ON -----------------
// ------------------------------------------------------------------------------
productRouter.post("/upload", uploader.single("imageUrl"), (req, res, next) => {
  // console.log('file is: ', req.file)
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.json({ secure_url: req.file.secure_url });
});
// //ROUTE NOT WORKING
// // POST from new Product Form //=>adds Product
productRouter.post("/adminAddProduct", (req, res) => {
	console.log(req.body);
	
  let {
    productName,
    productPrice,
    description,
    category,
		quantity,
		img_url //things from the form
  } = req.body; //deconstructing the object right away
  Product.create({
    productName,
    productPrice: Number(productPrice),
    description,
    category: category.toLowerCase(),
    quantity: Number(quantity),
    img_url
  }) //passing it over the model --> returns a promise
    .then(product => {
      res.json(product);
      console.log("product", product);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
// PUT update a product (check how to do this only beeing admin)
module.exports = productRouter;
