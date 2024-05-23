import React from "react";
import Image from "next/image";
import Nen from "../../public/Image.png";

const Hero = () => {
  return (
    <div className="flex mt-[36px] flex-col items-start gap-[-62px] rounded-[20px] border-2 border-dashed border-[#262626]">
      <div className="flex flex-col items-center gap-[-27px] self-stretch relative">
        <Image src={Nen} alt="bg" className="self-stretch rounded-[8px] " />

        <button className="flex absolute -bottom-[36px] text-[#FFF] text-[18px] not-italic font-[400] leading-[27px] py-[18px] px-[24px] items-start gap-[4px] rounded-[12px] border border-dashed border-[#404040] bg-[#1F1F1F]">
          Shop Now
        </button>
      </div>

      <div className="flex items-center self-stretch">
        <div className="flex pt-[100px] pr-[80px] pb-[80px] pl-[80px] flex-col items-start gap-[30px] flex-1 border-r-2 border-solid border-[#262626]">
          <ul className="flex items-center gap-[14px]">
            <li className="flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] py-[14px] px-[24px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333]">
              All
            </li>
            <li className="flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] py-[14px] px-[24px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333]">
              Mens
            </li>
            <li className="flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] py-[14px] px-[24px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333]">
              Womens
            </li>
            <li className="flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] py-[14px] px-[24px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333]">
              Kids
            </li>
          </ul>
          <p className="self-stretch text-[#FFF] text-[48px] not-italic font-[500] leading-normal uppercase">
            Elevate Your Style with StyleLoom
          </p>
          <p className="self-stretch text-[#676665] text-[18px] not-italic font-[400] leading-[27px]">
            Explore a world of fashion at StyleLoom, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </p>
        </div>

        <div className="flex flex-col justify-end items-center flex-1 self-stretch">
          <div className="flex items-center self-stretch border-b-2 border-solid border-[#262626]">
            <div className="flex pt-[120px] pr-[50px] pb-[50px] pl-[50px] flex-col items-start gap-[16px] flex-1 border-r-2 border-solid border-[#262626]">
              <p className="self-stretch text-[#FFF] text-[40px] not-italic font-[500] leading-[75px] ">
                1,500 +
              </p>
              <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                Explore Fashion Products
              </p>
            </div>
            <div className="flex pt-[120px] pr-[50px] pb-[50px] pl-[50px] flex-col items-start gap-[16px] flex-1">
              <p className="self-stretch text-[#FFF] text-[40px] not-italic font-[500] leading-[75px]">
                50 +
              </p>
              <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                New arrivals every month.
              </p>
            </div>
          </div>
          <div className="flex items-center self-stretch">
            <div className="flex py-[70px] px-[50px] flex-col items-start gap-[16px] flex-1 border-r-2 border-solid border-[#262626]">
              <p className="self-stretch text-[#FFF] text-[40px] not-italic font-[500] leading-[75px]">
                30%
              </p>
              <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                OFF on select items.
              </p>
            </div>
            <div className="flex py-[70px] px-[50px] flex-col items-start gap-[16px] flex-1">
              <p className="self-stretch text-[#FFF] text-[40px] not-italic font-[500] leading-[75px]">
                95%
              </p>
              <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                Customer Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
