const mongoose = require ("mongoose");
const Product = require("./../models/productsModel");

require("dotenv").config();



const products = [
    {
        productName: "Product 1",
        productPrice : 300,
        description : "first product in our seed",
        category :"1",
        quantity: 100
    },{
        productName: "Product 2",
        productPrice : 500,
        description : "second product in our seed",
        category :"2",
        quantity: 300
    },{
        productName: "Product 3",
        productPrice : 1000,
        description : "third product in our seed",
        category :"1",
        quantity: 50
    }
]
