var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var multer = require('multer');


cloudinary.config({ 
  cloud_name: 'dvioc75zu', 
  api_key: '644596926896846', 
  api_secret: 'bYR6THfyq6eVCXwOmwN7OlA01EQ' 
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'ecommerce',
  allowedFormats: ['jpg', 'png'],
});
 
var parser = multer({ storage: storage });

module.exports = parser