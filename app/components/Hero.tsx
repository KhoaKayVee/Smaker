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

      <div className="flex flex-col lg:flex-row items-center self-stretch">
        <div className="flex flex-col pt-[100px] pr-[80px] pb-[80px] pl-[80px] items-start gap-[30px] flex-1 border-b-2 lg:border-b-0 lg:border-r-2 border-solid border-[#262626]">
          <ul className="flex lg:items-center items-start lg:gap-[14px] gap-[12px]">
            <li className="flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] lg:py-[14px] lg:px-[24px] py-[4px] px-[8px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333]">
              All
            </li>
            <li className="flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] lg:py-[14px] lg:px-[24px] py-[4px] px-[8px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333]">
              Mens
            </li>
            <li className="flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] lg:py-[14px] lg:px-[24px] py-[4px] px-[8px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333]">
              Womens
            </li>
            <li className="flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] lg:py-[14px] lg:px-[24px] py-[4px] px-[8px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333]">
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

        <div className="flex flex-col justify-end items-center flex-1 self-stretch lg:p-[40px]">
          <div className="flex flex-col md:flex-row items-center self-stretch md:gap-[50px]">
            <div className="flex pt-[80px] pb-[50px] px-[30px] flex-col items-start gap-[16px] flex-1">
              <p className="self-stretch text-[#FFF] lg:text-[40px] text-[30px] not-italic font-[500] leading-[75px]">
                150 +
              </p>
              <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                Explore Fashion Products
              </p>
            </div>
            <div className="flex pt-[80px] pb-[50px] px-[30px] flex-col items-start gap-[16px] flex-1">
              <p className="self-stretch text-[#FFF] lg:text-[40px] text-[30px] not-italic font-[500] leading-[75px]">
                50 +
              </p>
              <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                New arrivals every month.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center self-stretch md:gap-[50px]">
            <div className="flex py-[40px] px-[30px] flex-col items-start gap-[16px] flex-1">
              <p className="self-stretch text-[#FFF] lg:text-[40px] text-[30px] not-italic font-[500] leading-[75px]">
                30%
              </p>
              <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                OFF on select items. Explo
              </p>
            </div>
            <div className="flex py-[40px] px-[30px] flex-col items-start gap-[16px] flex-1">
              <p className="self-stretch text-[#FFF] lg:text-[40px] text-[30px] not-italic font-[500] leading-[75px]">
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
