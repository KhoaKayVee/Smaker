"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Select } from "antd";

interface Product {
  id: number;
  tags: string;
  name: string;
  fit: string;
  price: string;
  image: string;
}
const { Option } = Select;

const Pants = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortByPrice, setSortByPrice] = useState<string | null>(null);
  const [sortByName, setSortByName] = useState<string | null>(null);

  const handleSortByPrice = (value: string) => {
    setSortByPrice(value);
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (value === "asc") {
        return parseFloat(a.price) - parseFloat(b.price);
      } else {
        return parseFloat(b.price) - parseFloat(a.price);
      }
    });
    setProducts(sortedProducts);
  };

  const handleSortByName = (value: string) => {
    setSortByName(value);
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (value === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setProducts(sortedProducts);
  };

  const router = useRouter();

  const handleProductClick = (id: number) => {
    router.push(`/details/${id}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  useEffect(() => {
    axios
      .get("api/pants")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <head>
        <title>BoinShop | Pants Collection</title>
      </head>
      <h1 className="flex justify-center items-center mt-[50px] text-[30px] font-[700] leading-[27px] self-stretch">
        PANTS COLLECTION
      </h1>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-center gap-12 py-8 px-4 lg:px-20">
        <Select
          defaultValue="Sắp xếp theo giá"
          onChange={handleSortByPrice}
          className="w-full lg:w-auto text-lg" // Thêm lớp text-yellow-500
        >
          <Option value="asc">Thấp - Cao</Option>
          <Option value="desc">Cao - Thấp</Option>
        </Select>
        <Select
          defaultValue="Sắp xếp theo tên"
          onChange={handleSortByName}
          className="w-full lg:w-auto text-lg text-yellow-500" // Thêm lớp text-yellow-500
        >
          <Option value="asc">A to Z</Option>
          <Option value="desc">Z to A</Option>
        </Select>
      </div>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px] w-full py-[50px] px-[2px]"
        >
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              className="rounded-[50px] cursor-pointer"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.5,
                },
              }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -50,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.2, // Tăng dần thời gian delay cho mỗi sản phẩm
                  },
                },
              }}
              onClick={() => handleProductClick(item.id)}
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
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Pants;
