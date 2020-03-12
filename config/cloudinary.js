// BACKEND cloudinary.js
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");
cloudinary.config({
  cloud_name: "dvioc75zu",
  api_key: "644596926896846",
  api_secret: "bYR6THfyq6eVCXwOmwN7OlA01EQ"
});
var storage = cloudinaryStorage({
  cloudinary,
  folder: "ecommerce", // The name of the folder in cloudinary
  allowedFormats: ["jpg", "png"]
  // params: { resource_type: 'raw' }, => this is in case you want to upload other type of files, not just images
});
const uploader = multer({ storage });
module.exports = uploader;