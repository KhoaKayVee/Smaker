"use client";
import React, { useEffect, useState } from "react";
import Star from "../../public/star.png";
import Image from "next/image";
import axios from "axios";

interface Product {
  id: number;
  tags: string;
  name: string;
  fit: string;
  price: string;
  image: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("api/products")
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.error("Error fetching products:");
      });
  }, []);

  useEffect(() => {
    let filtered = products;
    if (filter !== "All") {
      filtered = products.filter(
        (product) => product.tags.toLowerCase() === filter.toLowerCase()
      );
    }
    setVisibleProducts([]);

    let timer: ReturnType<typeof setTimeout>;
    filtered.forEach((product, index) => {
      timer = setTimeout(() => {
        setVisibleProducts((prevProducts) => [...prevProducts, product]);
      }, index * 100);
    });

    return () => clearTimeout(timer);
  }, [products, filter]);

  const handleFilterClick = (tag: string) => {
    if (filter === tag) {
      setFilter("");
    } else {
      setFilter(tag);
    }
  };

  return (
    <div className="flex mt-[100px] w-full flex-col items-start rounded-[20px] border-2 border-dashed border-[#262626]">
      <div className="flex pt-[80px] relative pr-[300px] pb-[80px] pl-[80px] flex-col items-start gap-[50px] self-stretch border-b-2 border-solid border-[#262626]">
        <div className="flex flex-col items-start gap-[30px] self-stretch">
          <p className="self-stretch whitespace-nowrap text-[#FFF] text-[40px] z-10 not-italic font-[500] leading-normal uppercase">
            Elevate Your Style with Our Latest Collection
          </p>
          <p className="self-stretch text-[#676665] text-[18px] not-italic font-[400] leading-[27px]">
            Each piece is crafted to enhance your fashion statement.
          </p>
        </div>
        <div className="flex items-center gap-[14px]">
          {["All", "Tshirts", "Shirts", "Pants"].map((tag) => (
            <button
              key={tag}
              className={`flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] py-[18px] px-[24px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333] hover:bg-[#C2B4A3] hover:text-black hover:duration-500 hover:transition-all cursor-pointer ${
                filter === tag ? "bg-[#C2B4A3] text-black" : ""
              }`}
              onClick={() => handleFilterClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <Image
          src={Star}
          alt="Star"
          className="w-[325px] opacity-75 h-[346px] transform absolute right-[25px] -top-[20px] overflow-hidden -z-[10]"
          style={{ transform: "rotate(20.356deg)" }}
          width={325}
          height={325}
        />
      </div>

      <div className="flex flex-wrap mt-[36px]">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="w-full md:w-1/3 px-4 mb-8 product-item"
          >
            <div className="flex flex-col items-start border-2 border-dashed border-[#262626] rounded-[20px] overflow-hidden">
              <Image
                style={{ borderRadius: "50px 50px 0px 0px" }}
                src={product.image}
                alt="Image"
                className="h-[408px] w-[408px] self-stretch object-cover"
                width={386}
                height={386}
              />
              <div className="flex flex-col p-4 gap-[20px] self-stretch">
                <div className="flex justify-between items-center self-stretch">
                  <div className="flex py-[10px] px-[16px] items-start gap-[10px] rounded-[100px] border border-dashed border-[#262626] bg-[#1A1A1A]">
                    <p className="text-[#B3B3B2] text-[18px] not-italic font-[400] leading-[27px]">
                      {product.tags}
                    </p>
                  </div>
                  <button className="flex py-[14px] px-[16px] items-start gap-[4px] rounded-[12px] border border-dashed border-[#404040] bg-[#1F1F1F] text-[#FFF] text-[18px] not-italic font-[400] leading-[27px]">
                    Shop Now
                  </button>
                </div>
                <div className="flex flex-col items-start gap-[14px] self-stretch">
                  <p className="self-stretch text-[#FFF] text-[22px] not-italic font-[500] leading-[36px]">
                    {product.name}
                  </p>
                  <div className="flex items-start justify-between w-full">
                    <div className="flex items-center gap-[8px]">
                      <p className="text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                        Fit:
                      </p>
                      <p className="text-[#CCC] text-[16px] not-italic font-[500] leading-[30px]">
                        {product.fit}
                      </p>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <p className="text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                        Price:
                      </p>
                      <p className="text-[#CCC] text-[16px] not-italic font-[500] leading-[30px]">
                        {product.price} VND
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
