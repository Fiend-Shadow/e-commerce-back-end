const express = require("express");
const productRouter = express.Router();

const createError = require("http-errors");
const Product = require("../models/productsModel");


//POST 
productRouter.post('/searchPage', (req, res, next) => {
  const {productName, category} = req.body;

  Product.find( { productName, category } )
    .then( (foundProduct) => {
			res
				.status(200) // Created
				.json(foundProduct);			
		})
		.catch( (err) => {
			res
				.status(500)
				.json(err);
		});
});


//GET
productRouter.get('/searchPage/:category', (req, res, next) => {
	
	Product.find({category: req.params.category})
	  .then( (projectsByCategory) => {
			res
				.status(200)
				.json(projectsByCategory)
		})
		.catch( (err) => {
			res
			.status(500)
			.json(err);
		});
})



module.exports = productRouter;