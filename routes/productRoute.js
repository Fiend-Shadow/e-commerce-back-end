const express = require("express");
const productRouter = express.Router();

const createError = require("http-errors");
const Product = require("../models/productsModel");
const parser = require("../config/cloudinary");

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
	  .then( (productsByCategory) => {
			res
				.status(200)
				.json(productsByCategory)
		})
		.catch( (err) => {
			res
			.status(500)
			.json(err);
		});
})


// GET specific product and show in productDetails page
productRouter.get("/allProducts", (req, res) => {

	Product.find({})
		.then( (dataProducts) => {
			
			res.status(200).json(dataProducts);
		})
		.catch( err => {
			res.status(500).json(err);
		})
});




// -------------ADMIN CREATE, ADD, DELETE PRODUCTS FROM HERE ON -----------------
// ------------------------------------------------------------------------------

productRouter.post("/image", parser.single('file'), (req, res) => {

	console.log('req.file', req.file)

  img_url = req.file.secure_url // For Claudinary

	res.status(201).send(secure_url);
})
// //ROUTE NOT WORKING
// // POST from new Product Form //=>adds Product

productRouter.post("/adminAddProduct", (req, res) => {


  let {
    productName,
    productPrice,
		description,
		category,
		quantity,//things from the form
	} = req.body; //deconstructing the object right away
	
	Product.create({
		productName,
    productPrice,
		description,
		category,
		quantity,
		img_url
		}) //passing it over the model --> returns a promise
		
    .then((product) => {
      User.updateOne({
          _id: req.session.currentUser._id
        }, {
				$push: {
					products: productId
				}
			})
			res.json(product)
			console.log('product', product)
		})
		.catch( (err) => {
			res
			.status(500)
			.json(err);    
    })
})



// PUT update a product (check how to do this only beeing admin)


module.exports = productRouter;