import React from "react";
import Ngoisao from "../../public/ngoisao.png";
import Image from "next/image";
import Sao from "../../public/sao.png";
import So2 from "../../public/so2.png";
import So3 from "../../public/so3.png";
import So4 from "../../public/so4.png";
import So5 from "../../public/so5.png";
import So6 from "../../public/so6.png";
import Sao2 from "../../public/Sao2.png";
import Sao3 from "../../public/Sao3.png";
import Sao4 from "../../public/Sao4.png";
import Sao5 from "../../public/Sao5.png";
import Sao6 from "../../public/Sao6.png";

const Introduction = () => {
  return (
    <div className="flex mt-[100px] w-full flex-col items-start rounded-[20px] border-2 border-dashed border-[#262626]">
      <div className="flex flex-col  pt-[80px] lg:pr-[300px] pb-[80px] lg:pl-[80px] pr-[10px] pl-[10px] items-start gap-[30px] self-stretch border-b-2 border-solid border-[#262626]">
        <p className="self-stretch text-[#FFF] overflow-hidden lg:text-[46px] text-[16px] whitespace-nowrap not-italic font-[500] leading-normal uppercase">
          Crafting Trends, Inspiring Confidence
        </p>
        <p className="self-stretch text-[#676665] lg:text-[18px] text-[12px] not-italic font-[400] leading-[27px]">
          Explore a world of fashion at StyleLoom, where trends meet
          affordability.
        </p>
      </div>
      <div className="flex flex-col items-start self-stretch">
        <div className="flex flex-col md:flex-row items-start self-stretch border-b-2 border-solid border-[#262626]">
          <div className="flex p-[60px] relative flex-col items-start gap-[50px] flex-1 border-b-2 md:border-b-0 md:border-r-2 border-solid border-[#262626]">
            <div className="flex p-[14px] items-center gap-[10px]">
              <div className="flex p-[16px] flex-col items-start gap-[10px] rounded-[64px] bg-[#1A1A1A]">
                <Image
                  src={Ngoisao}
                  alt="ngoisao"
                  className="w-[34px] h-[34px]"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[16px] self-stretch">
              <p className="self-stretch text-[#FFF] text-[24px] not-italic font-[500] leading-[36px]">
                Passionate Craftsmanship
              </p>
              <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                Every garment at StyleLoom is crafted with passion, reflecting
                our commitment to quality and innovation.
              </p>
            </div>
            <Image
              src={Sao}
              alt="sao"
              className="w-[200px] h-[200px] absolute -right-[5px] top-0 overflow-hidden"
            />
          </div>
          <div className="flex p-[60px] relative flex-col items-start gap-[50px] flex-1 border-b-2 md:border-b-0 md:border-r-2 border-solid border-[#262626]">
            <div className="flex p-[14px] items-center gap-[10px]">
              <div className="flex p-[16px] flex-col items-start gap-[10px] rounded-[64px] bg-[#1A1A1A]">
                <Image src={So2} alt="ngoisao" className="w-[34px] h-[34px]" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[16px] self-stretch">
              <p className="self-stretch text-[#FFF] text-[24px] not-italic font-[500] leading-[36px]">
                Passionate Craftsmanship
              </p>
              <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                Every garment at StyleLoom is crafted with passion, reflecting
                our commitment to quality and innovation.
              </p>
            </div>
            <Image
              src={Sao2}
              alt="sao"
              className="w-[200px] h-[200px] absolute right-0 top-0"
            />
          </div>
          <div className="flex p-[60px] relative flex-col items-start gap-[50px] flex-1">
            <div className="flex p-[14px] items-center gap-[10px]">
              <div className="flex p-[16px] flex-col items-start gap-[10px] rounded-[64px] bg-[#1A1A1A]">
                <Image src={So3} alt="ngoisao" className="w-[34px] h-[34px]" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[16px] self-stretch">
              <p className="self-stretch text-[#FFF] text-[24px] not-italic font-[500] leading-[36px]">
                Passionate Craftsmanship
              </p>
              <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                Every garment at StyleLoom is crafted with passion, reflecting
                our commitment to quality and innovation.
              </p>
            </div>
            <Image
              src={Sao3}
              alt="sao"
              className="w-[200px] h-[200px] absolute right-0 top-0"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start self-stretch">
          <div className="flex p-[60px] relative flex-col items-start gap-[50px] flex-1 border-b-2 md:border-b-0 md:border-r-2 border-solid border-[#262626]">
            <div className="flex p-[14px] items-center gap-[10px]">
              <div className="flex p-[16px] flex-col items-start gap-[10px] rounded-[64px] bg-[#1A1A1A]">
                <Image src={So4} alt="ngoisao" className="w-[34px] h-[34px]" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[16px] self-stretch">
              <p className="self-stretch text-[#FFF] text-[24px] not-italic font-[500] leading-[36px]">
                Passionate Craftsmanship
              </p>
              <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                Every garment at StyleLoom is crafted with passion, reflecting
                our commitment to quality and innovation.
              </p>
            </div>
            <Image
              src={Sao4}
              alt="sao"
              className="w-[200px] h-[200px] absolute right-0 top-0"
            />
          </div>
          <div className="flex p-[60px] relative flex-col items-start gap-[50px] flex-1 border-b-2 md:border-b-0 md:border-r-2 border-solid border-[#262626]">
            <div className="flex p-[14px] items-center gap-[10px]">
              <div className="flex p-[16px] flex-col items-start gap-[10px] rounded-[64px] bg-[#1A1A1A]">
                <Image src={So5} alt="ngoisao" className="w-[34px] h-[34px]" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[16px] self-stretch">
              <p className="self-stretch text-[#FFF] text-[24px] not-italic font-[500] leading-[36px]">
                Passionate Craftsmanship
              </p>
              <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                Every garment at StyleLoom is crafted with passion, reflecting
                our commitment to quality and innovation.
              </p>
            </div>
            <Image
              src={Sao5}
              alt="sao"
              className="w-[200px] h-[200px] absolute right-0 top-0"
            />
          </div>
          <div className="flex p-[60px] relative flex-col items-start gap-[50px] flex-1">
            <div className="flex p-[14px] items-center gap-[10px]">
              <div className="flex p-[16px] flex-col items-start gap-[10px] rounded-[64px] bg-[#1A1A1A]">
                <Image src={So6} alt="ngoisao" className="w-[34px] h-[34px]" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[16px] self-stretch">
              <p className="self-stretch text-[#FFF] text-[24px] not-italic font-[500] leading-[36px]">
                Passionate Craftsmanship
              </p>
              <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                Every garment at StyleLoom is crafted with passion, reflecting
                our commitment to quality and innovation.
              </p>
            </div>
            <Image
              src={Sao6}
              alt="sao"
              className="w-[200px] h-[200px] absolute right-0 top-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
