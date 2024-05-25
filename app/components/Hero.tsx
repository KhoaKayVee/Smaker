import React, { useEffect, useState } from "react";
import Image from "next/image";
import Nen from "../../public/boinshop/BANNER.jpg";
import Nen2 from "../../public/boinshop/Nen2.jpg";
import Nen3 from "../../public/boinshop/Nen4.jpg";
import { motion, AnimatePresence } from "framer-motion";

const images = [Nen, Nen2, Nen3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex mt-[36px] flex-col items-start gap-[-62px] rounded-[20px] border-2 border-dashed border-[#262626]">
      <div className="flex flex-col items-center gap-[-27px] self-stretch relative h-[670px] w-full overflow-hidden">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`bg-${index}`}
            width={700}
            height={700}
            className={`absolute w-full h-full top-0 left-0 transition-transform duration-1000 object-fill rounded-[8px] ${
              index === currentImage ? "translate-x-0" : "-translate-x-full"
            }`}
          />
        ))}
        <div
          className="absolute text-[40px] top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
          onClick={prevImage}
        >
          &lt;
        </div>
        <div
          className="absolute text-[40px] top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          onClick={nextImage}
        >
          &gt;
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center self-stretch">
        <div className="flex flex-col pt-[100px] pr-[80px] pb-[80px] pl-[80px] items-start gap-[30px] flex-1 border-b-2 lg:border-b-0 lg:border-r-2 border-solid border-[#262626]">
          <ul className="flex lg:items-center items-start lg:gap-[14px] gap-[12px]">
            <li className="flex text-[var(--foreground-secondary)] text-center text-[18px] not-italic font-[400] leading-[27px] lg:py-[14px] lg:px-[24px] py-[4px] px-[8px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#e0e0e0]">
              ALL
            </li>
            <li className="flex text-[var(--foreground-secondary)] text-center text-[18px] not-italic font-[400] leading-[27px] lg:py-[14px] lg:px-[24px] py-[4px] px-[8px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#e0e0e0]">
              TSHIRTS
            </li>
            <li className="flex text-[var(--foreground-secondary)] text-center text-[18px] not-italic font-[400] leading-[27px] lg:py-[14px] lg:px-[24px] py-[4px] px-[8px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#e0e0e0]">
              SHIRTS
            </li>
            <li className="flex text-[var(--foreground-secondary)] text-center text-[18px] not-italic font-[400] leading-[27px] lg:py-[14px] lg:px-[24px] py-[4px] px-[8px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#e0e0e0]">
              PANTS
            </li>
          </ul>
          <p className="self-stretch text-[var(--foreground-primary)] lg:text-[44px] text-[30px] not-italic font-[500] leading-normal uppercase">
            NÂNG CẤP PHONG CÁCH CỦA BẠN VỚI BOINSTORE
          </p>
          <p className="self-stretch text-[#F5F5DC] text-[18px] not-italic font-[400] leading-[27px]">
            Khám phá thế giới thời trang tại BoinStore, nơi xu hướng đáp ứng
            được khả năng chi trả. Đắm chìm trong những phong cách mới nhất và
            nắm bắt các chương trình khuyến mãi độc quyền.
          </p>
        </div>

        <div className="flex flex-col justify-end items-center flex-1 self-stretch lg:p-[40px] p-[20px]">
          <div className="flex flex-col md:flex-row items-center self-stretch md:gap-[50px] gap-[20px]">
            <div className="flex pt-[40px] md:pt-[80px] pb-[25px] md:pb-[50px] px-[15px] md:px-[30px] flex-col items-start gap-[8px] md:gap-[16px] flex-1 text-center md:text-left">
              <p className="self-stretch text-[var(--foreground-secondary)] lg:text-[40px] text-[30px] not-italic font-[500] leading-[45px] md:leading-[75px]">
                190 +
              </p>
              <p className="self-stretch text-[#F5F5DC] text-[16px] md:text-[18px] not-italic font-[400] leading-[21px] md:leading-[27px]">
                Sản phẩm thời trang của store.
              </p>
            </div>
            <div className="flex pt-[40px] md:pt-[80px] pb-[25px] md:pb-[50px] px-[15px] md:px-[30px] flex-col items-start gap-[8px] md:gap-[16px] flex-1 text-center md:text-left">
              <p className="self-stretch text-[var(--foreground-secondary)] lg:text-[40px] text-[30px] not-italic font-[500] leading-[45px] md:leading-[75px]">
                50 +
              </p>
              <p className="self-stretch text-[#F5F5DC] text-[16px] md:text-[18px] not-italic font-[400] leading-[21px] md:leading-[27px]">
                Hàng mới về mỗi tháng.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center self-stretch md:gap-[50px] gap-[20px]">
            <div className="flex py-[20px] md:py-[40px] px-[15px] md:px-[30px] flex-col items-start gap-[8px] md:gap-[16px] flex-1 text-center md:text-left">
              <p className="self-stretch text-[var(--foreground-secondary)] lg:text-[40px] text-[30px] not-italic font-[500] leading-[45px] md:leading-[75px]">
                30%
              </p>
              <p className="self-stretch text-[#F5F5DC] text-[16px] md:text-[18px] not-italic font-[400] leading-[21px] md:leading-[27px]">
                Giảm giá các sản phẩm
              </p>
            </div>
            <div className="flex py-[20px] md:py-[40px] px-[15px] md:px-[30px] flex-col items-start gap-[8px] md:gap-[16px] flex-1 text-center md:text-left">
              <p className="self-stretch text-[var(--foreground-secondary)] lg:text-[40px] text-[30px] not-italic font-[500] leading-[45px] md:leading-[75px]">
                95%
              </p>
              <p className="self-stretch text-[#F5F5DC] text-[16px] md:text-[18px] not-italic font-[400] leading-[21px] md:leading-[27px]">
                Tỷ lệ hài lòng của khách hàng
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
