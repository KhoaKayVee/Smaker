"use client";

import React, { useState } from "react";
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
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Introduction = () => {
  const [showIntro, setShowintro] = useState(false);
  const handleClick = () => {
    setShowintro(!showIntro);
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Chỉ kích hoạt một lần
    threshold: 0.3, // Kích hoạt khi 10% của component xuất hiện
  });

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 3.5,
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -100, rotate: -180, scale: 0 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="flex mt-[100px] w-full flex-col items-start rounded-[20px] border-2 border-dashed border-[#6b4d57]"
    >
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col  pt-[80px] lg:pr-[300px] pb-[80px] lg:pl-[80px] pr-[10px] pl-[10px] items-start gap-[30px] self-stretch border-b-2 border-solid border-[#262626]"
      >
        <p className="self-stretch text-[var(--foreground-primary)] truncate lg:text-[30px] text-[16px] whitespace-nowrap not-italic font-[500] leading-normal uppercase">
          XU HƯỚNG THỦ CÔNG, SỰ TIN TƯỞNG TRUYỀN CẢM HỨNG
        </p>
        <p className="self-stretch text-[var(--text-color)] lg:text-[18px] text-[12px] not-italic font-[400] leading-[27px]">
          Khám phá thế giới thời trang tại BoinStore, nơi xu hướng đáp ứng được
          khả năng chi trả.
        </p>
        <div
          className="m-auto cursor-pointer bounce-arrow"
          onClick={handleClick}
        >
          <RiArrowDownDoubleFill size={36} fill="gold" />
        </div>
      </motion.div>
      {showIntro && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start self-stretch"
        >
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
                <p className="self-stretch text-[var(--foreground-secondary)] text-[24px] not-italic font-[500] leading-[36px]">
                  Nghề thủ công đam mê
                </p>
                <p className="self-stretch text-[var(--text-color)] text-[20px] not-italic font-[400] leading-[27px]">
                  Mỗi sản phẩm may mặc tại Boinstore đều được chế tạo bằng niềm
                  đam mê, phản ánh cam kết của chúng tôi về chất lượng và sự đổi
                  mới.
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
                  <Image
                    src={So2}
                    alt="ngoisao"
                    className="w-[34px] h-[34px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[16px] self-stretch">
                <p className="self-stretch text-[var(--foreground-secondary)] text-[24px] not-italic font-[500] leading-[36px]">
                  Chuyển tiếp thời trang
                </p>
                <p className="self-stretch text-[var(--text-color)] text-[18px] not-italic font-[400] leading-[27px]">
                  Chúng tôi không chỉ là một thương hiệu; chúng tôi là những
                  người tạo ra xu hướng, tuyển chọn những phong cách mang lại
                  sức mạnh và truyền cảm hứng cho sự tự tin.
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
                  <Image
                    src={So3}
                    alt="ngoisao"
                    className="w-[34px] h-[34px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[16px] self-stretch">
                <p className="self-stretch text-[var(--foreground-secondary)] text-[24px] not-italic font-[500] leading-[36px]">
                  Phương pháp tiếp cận lấy khách hàng làm trung tâm
                </p>
                <p className="self-stretch text-[var(--text-color)] text-[18px] not-italic font-[400] leading-[27px]">
                  Tại BoinStore, khách hàng là trọng tâm trong mọi việc chúng
                  tôi làm. Sự hài lòng của bạn là thước đo thành công của chúng
                  tôi.
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
                  <Image
                    src={So4}
                    alt="ngoisao"
                    className="w-[34px] h-[34px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[16px] self-stretch">
                <p className="self-stretch text-[var(--foreground-secondary)] text-[24px] not-italic font-[500] leading-[36px]">
                  Cảm hứng toàn cầu
                </p>
                <p className="self-stretch text-[var(--text-color)] text-[18px] not-italic font-[400] leading-[27px]">
                  Chịu ảnh hưởng của xu hướng toàn cầu, chúng tôi mang đến cho
                  bạn bộ sưu tập đa dạng và năng động, thể hiện tinh thần thời
                  trang từ khắp nơi trên thế giới.
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
                  <Image
                    src={So5}
                    alt="ngoisao"
                    className="w-[34px] h-[34px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[16px] self-stretch">
                <p className="self-stretch text-[var(--foreground-secondary)]  text-[24px] not-italic font-[500] leading-[36px]">
                  Trao quyền cho phong cách của bạn
                </p>
                <p className="self-stretch text-[var(--text-color)] text-[18px] not-italic font-[400] leading-[27px]">
                  Ngoài quần áo, BoinStore còn là một phong cách sống. Hãy tham
                  gia cùng chúng tôi trên hành trình thể hiện bản thân và trao
                  quyền thông qua thời trang.
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
                  <Image
                    src={So6}
                    alt="ngoisao"
                    className="w-[34px] h-[34px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[16px] self-stretch">
                <p className="self-stretch text-[var(--foreground-secondary)] text-[24px] not-italic font-[500] leading-[36px]">
                  Thực hành bền vững
                </p>
                <p className="self-stretch text-[var(--text-color)] text-[18px] not-italic font-[400] leading-[27px]">
                  BoinStore cam kết phát triển bền vững, tích hợp các hoạt động
                  thân thiện với môi trường vào quy trình sản xuất của chúng
                  tôi.
                </p>
              </div>
              <Image
                src={Sao6}
                alt="sao"
                className="w-[200px] h-[200px] absolute right-0 top-0"
              />
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Introduction;
