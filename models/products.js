const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {type: String ,required:true , unique: true},
    productPrice : {type: Number , required: true},
    description : {type: String , required: true},
    img_url : {type: String , required: true },
    category :{type:String , required: true , enum:["","","",""]},
    quantity: {type: Number ,required: true}
}
    );
    
    const Product = mongoose.model('Product', productSchema);
    
    module.exports = Product;