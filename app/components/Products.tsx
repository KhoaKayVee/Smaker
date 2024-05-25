"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Star from "../../public/star.png";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

interface Product {
  id: number;
  tags: string;
  name: string;
  fit: string;
  price: string;
  image: string;
}

interface Arrivals {
  tshirts: Product[];
  shirts: Product[];
  pants: Product[];
}

const Products = () => {
  const [data, setData] = useState<Arrivals>({
    tshirts: [],
    shirts: [],
    pants: [],
  });
  const [filter, setFilter] = useState<string>("");
  const [showTshirts, setShowTshirts] = useState<boolean>(true);
  const [showShirts, setShowShirts] = useState<boolean>(true);
  const [showPants, setShowPants] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/arrivals");
        setData(response.data[0]); // response.data là mảng, lấy phần tử đầu tiên
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  const handleFilter = (tag: string) => {
    if (tag === "All") {
      if (showTshirts && showShirts && showPants) {
        setShowTshirts(false);
        setShowShirts(false);
        setShowPants(false);
      } else {
        setShowTshirts(true);
        setShowShirts(true);
        setShowPants(true);
      }
      setFilter("All");
    } else {
      if (filter === tag) {
        if (tag === "Tshirts") {
          setShowTshirts(!showTshirts);
        } else if (tag === "Shirts") {
          setShowShirts(!showShirts);
        } else if (tag === "Pants") {
          setShowPants(!showPants);
        }
      } else {
        setFilter(tag);
        setShowTshirts(tag === "Tshirts");
        setShowShirts(tag === "Shirts");
        setShowPants(tag === "Pants");
      }
    }
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
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const containerExitVariants = {
    hidden: { opacity: 0, x: 100 }, // Ẩn sang phải
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: { opacity: 0, x: -100 }, // Ẩn sang trái khi thoát
  };

  return (
    <>
      <head>
        <title>BoinShop | New Arrivals</title>
      </head>
      <div className="mt-[100px] flex w-full flex-col items-start rounded-[20px] border-2 border-dashed border-[#262626]">
        <div className="flex lg:pt-[80px] pt-[40px] relative lg:pr-[300px] pr-[40px] lg:pb-[80px] pb-[40px] lg:pl-[80px] pl-[40px] flex-col items-start gap-[50px] self-stretch ">
          <div className="flex flex-col items-start gap-[30px] self-stretch">
            <p className="self-stretch lg:whitespace-nowrap truncate text-[var(--foreground-primary)] lg:text-[30px] text-[20px] z-10 not-italic font-[500] leading-normal uppercase">
              NÂNG CAO PHONG CÁCH CỦA BẠN VỚI BỘ SƯU TẬP MỚI NHẤT CỦA CHÚNG TÔI
            </p>
            <p className="self-stretch text-[var(--text-color)] lg:text-[18px] text-[14px] not-italic font-[400] leading-[27px]">
              Mỗi sản phẩm đều được chế tạo để nâng cao tuyên bố thời trang của
              bạn.
            </p>
          </div>
          <div className="flex lg:items-center items-start gap-[10px]">
            {["All", "Tshirts", "Shirts", "Pants"].map((tag) => (
              <button
                key={tag}
                className={`flex justify-center text-center lg:text-[18px] text-[12px] not-italic font-[400] leading-[27px] lg:py-[18px] lg:px-[24px] py-[8px] px-[12px] items-center rounded-[12px] border border-dashed border-[#333] hover:duration-500 hover:transition-all cursor-pointer ${
                  filter === tag
                    ? "bg-[var(--btn-secondary)] text-[var(--btn-text2)]"
                    : ""
                }`}
                onClick={() => handleFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <Image
            src={Star}
            alt="Star"
            className="w-[325px] lg:flex  hidden opacity-75 h-[346px] transform absolute right-[25px] -top-[20px] overflow-hidden -z-[10]"
            style={{ transform: "rotate(20.356deg)" }}
            width={325}
            height={325}
          />
        </div>

        {/* TSHIRT */}
        <div className="flex flex-col items-start self-stretch border-b-2 border-t-2 border-dashed border-[#262626]">
          <div className="flex flex-col items-start self-stretch">
            <div className="flex p-[30px] justify-between items-center self-stretch   border-b-2 border-dashed border-[#262626]">
              <p className="flex-1 text-[var(--foreground-primary)] lg:text-[30px] text-[15px] not-italic font-[700] leading-normal uppercase">
                Tshirts Collection
              </p>
              <Link href="/all-collections">
                <button className="flex lg:py-[18px] lg:px-[24px] py-[10px] px-[14px] items-start gap-[4px] rounded-[12px] border border-dashed border-[#404040]  text-[18px] not-italic font-[400] leading-[27px]">
                  View All
                </button>
              </Link>
            </div>

            {showTshirts && (filter === "All" || filter === "Tshirts") && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={showTshirts ? "visible" : "hidden"}
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] w-full px-[20px] py-[20px] mb-[50px]"
              >
                {data.tshirts.map((item) => (
                  <motion.div
                    key={item.id}
                    className="border-2 border-dashed border-[#262626] rounded-t-[50px]"
                    variants={itemVariants}
                  >
                    <Image
                      src={item?.image}
                      alt="image"
                      width={1000}
                      height={500}
                      className="object-cover w-full h-[300px]"
                      style={{ borderRadius: "50px 50px 0 0 " }}
                    />
                    <div className="flex flex-col items-start gap-[20px] self-stretch py-[25px] px-[16px]">
                      <div className="flex w-full justify-between items-start self-stretch">
                        <div className="flex py-[10px] px-[16px] items-start gap-[10px] rounded-[100px] border border-dashed border-[#262626] bg-[#1A1A1A] text-[var(--text-color)] text-[18px] not-italic font-[400] leading-[27px]">
                          {item?.tags}
                        </div>
                        <Link href="/all-collections">
                          <button className="flex py-[12px] px-[14px] items-start gap-[4px] rounded-[12px] border border-dashed border-[#404040] text-[16px] not-italic font-[600] leading-[27px]">
                            Shop Now
                          </button>
                        </Link>
                      </div>

                      <div className="flex flex-col items-start gap-[14px] self-stretch truncate">
                        <p className="self-stretch text-center text-[var(--foreground-primary)] font-mono lg:text-[24px] text-[18px] overflow-hidden not-italic font-[600] leading-[36px]">
                          {item?.name}
                        </p>
                        <div className="flex items-start justify-between w-full">
                          <div className="flex items-center gap-[8px]">
                            <p className="text-[#81807E] font-mono lg:text-[18px] text-[10px] not-italic font-[400] leading-[27px]">
                              Fit:
                            </p>
                            <p className="text-[var(--foreground-secondary)] lg:text-[18px] text-[10px] font-mono not-italic font-[500] lg:leading-[30px] leading-[20px]">
                              {item?.fit}
                            </p>
                          </div>

                          <div className="flex items-center gap-[8px]">
                            <p className="text-[#81807E] font-mono lg:text-[18px]  text-[10px]  not-italic font-[400] leading-[27px]">
                              Price:
                            </p>
                            <p className="text-[var(--foreground-secondary)] lg:text-[18px]  text-[10px]  font-mono not-italic font-[500] lg:leading-[30px] leading-[20px]">
                              {item?.price} VND
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* SHIRTS */}
        <div className="flex flex-col items-start self-stretch border-b-2 border-t-2 border-dashed border-[#262626]">
          <div className="flex flex-col items-start self-stretch">
            <div className="flex p-[30px] justify-between items-center self-stretch   border-b-2 border-dashed border-[#262626]">
              <p className="flex-1 text-[var(--foreground-primary)] lg:text-[30px] text-[15px] not-italic font-[700] leading-normal uppercase">
                Shirts Collection
              </p>
              <Link href="/all-collections">
                <button className="flex py-[10px] px-[14px] lg:py-[18px] lg:px-[24px] items-start gap-[4px] rounded-[12px] border border-dashed border-[#404040] text-[18px] not-italic font-[400] leading-[27px]">
                  View All
                </button>
              </Link>
            </div>

            {showShirts && (filter === "All" || filter === "Shirts") && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] w-full px-[20px] py-[20px] mb-[50px]"
              >
                {data.shirts.map((item) => (
                  <motion.div
                    key={item.id}
                    className="border-2 border-dashed border-[#262626] rounded-t-[50px]"
                    variants={itemVariants}
                  >
                    <Image
                      src={item?.image}
                      alt="image"
                      width={1000}
                      height={500}
                      className="object-cover w-full h-[300px]"
                      style={{ borderRadius: "50px 50px 0 0 " }}
                    />
                    <div className="flex flex-col items-start gap-[20px] self-stretch py-[25px] px-[16px]">
                      <div className="flex w-full justify-between items-start self-stretch">
                        <div className="flex py-[10px] px-[16px] items-start gap-[10px] rounded-[100px] border border-dashed border-[#262626] bg-[#1A1A1A] text-[var(--text-color)] text-[18px] not-italic font-[400] leading-[27px]">
                          {item?.tags}
                        </div>
                        <Link href="/all-collections">
                          <button className="flex py-[12px] px-[14px] items-start gap-[4px] rounded-[12px] border border-dashed border-[#404040] text-[16px] not-italic font-[600] leading-[27px]">
                            Shop Now
                          </button>
                        </Link>
                      </div>

                      <div className="flex flex-col items-start gap-[14px] self-stretch truncate">
                        <p className="self-stretch text-center text-[var(--foreground-primary)] font-mono lg:text-[24px] text-[18px] overflow-hidden not-italic font-[600] leading-[36px]">
                          {item?.name}
                        </p>
                        <div className="flex items-start justify-between w-full">
                          <div className="flex items-center gap-[8px]">
                            <p className="text-[#81807E] font-mono lg:text-[18px] text-[10px] not-italic font-[400] leading-[27px]">
                              Fit:
                            </p>
                            <p className="text-[var(--foreground-secondary)] lg:text-[20px] text-[10px] font-mono not-italic font-[500] leading-[30px]">
                              {item?.fit}
                            </p>
                          </div>

                          <div className="flex items-center gap-[8px]">
                            <p className="text-[#81807E] font-mono lg:text-[18px] text-[10px] not-italic font-[400] leading-[27px]">
                              Price:
                            </p>
                            <p className="text-[var(--foreground-secondary)] lg:text-[20px] text-[10px] font-mono not-italic font-[500] leading-[30px]">
                              {item?.price} VND
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* PANTS */}
        <div className="flex flex-col items-start self-stretch border-b-2 border-t-2 border-dashed border-[#262626]">
          <div className="flex flex-col items-start self-stretch">
            <div className="flex p-[30px] justify-between items-center self-stretch   border-b-2 border-dashed border-[#262626]">
              <p className="flex-1 text-[var(--foreground-primary)] lg:text-[30px] text-[15px] not-italic font-[700] leading-normal uppercase">
                Pants Collection
              </p>
              <Link href="/all-collections">
                <button className="flex py-[10px] px-[14px] lg:py-[18px] lg:px-[24px] items-start gap-[4px] rounded-[12px] border border-dashed border-[#404040] text-[18px] not-italic font-[400] leading-[27px]">
                  View All
                </button>
              </Link>
            </div>

            {showPants && (filter === "All" || filter === "Pants") && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] w-full px-[20px] py-[20px] mb-[50px]"
              >
                {data.pants.map((item) => (
                  <motion.div
                    key={item.id}
                    className="border-2 border-dashed border-[#262626] rounded-t-[50px]"
                    variants={itemVariants}
                  >
                    <Image
                      src={item?.image}
                      alt="image"
                      width={1000}
                      height={500}
                      className="object-cover w-full h-[300px]"
                      style={{ borderRadius: "50px 50px 0 0 " }}
                    />
                    <div className="flex flex-col items-start gap-[20px] self-stretch py-[25px] px-[16px]">
                      <div className="flex w-full justify-between items-start self-stretch">
                        <div className="flex py-[10px] px-[16px] items-start gap-[10px] rounded-[100px] border border-dashed border-[#262626] bg-[#1A1A1A] text-[var(--text-color)] text-[18px] not-italic font-[400] leading-[27px]">
                          {item?.tags}
                        </div>
                        <Link href="/all-collections">
                          <button className="flex py-[12px] px-[14px] items-start gap-[4px] rounded-[12px] border border-dashed border-[#404040] text-[16px] not-italic font-[600] leading-[27px]">
                            Shop Now
                          </button>
                        </Link>
                      </div>

                      <div className="flex flex-col items-start gap-[14px] self-stretch truncate">
                        <p className="self-stretch text-center text-[var(--foreground-primary)] font-mono overflow-hidden lg:text-[24px] text-[18px] not-italic font-[600] leading-[36px]">
                          {item?.name}
                        </p>
                        <div className="flex items-start justify-between w-full">
                          <div className="flex items-center gap-[8px]">
                            <p className="text-[#81807E] font-mono lg:text-[18px] text-[10px] not-italic font-[400] leading-[27px]">
                              Fit:
                            </p>
                            <p className="text-[var(--foreground-secondary)] lg:text-[20px] text-[10px] font-mono not-italic font-[500] leading-[30px]">
                              {item?.fit}
                            </p>
                          </div>

                          <div className="flex items-center gap-[8px]">
                            <p className="text-[#81807E] font-mono lg:text-[18px] text-[10px] not-italic font-[400] leading-[27px]">
                              Price:
                            </p>
                            <p className="text-[var(--foreground-secondary)] lg:text-[20px] text-[10px] font-mono not-italic font-[500] leading-[30px]">
                              {item?.price} VND
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
