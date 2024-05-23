// app/product/[id]/page.tsx
"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Sử dụng useParams thay cho useRouter

interface Product {
  id: number;
  tags: string;
  name: string;
  fit: string;
  price: string;
  image: string;
}

const ProductDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get("/api/allCollections")
        .then((res) => {
          const products = res.data;
          const selectedProduct = products.find(
            (p: Product) => p.id === parseInt(Array.isArray(id) ? id[0] : id)
          );

          setProduct(selectedProduct);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
        });
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-64">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 text-base mb-4">{product.tags}</p>
          <p className="text-gray-700 text-base mb-4">{product.fit}</p>
          <p className="text-red-500 text-lg font-semibold">
            {product.price} VND
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
