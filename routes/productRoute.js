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



// POST from new Product Form //=>adds Product
productRouter.post("/adminAddProduct", parser.single('photo'), (req, res) => {
  let imageURL;
  if (req.file) {
    imageURL = req.file.secure_url // For Claudinary
  }

  let {
    productName,
    productPrice,
		description,
		category,
		quantity,
		img_url//things from the form
	} = req.body; //deconstructing the object right away
	
  Listing.create({
		productName,
    productPrice,
		description,
		category,
		quantity,
		img_url
		}) //passing it over the model --> returns a promise
		
    .then((product) => {
      return User.updateOne({
          _id: req.session.currentUser._id
        }, {
          $addToSet: {
            products: product._id
          }
        })
		})
		.catch( (err) => {
			res
			.status(500)
			.json(err);    
    })
})





// PUT update a product (check how to do this only beeing admin)





module.exports = productRouter;