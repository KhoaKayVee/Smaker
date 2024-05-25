import React from "react";
import Anhsang from "../../public/anhsang.png";
import Image from "next/image";
import Logo from "../../public/boinshop/logoBoinShop.png";
import Shape from "../../public/Shape.png";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { SiShopee } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    { Icon: FaFacebookF, link: "https://www.facebook.com/ngoanhkhoa13062001/" },
    {
      Icon: FaInstagram,
      link: "https://www.instagram.com/kayvreelightdandsakaanhkhoa/",
    },
    { Icon: SiShopee, link: "https://shopee.vn/boin.unisex" },
    { Icon: FaYoutube, link: "https://www.youtube.com" },
  ];
  return (
    <footer className="container">
      <div className="flex flex-col items-center border-t-2 border-dashed border-[#262626] mt-[50px] md:mt-[100px]">
        <div className="flex flex-col md:flex-row py-[30px] md:py-[50px] px-[10px] md:px-[0px] justify-between items-center w-full flex-wrap md:flex-nowrap">
          {["T-Shirts", "Shirts", "Pants", "ALL Products"].map(
            (item, index) => (
              <React.Fragment key={index}>
                <p className="text-[var(--foreground-primary)] text-[20px] md:text-[25px] not-italic font-[700] leading-[30px] md:leading-[36px] uppercase whitespace-nowrap">
                  {item}
                </p>
                {index < 3 && (
                  <Image
                    src={Anhsang}
                    alt="anhsang"
                    className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] flex-shrink-0"
                  />
                )}
              </React.Fragment>
            )
          )}
        </div>

        <div className="flex flex-col md:flex-row py-[50px] md:py-[100px] gap-[50px] px-[20px] md:px-[162px] justify-between items-center self-stretch border-t-2 border-b-2 border-dashed border-[#262626]">
          <div className="flex flex-col items-center h-[146px] justify-center">
            <Image
              src={Logo}
              alt="Logo"
              width={200}
              height={200}
              className="text-[#FFF] filter invert"
            />
            <p className="font-mono text-[25px] md:text-[50px] text-[var(--foreground-primary)] leading-[32px] font-[700]">
              BOINSHOP CLOTHING
            </p>
          </div>
          <div className="flex items-center gap-[10px] md:gap-[20px] mt-[20px] md:mt-0">
            {socialLinks.map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex p-[12px] md:p-[16px] items-center gap-[10px] rounded-[12px] bg-[var(--btn-primary)] hover:opacity-65 hover:transition-all hover:duration-500 cursor-pointer"
              >
                <Icon fill="white" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center self-stretch px-[20px] md:px-[162px]">
          <div className="flex flex-col md:flex-row py-[40px] md:py-[80px] items-center md:items-start gap-[40px] md:gap-[80px] self-stretch border-b-2 border-solid border-[#262626]">
            <div className="flex flex-col items-center md:items-start gap-[20px] md:gap-[30px] flex-1">
              <p className="text-[var(--foreground-secondary)] text-[20px] md:text-[22px] not-italic font-[500] leading-normal">
                Home
              </p>
              <div className="flex flex-wrap md:flex-nowrap items-center gap-[10px] md:gap-[16px] self-stretch">
                {["Why us", "About us", "Testimonials", "FAQs"].map(
                  (text, index) => (
                    <React.Fragment key={index}>
                      <p className="text-[var(--text-color)] text-[14px] md:text-[16px] not-italic font-[400] leading-[20px] md:leading-[30px] whitespace-nowrap">
                        {text}
                      </p>
                      {index < 3 && (
                        <Image
                          src={Shape}
                          alt="shape"
                          className="w-[4px] md:w-[6px] h-[4px] md:h-[6px]"
                        />
                      )}
                    </React.Fragment>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-[20px] md:gap-[30px] flex-1">
              <p className="text-[var(--foreground-secondary)] text-[20px] md:text-[22px] not-italic font-[500] leading-normal">
                Products
              </p>
              <div className="flex flex-wrap md:flex-nowrap items-center gap-[10px] md:gap-[16px] self-stretch">
                {["T-Shirts", "Shirts", "Pants"].map((text, index) => (
                  <React.Fragment key={index}>
                    <p className="text-[var(--text-color)]  text-[16px] md:text-[20px] not-italic font-[400] leading-[20px] md:leading-[30px] whitespace-nowrap">
                      {text}
                    </p>
                    {index < 2 && (
                      <Image
                        src={Shape}
                        alt="shape"
                        className="w-[4px] md:w-[6px] h-[4px] md:h-[6px]"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-[20px] md:gap-[30px] flex-1">
              <p className="text-[var(--foreground-secondary)] text-[20px] md:text-[22px] not-italic font-[500] leading-normal">
                Subscribe to Newsletter
              </p>
              <input
                placeholder="Your Email"
                type="text"
                className="flex py-[12px] md:py-[18px] px-[20px] md:px-[24px] justify-between items-center self-stretch rounded-[12px] bg-[#1A1A1A]"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-[30px] md:py-[50px] px-[20px] md:px-[162px] lg:gap-0 gap-[20px] justify-between lg:items-center items-start md:items-start self-stretch">
            <p className="text-[#818073] text-[14px] md:text-[18px] not-italic font-[400] leading-[20px] md:leading-[27px]">
              © 2024 BoinStore. All rights reserved.
            </p>
            <div className="flex items-center gap-[10px] md:gap-[11px] mt-[10px] md:mt-0">
              {["Terms & Conditions", "Privacy Policy"].map((text, index) => (
                <p
                  key={index}
                  className="text-[#81807E] text-[14px] md:text-[18px] not-italic font-[400] leading-[20px] md:leading-[27px]"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
