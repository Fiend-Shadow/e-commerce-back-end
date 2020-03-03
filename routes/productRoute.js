const express = require("express");
const productRouter = express.Router();

const createError = require("http-errors");
const Product = require("../models/productsModel");

const mongoose = require ('mongoose');


//POST 
productRouter.post('/searchPage', (req, res, next) => {
  const {productName, category, priceRange} = req.body;

  Product.create( { productName, category, priceRange } )
    .then( (createdProduct) => {
			res
				.status(201) // Created
				.json(createdProduct);			
		})
		.catch( (err) => {
			res
				.status(500)
				.json(err);
		});
});


//GET
productRouter.get('/searchPage/:category', (req, res, next) = {
	
	Product.find({category: req.params})
	  .then( (projectsByCategory) => {
			res
				.status(200)
				.json(projectsByCategory)
		})
		.catch( (err) => {
			res.status(500).json(err);
		});
})



module.exports = productRouter;