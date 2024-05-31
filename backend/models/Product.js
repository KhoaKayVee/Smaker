const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  fit: String,
  price: String,
  image: String,
  materials: String,
  rating: Number,
  totalRating: Number,
  rating5: Number,
  rating4: Number,
  rating3: Number,
  rating2: Number,
  rating1: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
