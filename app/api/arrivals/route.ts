import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async () => {
  const arrivals = [
    {
      tshirts: [
        {
          id: 1,
          tags: "Tshirts",
          name: "Áo thun form rộng OVS",
          fit: "Oversized",
          price: "250.000",
          image: "/boinshop/Aothun1.jpg",
        },
        {
          id: 2,
          tags: "Tshirts",
          name: "Áo thun form rộng OVS",
          fit: "Oversized",
          price: "250.000",
          image: "/boinshop/Aothun2.jpg",
        },
        {
          id: 3,
          tags: "Tshirts",
          name: "Áo thun form rộng OVS",
          fit: "Oversized",
          price: "200.000",
          image: "/boinshop/Aothun3.jpg",
        },
      ],
      shirts: [
        {
          id: 4,
          tags: "Shirts",
          name: "Hoodie OVS",
          fit: "Oversized",
          price: "650.000",
          image: "/boinshop/Shirts1.jpg",
        },
        {
          id: 5,
          tags: "Shirts",
          name: "Jacket Đen OVS",
          fit: "Oversized",
          price: "590.000",
          image: "/boinshop/Shirts2.jpg",
        },
        {
          id: 6,
          tags: "Shirts",
          name: "Cardigan Jacket",
          fit: "Oversized",
          price: "500.000",
          image: "/boinshop/Shirts3.jpg",
        },
      ],
      pants: [
        {
          id: 7,
          tags: "Pants",
          name: "Quần ống rộng OVS",
          fit: "Slim fit",
          price: "250.000",
          image: "/boinshop/Pants1.jpg",
        },
        {
          id: 8,
          tags: "Pants",
          name: "Quần short kẻ dọc",
          fit: "Slim-Fit",
          price: "155.000",
          image: "/boinshop/Pants2.jpg",
        },
        {
          id: 9,
          tags: "Pants",
          name: "Combo Quần short kẻ dọc",
          fit: "Slim Fit",
          price: "355.000",
          image: "/boinshop/Pants3.jpg",
        },
      ],
    },
  ];
  return NextResponse.json(arrivals);
};
