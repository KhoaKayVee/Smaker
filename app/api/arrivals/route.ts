import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async () => {
  const arrivals = [
    {
      tshirts: [
        {
          id: 1,
          tags: "Tshirts",
          name: "Jersey T-Shirt Smaker",
          fit: "Oversized",
          price: "550.000",
          image: "/images/Ao-Smaker2.jpg",
        },
        {
          id: 2,
          tags: "Tshirts",
          name: "Cracked T-Shirt Smaker",
          fit: "Oversized",
          price: "550.000",
          image: "/images/Ao-Smaker3.jpg",
        },
        {
          id: 3,
          tags: "Tshirts",
          name: "MakeMoney Tshirt",
          fit: "Oversized",
          price: "500.000",
          image: "/images/Ao-Smaker4.jpg",
        },
      ],
      shirts: [
        {
          id: 4,
          tags: "Shirts",
          name: "Hoodie Smaker",
          fit: "Oversized",
          price: "650.000",
          image: "/images/Shirts-Smaker.jpg",
        },
        {
          id: 5,
          tags: "Shirts",
          name: "Jacket Smaker Blue",
          fit: "Oversized",
          price: "590.000",
          image: "/images/Shirts-Smaker2.jpg",
        },
        {
          id: 6,
          tags: "Shirts",
          name: "Cardigan Jacket",
          fit: "Oversized",
          price: "500.000",
          image: "/images/Shirts-Smaker3.jpg",
        },
      ],
      pants: [
        {
          id: 7,
          tags: "Pants",
          name: "Mesh Short",
          fit: "Slim fit",
          price: "550.000",
          image: "/images/Pants-Smaker.jpg",
        },
        {
          id: 8,
          tags: "Pants",
          name: "Pants Smaker Pink Grey",
          fit: "Slim-Fit",
          price: "750.000",
          image: "/images/Pants-Smaker2.jpg",
        },
        {
          id: 9,
          tags: "Pants",
          name: "Mesh Short Yellow",
          fit: "Slim Fit",
          price: "500.000",
          image: "/images/Pants-Smaker3.jpg",
        },
      ],
    },
  ];
  return NextResponse.json(arrivals);
};
