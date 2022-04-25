const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 200},
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
