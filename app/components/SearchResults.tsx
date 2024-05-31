"use client";

import axios from "axios";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { Skeleton } from "antd";

interface Product {
  id: number;
  tags: string;
  name: string;
  fit: string;
  price: string;
  image: string;
}

const removeVietnameseTones = (str: any) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

const SearchResults = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (query.trim() !== "") {
      setLoading(true);
      axios
        .get(`/api/allCollections`)
        .then((res) => {
          const normalizedQuery = removeVietnameseTones(query.toLowerCase());
          const filteredProducts = res.data.filter((product: Product) => {
            const normalizedProductName = removeVietnameseTones(
              product.name.toLowerCase()
            );
            return normalizedProductName.includes(normalizedQuery);
          });
          setProducts(filteredProducts);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setProducts([]);
      setLoading(false);
    }
  }, [query]);
  return (
    <>
      <head>
        <title>BoinShop | Search Results</title>
      </head>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px] w-full py-[50px] px-[2px]">
              {[...Array(16)].map((_, index) => (
                <Skeleton key={index} active />
              ))}
            </div>
          ) : (
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px] w-full py-[50px] px-[2px]">
              {products.length > 0 ? (
                products.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="rounded-[50px] cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.5,
                      },
                    }}
                    onClick={() => router.push(`/details/${item.id}`)}
                  >
                    <Image
                      src={item?.image}
                      alt="image"
                      width={1000}
                      height={500}
                      className="object-cover w-full h-[300px]"
                      style={{ borderRadius: "20px 20px 0 0 " }}
                    />
                    <div className="flex flex-col gap-[10px] px-[10px] py-[12px] self-stretch w-full">
                      <p className="self-stretch text-center text-[var(--foreground-primary)] font-mono text-[24px] not-italic font-[700] leading-[36px] truncate">
                        {item?.name}
                      </p>
                      <div className="flex text-center justify-center gap-[8px]">
                        <p className="text-[var(--text-color)] font-mono text-[18px] not-italic font-[700] leading-[27px]">
                          Price:
                        </p>
                        <p className="text-[var(--foreground-secondary)] text-[20px] font-mono not-italic font-[700] leading-[30px]">
                          {item?.price} VND
                        </p>
                        <p hidden>{item?.tags}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p>No products found for.</p>
              )}
            </motion.div>
          )}
        </Suspense>
      </div>
    </>
  );
};

export default SearchResults;
