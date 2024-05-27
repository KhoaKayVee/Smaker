import { NextResponse } from "next/server";

let orders: any[] = [];

export const GET = async () => {
  return NextResponse.json(orders);
};

export const POST = async (req: any) => {
  const orderData = await req.json();
  orders.push(orderData);
  return NextResponse.json({ message: "Order placed successfully", orderData });
};
