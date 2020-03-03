const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username : {type: String , required: true, unique: true} ,
  password : {type: String , required: true},
  email: {type: String , required : true , unique: true}, 
  isAdmin: {type: Boolean , required: true, default: false},
  orders: [{type: Schema.Types.ObjectId , Ref: "Order"}]
},
{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;