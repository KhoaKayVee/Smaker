import React from "react";
import Image from "next/image";
import Nen from "../../public/boinshop/BANNER.jpg";

const Hero = () => {
  return (
    <div className="flex mt-[36px] flex-col items-start gap-[-62px] rounded-[20px] border-2 border-dashed border-[#262626]">
      <div className="flex flex-col items-center gap-[-27px] self-stretch relative">
        <Image src={Nen} alt="bg" className="self-stretch rounded-[8px] " />
      </div>

      <div className="flex flex-col lg:flex-row items-center self-stretch">
        <div className="flex flex-col pt-[100px] pr-[80px] pb-[80px] pl-[80px] items-start gap-[30px] flex-1 border-b-2 lg:border-b-0 lg:border-r-2 border-solid border-[#262626]">
          <ul className="flex lg:items-center items-start lg:gap-[14px] gap-[12px]">
            <li className="flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] lg:py-[14px] lg:px-[24px] py-[4px] px-[8px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333]">
              ALL
            </li>
            <li className="flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] lg:py-[14px] lg:px-[24px] py-[4px] px-[8px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333]">
              TSHIRTS
            </li>
            <li className="flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] lg:py-[14px] lg:px-[24px] py-[4px] px-[8px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333]">
              SHIRTS
            </li>
            <li className="flex text-[#B3B3B2] text-center text-[18px] not-italic font-[400] leading-[27px] lg:py-[14px] lg:px-[24px] py-[4px] px-[8px] items-center gap-[10px] rounded-[12px] border border-dashed border-[#333]">
              PANTS
            </li>
          </ul>
          <p className="self-stretch text-[#FFF] lg:text-[44px] text-[30px] not-italic font-[500] leading-normal uppercase">
            NÂNG CẤP PHONG CÁCH CỦA BẠN VỚI BOINSTORE
          </p>
          <p className="self-stretch text-[#676665] text-[18px] not-italic font-[400] leading-[27px]">
            Khám phá thế giới thời trang tại BoinStore, nơi xu hướng đáp ứng
            được khả năng chi trả. Đắm chìm trong những phong cách mới nhất và
            nắm bắt các chương trình khuyến mãi độc quyền.
          </p>
        </div>

        <div className="flex flex-col justify-end items-center flex-1 self-stretch lg:p-[40px] p-[20px]">
          <div className="flex flex-col md:flex-row items-center self-stretch md:gap-[50px] gap-[20px]">
            <div className="flex pt-[40px] md:pt-[80px] pb-[25px] md:pb-[50px] px-[15px] md:px-[30px] flex-col items-start gap-[8px] md:gap-[16px] flex-1 text-center md:text-left">
              <p className="self-stretch text-[#FFF] lg:text-[40px] text-[30px] not-italic font-[500] leading-[45px] md:leading-[75px]">
                190 +
              </p>
              <p className="self-stretch text-[#81807E] text-[16px] md:text-[18px] not-italic font-[400] leading-[21px] md:leading-[27px]">
                Sản phẩm thời trang của store.
              </p>
            </div>
            <div className="flex pt-[40px] md:pt-[80px] pb-[25px] md:pb-[50px] px-[15px] md:px-[30px] flex-col items-start gap-[8px] md:gap-[16px] flex-1 text-center md:text-left">
              <p className="self-stretch text-[#FFF] lg:text-[40px] text-[30px] not-italic font-[500] leading-[45px] md:leading-[75px]">
                50 +
              </p>
              <p className="self-stretch text-[#81807E] text-[16px] md:text-[18px] not-italic font-[400] leading-[21px] md:leading-[27px]">
                Hàng mới về mỗi tháng.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center self-stretch md:gap-[50px] gap-[20px]">
            <div className="flex py-[20px] md:py-[40px] px-[15px] md:px-[30px] flex-col items-start gap-[8px] md:gap-[16px] flex-1 text-center md:text-left">
              <p className="self-stretch text-[#FFF] lg:text-[40px] text-[30px] not-italic font-[500] leading-[45px] md:leading-[75px]">
                30%
              </p>
              <p className="self-stretch text-[#81807E] text-[16px] md:text-[18px] not-italic font-[400] leading-[21px] md:leading-[27px]">
                Giảm giá các sản phẩm
              </p>
            </div>
            <div className="flex py-[20px] md:py-[40px] px-[15px] md:px-[30px] flex-col items-start gap-[8px] md:gap-[16px] flex-1 text-center md:text-left">
              <p className="self-stretch text-[#FFF] lg:text-[40px] text-[30px] not-italic font-[500] leading-[45px] md:leading-[75px]">
                95%
              </p>
              <p className="self-stretch text-[#81807E] text-[16px] md:text-[18px] not-italic font-[400] leading-[21px] md:leading-[27px]">
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
