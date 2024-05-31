import Image from "next/image";
import React from "react";
import Baner from "../../public/banner.png";
import { useInView } from "react-intersection-observer";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Banner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2.5,
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  return (
    <div className="flex flex-col shadow-lg shadow-[var(--foreground-primary)] md:flex-row mt-[100px] relative w-full p-6 md:pt-[100px] md:pr-[142px] md:pb-[100px] md:pl-[100px] items-center gap-4 md:gap-[150px] rounded-[20px] bg-[#00224d] bg-opacity-40">
      <Image
        src={Baner}
        alt="banner"
        width={400}
        className="flex items-center justify-center absolute right-0 top-0 h-full opacity-35 object-cover"
      />
      <div className="flex flex-col items-start gap-4 md:gap-[16px] flex-1 z-10">
        <motion.p
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="self-stretch text-[var(--foreground-primary)] text-[22px] md:text-[30px] lg:text-[40px] not-italic font-[500] leading-[36px] md:leading-[48px] lg:leading-[60px] uppercase"
        >
          NÂNG CAO TỦ ĐỒ CỦA BẠN
        </motion.p>
        <motion.p
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="self-stretch text-[var(--text-color)] text-[16px] md:text-[18px] font-[400] not-italic leading-[24px] md:leading-[27px]"
        >
          Đừng bỏ lỡ - hãy trải nghiệm đỉnh cao của thời trang bằng cách nhấp
          vào Mua ngay và đón nhận một thế giới thanh lịch sang trọng được giao
          đến tận nhà bạn. Hành trình phong cách của bạn bắt đầu từ đây.
        </motion.p>
      </div>

      <motion.button
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className="py-[12px] md:py-[18px] z-30 px-[16px] md:px-[24px] items-start gap-[4px] rounded-[12px]  text-[16px] md:text-[18px] not-italic font-[400] leading-[24px] md:leading-[27px]"
      >
        Shop Now
      </motion.button>
    </div>
  );
};

export default Banner;
