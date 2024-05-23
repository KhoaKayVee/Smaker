import React from "react";
import Anhsang from "../../public/anhsang.png";
import Image from "next/image";
import Logo from "../../public/images/logo-smaker.png";
import Shape from "../../public/Shape.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container">
      <div className="flex mt-[100px] flex-col items-center border-t-2 border-dashed border-[#262626]">
        <div className="flex py-[50px] px-[0px] justify-between items-center  w-full flex-nowrap">
          <p className="text-[gold] text-[25px] not-italic font-[700] leading-[36px] uppercase whitespace-nowrap">
            T-Shirts
          </p>
          <Image
            src={Anhsang}
            alt="anhsang"
            className="w-[30px] h-[30px] flex-shrink-0"
          />
          <p className="text-[gold] text-[25px] not-italic font-[700] leading-[36px] uppercase whitespace-nowrap">
            Shirts
          </p>
          <Image
            src={Anhsang}
            alt="anhsang"
            className="w-[30px] h-[30px] flex-shrink-0"
          />
          <p className="text-[gold] text-[25px] not-italic font-[700] leading-[36px] uppercase whitespace-nowrap">
            Pants
          </p>

          <Image
            src={Anhsang}
            alt="anhsang"
            className="w-[30px] h-[30px] flex-shrink-0"
          />
          <p className="text-[gold] text-[25px] not-italic font-[700] leading-[36px] uppercase whitespace-nowrap">
            Muscle Shirt
          </p>
          <Image
            src={Anhsang}
            alt="anhsang"
            className="w-[30px] h-[30px] flex-shrink-0"
          />
        </div>

        <div className="flex py-[100px] px-[162px] justify-between items-center self-stretch border-t-2 border-b-2 border-dashed  border-[#262626]">
          <div className="flex flex-col gap-[16px] h-[146px] justify-center items-center">
            <Image
              src={Logo}
              alt="Logo"
              width={160}
              height={160}
              className="text-[#FFF] filter invert"
            />
            <p className="font-mono text-[50px] text-[gold] leading-[32px] font-[700]">
              SMAKER CLOTHING
            </p>
          </div>
          <div className="flex items-start gap-[20px]">
            <div className="flex p-[16px] items-start gap-[10px] rounded-[12px] bg-[gold] hover:opacity-65 hover:transition-all hover:duration-500 cursor-pointer">
              <FaFacebookF fill="black" />
            </div>
            <div className="flex p-[16px] items-start gap-[10px] rounded-[12px] bg-[gold] hover:opacity-65 hover:transition-all hover:duration-500 cursor-pointer">
              <FaInstagram fill="black" />
            </div>
            <div className="flex p-[16px] items-start gap-[10px] rounded-[12px] bg-[gold] hover:opacity-65 hover:transition-all hover:duration-500 cursor-pointer">
              <FaTwitter fill="black" />
            </div>
            <div className="flex p-[16px] items-start gap-[10px] rounded-[12px] bg-[gold] hover:opacity-65 hover:transition-all hover:duration-500 cursor-pointer">
              <FaYoutube fill="black" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center self-stretch">
          <div className="flex py-[80px] px-[162px] items-center gap-[80px] self-stretch border-b-2 border-solid border-[#262626]">
            <div className="flex flex-col items-start gap-[30px] flex-1">
              <p className="self-stretch text-[gold] text-[22px] not-italic font-[500] leading-normal">
                Home
              </p>
              <div className="flex items-center gap-[16px] self-stretch">
                <p className="text-[#676665] text-[16px] not-italic font-[400] leading-[30px] whitespace-nowrap">
                  Why us
                </p>
                <Image src={Shape} alt="shape" className="w-[6px] h-[6px]" />
                <p className="text-[#676665] text-[16px] not-italic font-[400] leading-[30px] whitespace-nowrap">
                  About us
                </p>
                <Image src={Shape} alt="shape" className="w-[6px] h-[6px]" />
                <p className="text-[#676665] text-[16px] not-italic font-[400] leading-[30px] whitespace-nowrap">
                  Testimonials
                </p>
                <Image src={Shape} alt="shape" className="w-[6px] h-[6px]" />
                <p className="text-[#676665] text-[16px] not-italic font-[400] leading-[30px] whitespace-nowrap">
                  FAQs
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[30px] flex-1">
              <p className="self-stretch text-[gold] text-[22px] not-italic font-[500] leading-normal">
                Products
              </p>
              <div className="flex items-center gap-[16px] self-stretch">
                <p className="text-[#676665] text-[20px] not-italic font-[400] leading-[30px] whitespace-nowrap">
                  Men
                </p>
                <Image src={Shape} alt="shape" className="w-[6px] h-[6px]" />
                <p className="text-[#676665] text-[20px] not-italic font-[400] leading-[30px] whitespace-nowrap">
                  Women
                </p>
                <Image src={Shape} alt="shape" className="w-[6px] h-[6px]" />
                <p className="text-[#676665] text-[20px] not-italic font-[400] leading-[30px] whitespace-nowrap">
                  Kid
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[30px] flex-1">
              <p className="self-stretch text-[gold] text-[22px] not-italic font-[500] leading-normal">
                Subscribe to Newsletter
              </p>
              <input
                placeholder="Your Email"
                type="text"
                className="flex py-[18px] px-[24px] justify-between items-center self-stretch rounded-[12px] bg-[#1A1A1A]"
              />
            </div>
          </div>
          <div className="flex py-[50px] px-[162px] justify-between items-start self-stretch">
            <p className="text-[#818073] text-[18px] not-italic font-[400] leading-[27px]">
              © 2024 SmakerClothing. All rights reserved.
            </p>
            <div className="flex items-center gap-[11px]">
              <p className="text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                Terms & Conditions
              </p>
              <p className="text-[#81807E] text-[18px] not-italic font-[400] leading-[27px]">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
