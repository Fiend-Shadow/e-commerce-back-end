const express = require("express");
const productRouter = express.Router();

const createError = require("http-errors");
const Product = require("../models/productsModel");


//POST 
productRouter.post('/searchPage', (req, res, next) => {
  const {productName} = req.body;
	console.log('req.body', req.body);

  Product.find( { productName } )
    .then( (foundProduct) => {
			console.log(foundProduct);

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


//GET products based on category
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


// GET specific product and show in productDetails page
productRouter.get('/productDetails/:productId', (req, res) => {

	Product.findById(req.params.productId)
		.then( (foundProduct) => {
			res.json(foundProduct);
		})
		.catch( err => {
			res.status(500).json(err);
		})
});


// PUT update a product (check how to do this only beeing admin)





module.exports = productRouter;