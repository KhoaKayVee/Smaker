"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import baus from "../../public/images/baus.jpg";
import { Select, Skeleton } from "antd";
import { useRouter } from "next/navigation";
import Question from "../../app/components/Question";
import Banner from "./Banner";

const { Option } = Select;

interface Product {
  id: number;
  tags: string;
  name: string;
  fit: string;
  price: string;
  image: string;
}

const AllCollections = () => {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [sortByPrice, setSortByPrice] = useState<string | null>(null);
  const [sortByName, setSortByName] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Thêm state cho trạng thái loading

  const handleSortByPrice = (value: any) => {
    setSortByPrice(value);
    const sortedProducts = [...filteredProducts];
    sortedProducts.sort((a, b) => {
      if (value === "asc") {
        return parseFloat(a.price) - parseFloat(b.price);
      } else {
        return parseFloat(b.price) - parseFloat(a.price);
      }
    });
    setFilteredProducts(sortedProducts);
  };

  const handleProductClick = (id: number) => {
    router.push(`/details/${id}`);
  };

  const handleSortByName = (value: any) => {
    setSortByName(value);
    const sortedProducts = [...filteredProducts];
    sortedProducts.sort((a, b) => {
      if (value === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredProducts(sortedProducts);
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
      .get("api/allCollections")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data); // Ban đầu hiển thị tất cả sản phẩm
      })
      .catch((err) => {
        console.error("Error fetching products:");
      })
      .finally(() => {
        setLoading(false); // Tắt trạng thái loading khi fetch API hoàn thành
      });
  }, []);

  const filterProducts = (tag: string | null) => {
    if (tag === null) {
      setFilteredProducts(products); // Nếu không có bộ lọc, hiển thị tất cả sản phẩm
    } else {
      const filtered = products.filter((product) => product.tags === tag);
      setFilteredProducts(filtered); // Lọc sản phẩm theo tag được chọn
    }
    setSelectedFilter(tag); // Cập nhật bộ lọc được chọn
  };

  return (
    <>
      <div>
        {/* Bộ lọc */}
        <div className="flex justify-center gap-[20px] py-[20px] [px-20px] w-full">
          <button
            className={`btn-filter px-[8px] py-[5px] rounded-[20px] text-[24px] font-[700] ${
              selectedFilter === null ? "btn-active" : ""
            } ${
              selectedFilter === null
                ? "lg:text-[24px] text-[14px] bg-[gold] text-[black] font-bold"
                : ""
            }`}
            onClick={() => filterProducts(null)}
          >
            ALL
          </button>
          <button
            className={`btn-filter px-[8px] py-[5px] rounded-[20px] lg:text-[24px] text-[14px] font-[700] ${
              selectedFilter === "Tshirts" ? "btn-active" : ""
            } ${
              selectedFilter === "Tshirts"
                ? "text-[24px] bg-[gold] text-[black] font-bold"
                : ""
            }`}
            onClick={() => filterProducts("Tshirts")}
          >
            T-Shirts
          </button>
          <button
            className={`btn-filter px-[8px] py-[5px] rounded-[20px] lg:text-[24px] text-[14px] font-[700] ${
              selectedFilter === "Shirts" ? "btn-active" : ""
            } ${
              selectedFilter === "Shirts"
                ? "text-[24px] bg-[gold] text-[black] font-bold"
                : ""
            }`}
            onClick={() => filterProducts("Shirts")}
          >
            Shirts
          </button>
          <button
            className={`btn-filter px-[8px] py-[5px] rounded-[20px] lg:text-[24px] text-[14px] font-[700] ${
              selectedFilter === "Pants" ? "btn-active" : ""
            } ${
              selectedFilter === "Pants"
                ? "text-[24px] bg-[gold] text-[black] font-bold"
                : ""
            }`}
            onClick={() => filterProducts("Pants")}
          >
            Pants
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-center gap-12 py-8 px-4 lg:px-20">
          <Select
            defaultValue="Sắp xếp theo giá"
            onChange={handleSortByPrice}
            className="w-full lg:w-auto text-lg text-yellow-500" // Thêm lớp text-yellow-500
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

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px] w-full py-[50px] px-[2px]">
            {[...Array(46)].map((_, index) => (
              <Skeleton key={index} active />
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px] w-full py-[50px] px-[2px]"
          >
            {filteredProducts.map((item, index) => (
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
                  <p className="self-stretch text-center text-[gold] font-mono text-[24px] not-italic font-[700] leading-[36px] truncate">
                    {item?.name}
                  </p>
                  <div className="flex text-center justify-center gap-[8px]">
                    <p className="text-[#FFF] font-mono text-[18px] not-italic font-[700] leading-[27px]">
                      Price:
                    </p>
                    <p className="text-[red] text-[20px] font-mono not-italic font-[700] leading-[30px]">
                      {item?.price} VND
                    </p>
                    <p hidden>{item?.tags}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <Question />
      <Banner />
    </>
  );
};

export default AllCollections;
