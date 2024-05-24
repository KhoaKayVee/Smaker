import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async () => {
  const products = [
    {
      id: 1,
      tags: "Tshirts",
      name: "Áo thun OVS",
      fit: "Oversized",
      price: "250.000",
      image: "/boinshop/Aothun1.jpg",
    },
    {
      id: 2,
      tags: "Tshirts",
      name: "Áo thu UNISEX",
      fit: "Oversized",
      price: "200.000",
      image: "/boinshop/Aothun2.jpg",
    },
    {
      id: 3,
      tags: "Pants",
      name: "Quần ống rộng",
      fit: "Slim fit",
      price: "253.000",
      image: "/boinshop/Pants1.jpg",
    },
    {
      id: 4,
      tags: "Pants",
      name: "Quần shorts kẻ dọc",
      fit: "Slim-Fit",
      price: "155.000",
      image: "/boinshop/Pants2.jpg",
    },
    {
      id: 5,
      tags: "Shirts",
      name: "Vasity Jacket",
      fit: "Oversized",
      price: "355.000",
      image: "/boinshop/Shirts1.jpg",
    },
    {
      id: 6,
      tags: "Shirts",
      name: "Varcarhell Jacket",
      fit: "Oversized",
      price: "315.000",
      image: "/boinshop/Shirts2.jpg",
    },
    {
      id: 7,
      tags: "Tshirts",
      name: "Áo thun From Rộng",
      fit: "Oversized",
      price: "150.000",
      image: "/boinshop/Aothun3.jpg",
    },
    {
      id: 8,
      tags: "Shirts",
      name: "Cardigan Jacket",
      fit: "Oversized",
      price: "555.000",
      image: "/boinshop/Shirts3.jpg",
    },
    {
      id: 9,
      tags: "Pants",
      name: "Combo quần kẻ dọc",
      fit: "Slim Fit",
      price: "350.000",
      image: "/boinshop/Pants3.jpg",
    },
  ];
  return NextResponse.json(products);
};
