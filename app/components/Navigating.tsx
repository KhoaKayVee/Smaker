import React from "react";
import Vector from "../../public/Vector.png";
import Image from "next/image";

const Navigating = () => {
  return (
    <div className="flex mt-[100px] flex-col items-start rounded-[20px] border-2 border-dashed border-[#6b4d57]">
      <div className="flex relative pt-[80px] lg:pr-[300px] pb-[80px] lg:pl-[80px] pr-[40px] pl-[40px] flex-col items-start gap-[30px] self-stretch border-b-2 border-solid border-[#262626]">
        <p className="self-stretch text-[var(--foreground-primary)] lg:text-[40px] text-[20px] not-italic font-[500] leading-normal uppercase lg:whitespace-nowrap whitespace-normal z-30">
          HÀNH TRÌNH THỜI TRANG BoinStore.
        </p>
        <p className="self-stretch text-[var(--text-color)] lg:text-[18px] text-[10px] not-italic font-[500] leading-[27px]">
          Tại BoinStore, chúng tôi đã thiết kế trải nghiệm mua sắm đơn giản để
          giúp bạn tiếp cận thời trang.
        </p>
        <Image
          src={Vector}
          alt="vector"
          className="w-[250px] lg:flex hidden opacity-70 h-full object-cover absolute right-0 top-0"
        />
      </div>

      <div className="flex flex-col md:flex-row items-start self-stretch">
        <div className="flex p-[50px] flex-col items-start gap-[30px] flex-1 border-b-2 md:border-b-0 md:border-r-2 border-solid border-[#262626]">
          <p className="self-stretch text-[var(--foreground-primary)] text-[20px] not-italic font-[400] leading-[30px]">
            Bước 01
          </p>
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <p className="self-stretch text-[var(--foreground-secondary)] text-[22px] not-italic font-[500] leading-[42px] whitespace-nowrap">
              Khám phá xu hướng
            </p>
            <p className="self-stretch text-[var(--text-color)] text-[18px] not-italic font-[400] leading-[27px]">
              Khám phá bộ sưu tập hơn 1000 phong cách được tuyển chọn của chúng
              tôi, bao gồm các xu hướng thời trang toàn cầu.
            </p>
          </div>
        </div>
        <div className="flex p-[50px] flex-col items-start gap-[30px] flex-1 border-b-2 md:border-b-0 md:border-r-2 border-solid border-[#262626]">
          <p className="self-stretch text-[var(--foreground-primary)] text-[20px] not-italic font-[400] leading-[30px]">
            Bước 02
          </p>
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <p className="self-stretch text-[var(--foreground-secondary)] text-[22px] not-italic font-[500] leading-[42px] flex-nowrap whitespace-nowrap">
              Sự dẫn đầu
            </p>
            <p className="self-stretch text-[var(--text-color)] text-[18px] not-italic font-[400] leading-[27px]">
              Các bộ lọc và danh mục trực quan giúp bạn tìm thấy những phần hoàn
              hảo phù hợp với phong cách của bạn.
            </p>
          </div>
        </div>
        <div className="flex p-[50px] flex-col items-start gap-[30px] flex-1 border-b-2 md:border-b-0 md:border-r-2 border-solid border-[#262626]">
          <p className="self-stretch text-[var(--foreground-primary)] text-[20px] not-italic font-[400] leading-[30px]">
            Bước 03
          </p>
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <p className="self-stretch text-[var(--foreground-secondary)] text-[22px] not-italic font-[500] leading-[42px] whitespace-nowrap">
              Thanh toán an toàn
            </p>
            <p className="self-stretch text-[var(--text-color)] text-[18px] not-italic font-[400] leading-[27px]">
              Nhiều tùy chọn thanh toán và giao dịch được mã hóa đảm bảo mua
              hàng an toàn và không gặp rắc rối.
            </p>
          </div>
        </div>
        <div className="flex p-[50px] flex-col items-start gap-[30px] flex-1">
          <p className="self-stretch text-[var(--foreground-primary)] text-[20px] not-italic font-[400] leading-[30px]">
            Bước 04
          </p>
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <p className="self-stretch text-[var(--foreground-secondary)] text-[22px] not-italic font-[500] leading-[42px] whitespace-nowrap">
              Đập hộp trong hạnh phúc
            </p>
            <p className="self-stretch text-[var(--text-color)] text-[18px] not-italic font-[400] leading-[27px]">
              Mở hộp trải nghiệm thời trang được giao đến tận nhà bạn, sẵn sàng
              nâng tầm phong cách của bạn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigating;
