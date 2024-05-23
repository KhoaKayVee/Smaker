import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async () => {
  const questions = [
    {
      id: 1,
      tags: "Shipping",
      title: "How can I place an order on StyleLoom?",
      description:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
      id: 2,
      tags: "Shipping",
      title: "Can I modify or cancel my order after placing it?",
      description:
        "Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.",
    },
    {
      id: 3,
      tags: "Shipping",
      title: "What payment methods do you accept?",
      description:
        "We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.",
    },
    {
      id: 4,
      tags: "Ordering",
      title: "How do I initiate a return?",
      description:
        "Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process.",
    },
    {
      id: 5,
      tags: "Ordering",
      title: "How can I track my order?",
      description:
        "Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website.",
    },
    {
      id: 6,
      tags: "Shipping",
      title: "Do you offer exchanges for products?",
      description:
        "At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order.",
    },
  ];
  return NextResponse.json(questions);
};
