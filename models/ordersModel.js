const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    orderProducts: [
      {
        id: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1, min: 1 }
      }
    ],
    orderUser: { type: Schema.Types.ObjectId, ref: "User" },
    isDone: { type: Boolean, required: true },
    isDelivered: { type: Boolean, required: true }
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
