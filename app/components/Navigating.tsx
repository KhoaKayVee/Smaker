import React from "react";
import Vector from "../../public/Vector.png";
import Image from "next/image";

const Navigating = () => {
  return (
    <div className="flex mt-[100px] flex-col items-start rounded-[20px] border-2 border-dashed border-[#262626]">
      <div className="flex relative pt-[80px] lg:pr-[300px] pb-[80px] lg:pl-[80px] pr-[40px] pl-[40px] flex-col items-start gap-[30px] self-stretch border-b-2 border-solid border-[#262626]">
        <p className="self-stretch text-[#FFF] lg:text-[40px] text-[20px] not-italic font-[500] leading-normal uppercase lg:whitespace-nowrap whitespace-normal z-30">
          Navigating the StyleLoom Fashion Journey.
        </p>
        <p className="self-stretch text-[#676665] lg:text-[18px] text-[10px] not-italic font-[500] leading-[27px]">
          At StyleLoom, weve designed a straightforward shopping experience to
          make fashion accessible.
        </p>
        <Image
          src={Vector}
          alt="vector"
          className="w-[250px] lg:flex hidden opacity-70 h-full object-cover absolute right-0 top-0"
        />
      </div>

      <div className="flex flex-col md:flex-row items-start self-stretch">
        <div className="flex p-[50px] flex-col items-start gap-[30px] flex-1 border-b-2 md:border-b-0 md:border-r-2 border-solid border-[#262626]">
          <p className="self-stretch text-[#676665] text-[20px] not-italic font-[400] leading-[30px]">
            Step 01
          </p>
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <p className="self-stretch text-[#FFF] text-[22px] not-italic font-[500] leading-[42px] whitespace-nowrap">
              Discover Trends
            </p>
            <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
              Explore our curated collection of over 1000 styles, spanning
              global fashion trends.
            </p>
          </div>
        </div>
        <div className="flex p-[50px] flex-col items-start gap-[30px] flex-1 border-b-2 md:border-b-0 md:border-r-2 border-solid border-[#262626]">
          <p className="self-stretch text-[#676665] text-[20px] not-italic font-[400] leading-[30px]">
            Step 02
          </p>
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <p className="self-stretch text-[#FFF] text-[22px] not-italic font-[500] leading-[42px] flex-nowrap whitespace-nowrap">
              Effortless Navigation
            </p>
            <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
              Intuitive filters and categories help you find the perfect pieces
              tailored to your style.
            </p>
          </div>
        </div>
        <div className="flex p-[50px] flex-col items-start gap-[30px] flex-1 border-b-2 md:border-b-0 md:border-r-2 border-solid border-[#262626]">
          <p className="self-stretch text-[#676665] text-[20px] not-italic font-[400] leading-[30px]">
            Step 03
          </p>
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <p className="self-stretch text-[#FFF] text-[22px] not-italic font-[500] leading-[42px] whitespace-nowrap">
              Secure Checkout
            </p>
            <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
              Multiple payment options and encrypted transactions ensure a safe
              and hassle-free purchase.
            </p>
          </div>
        </div>
        <div className="flex p-[50px] flex-col items-start gap-[30px] flex-1">
          <p className="self-stretch text-[#676665] text-[20px] not-italic font-[400] leading-[30px]">
            Step 04
          </p>
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <p className="self-stretch text-[#FFF] text-[22px] not-italic font-[500] leading-[42px] whitespace-nowrap">
              Unbox Happiness
            </p>
            <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
              Unbox a fashion-forward experience delivered right to your door,
              ready to elevate your style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigating;
