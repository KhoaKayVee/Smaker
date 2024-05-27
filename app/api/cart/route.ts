import { NextResponse } from "next/server";

let cart: any = [];

export const GET = async () => {
  return NextResponse.json(cart);
};

export const POST = async (req: any) => {
  const { id, name, price, size, quantity, image } = await req.json();

  // Check if product is already in cart
  const existingProductIndex = cart.findIndex(
    (item: any) => item.id === id && item.size === size
  );

  if (existingProductIndex !== -1) {
    // Update quantity if product already exists in cart
    cart[existingProductIndex].quantity += quantity;
  } else {
    // Add new product to cart
    cart.push({ id, name, price, size, quantity, image });
  }

  return NextResponse.json({ message: "Product added to cart", cart });
};
