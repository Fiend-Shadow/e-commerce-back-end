const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderProducts :[{type: Schema.Types.ObjectId , Ref : "Product"}],
    orderUser : {type: Schema.Types.ObjectId , Ref : "User"},
    isDone : {type:Boolean , required : true},
    isDelevired : {type: Boolean , required : true}
},

{timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }}
    );
    
    const Order = mongoose.model('Order', orderSchema);
    
    module.exports = Order;