import Image from "next/image";
import React from "react";
import Baner from "../../public/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row mt-[100px] relative w-full p-6 md:pt-[100px] md:pr-[142px] md:pb-[100px] md:pl-[100px] items-center gap-4 md:gap-[150px] rounded-[20px] bg-[#C2B4A3]">
      <Image
        src={Baner}
        alt="banner"
        width={400}
        className="flex items-center justify-center absolute right-0 top-0 h-full opacity-75 object-cover"
      />
      <div className="flex flex-col items-start gap-4 md:gap-[16px] flex-1 z-10">
        <p className="self-stretch text-[#0F0F0F] text-[28px] md:text-[36px] lg:text-[50px] not-italic font-[500] leading-[36px] md:leading-[48px] lg:leading-[60px] uppercase">
          elevate your wardrobe
        </p>
        <p className="self-stretch text-[#1F1F1F] text-[16px] md:text-[18px] font-[400] not-italic leading-[24px] md:leading-[27px]">
          Dont miss out - experience the epitome of fashion by clicking Buy Now
          and embrace a world of chic elegance delivered to your doorstep. Your
          style journey begins here.
        </p>
      </div>

      <button className="py-[12px] md:py-[18px] z-30 px-[16px] md:px-[24px] items-start gap-[4px] rounded-[12px] bg-[#1F1F1F] text-[#FFF] text-[16px] md:text-[18px] not-italic font-[400] leading-[24px] md:leading-[27px]">
        Shop Now
      </button>
    </div>
  );
};

export default Banner;
