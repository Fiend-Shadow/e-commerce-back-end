const mongoose = require ('mongoose');
const Product = require("../models/productsModel");
require('dotenv').config();
const products = [
  {
    "productName": "Electronics-Product-1",
    "productPrice": 100 ,
    "description": "This is a Product from electronics category",
    "img_url": "https://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/256/TV-Set-Retro-icon.png",
    "category": "electronics",
    "quantity": 5 
  },
  {
    "productName": "Electronics-Product-2",
    "productPrice": 100 ,
    "description": "This is a Product from electronics category",
    "img_url": "https://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/256/TV-Set-Retro-icon.png",
    "category": "electronics",
    "quantity": 5 
  },
  {
    "productName": "Electronics-Product-3",
    "productPrice": 100 ,
    "description": "This is a Product from electronics category",
    "img_url": "https://www.google.com/search?q=beauty+product&tbm=isch&ved=2ahUKEwjYk--9rIToAhWM4oUKHaXFDpAQ2-cCegQIABAA&oq=beauty+product&gs_l=img.3..0l10.35746.37372..37468...0.0..0.123.1363.3j10......0....1..gws-wiz-img.......35i39j0i67.8eIo1rMyQqo&ei=a3hhXpiyNIzFlwSli7uACQ&bih=855&biw=852&tbs=isz%3Ai&hl=en#imgrc=HaoyKxSPCpgwlM",
    "category": "electronics",
    "quantity": 5 
  },
  {
    "productName": "Beauty-Product-1",
    "productPrice": 15,
    "description": "This is a Product from beauty category",
    "img_url": "https://cdn.flptitan.com/content/products/images/forever_argi___pd_category_256_X_256_1554897484730.png",
    "category": "beauty",
    "quantity": 5 
  },
  {
    "productName": "Beauty-Product-2",
    "productPrice": 15,
    "description": "This is a Product from beauty category",
    "img_url": "https://cdn.flptitan.com/content/products/images/forever_argi___pd_category_256_X_256_1554897484730.png",
    "category": "beauty",
    "quantity": 5 
  },
  {
    "productName": "Beauty-Product-3",
    "productPrice": 15,
    "description": "This is a Product from beauty category",
    "img_url": "https://cdn.flptitan.com/content/products/images/forever_argi___pd_category_256_X_256_1554897484730.png",
    "category": "beauty",
    "quantity": 5 
  }, 
  {
    "productName": "Sports-Product-2",
    "productPrice": 25 ,
    "description": "This is a Product from sports category",
    "img_url": "https://images-na.ssl-images-amazon.com/images/I/817Ux2L6-NL._SY355_.jpg",
    "category": "sports",
    "quantity": 5 
  },
  {
    "productName": "Sports-Product-3",
    "productPrice": 25 ,
    "description": "This is a Product from sports category",
    "img_url": "https://images-na.ssl-images-amazon.com/images/I/817Ux2L6-NL._SY355_.jpg",
    "category": "sports",
    "quantity": 5 
  },
  {
    "productName": "House-Product-1",
    "productPrice": 50,
    "description": "This is a Product from house category",
    "img_url": "https://images-na.ssl-images-amazon.com/images/I/813tMa1%2B4cL._SX466_.jpg",
    "category": "house",
    "quantity": 5 
  },
  {
    "productName": "House-Product-2",
    "productPrice": 50 ,
    "description": "This is a Product from house category",
    "img_url": "https://images-na.ssl-images-amazon.com/images/I/813tMa1%2B4cL._SX466_.jpg",
    "category": "house",
    "quantity": 5 
  },
  {
    "productName": "House-Product-3",
    "productPrice": 50 ,
    "description": "This is a Product from house category",
    "img_url": "https://images-na.ssl-images-amazon.com/images/I/813tMa1%2B4cL._SX466_.jpg",
    "category": "house",
    "quantity": 5 
  }
]

// MONGOOSE CONNECTION //
mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
  })
  .then( () => {
   const pr = Product.create(products)
   return pr;
  })
  .then ( (createdProducts) => {
    console.log(createdProducts);
    
    mongoose.connection.close();
  })
  .catch( (err) => console.error(err));

