const express = require("express");
const productRouter = express.Router();
const createError = require("http-errors");
const Product = require("../models/productsModel");