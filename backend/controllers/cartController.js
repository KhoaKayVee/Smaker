const Cart = require("../models/Cart");

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne();
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addToCart = async (req, res) => {
  const { productId, quantity, price } = req.body;
  if (!productId || !quantity || !price) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ products: [], totalPrice: 0 });
    }

    const existingProductIndex = cart.products.findIndex(
      (p) => p.productId.toString() === productId
    );
    if (existingProductIndex >= 0) {
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }
    cart.totalPrice += quantity * price;

    const updatedCart = await cart.save();
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
