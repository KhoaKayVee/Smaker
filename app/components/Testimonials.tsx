import React, { useState } from "react";
import Xoay from "../../public/vongxoay.png";
import Image from "next/image";
import Avatar from "../../public/avatar1.png";
import Avatar2 from "../../public/avatar2.png";
import Avatar3 from "../../public/avatar3.png";
import Avatar4 from "../../public/avata4.png";
import Avatar5 from "../../public/avatar5.png";
import Avatar6 from "../../public/avatar6.png";
import Twitter from "../../public/twitter.png";
import Default from "../../public/boinshop/avatardefault.jpg";
import { FaStar } from "react-icons/fa";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [showTesti, setShowTesti] = useState(false);

  const handleClick = () => {
    setShowTesti(!showTesti);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const variants = {
    hidden: { opacity: 0, y: 200, scale: 0.5, rotate: -90 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 3,
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  const testimonials = [
    {
      id: 1,
      name: "Trần Văn Nam",
      location: "HCM - VN",
      avatar: Default,
      review:
        "Hoàn toàn thích phong cách và sự ấm áp của chiếc áo khoác. Sự kết hợp hoàn hảo giữa thời trang",
    },
    {
      id: 2,
      name: "Phạm Vũ Long",
      location: "HCM - VN",
      avatar: Default,
      review:
        "BoinStore vượt quá mong đợi của tôi. Chất lượng và thiết kế của chiếc váy khiến tôi cảm thấy mình như một nữ hoàng. Vận chuyển nhanh chóng, quá!",
    },
    {
      id: 3,
      name: "Quang Anh Bùi",
      location: "HN - VN",
      avatar: Default,
      review:
        "Đáng yêu và thoải mái! Con gái tôi thích bộ trang phục mới của nó. Cảm ơn BoinStore vì đã mặc quần áo cho tín đồ thời trang nhí của chúng tôi.",
    },
    {
      id: 4,
      name: "Đặng Tuấn Vỹ",
      location: "HP - VN",
      avatar: Default,
      review:
        "Ấn tượng bởi chất lượng và phong cách. Những đôi giày này gây chú ý ở mọi sự kiện. BoinStore, bạn đã có được một khách hàng trung thành!",
    },
    {
      id: 5,
      name: "Vũ Vỹ Vy",
      location: "ĐN - VN",
      avatar: Default,
      review:
        "Hoàn toàn phù hợp và chất lượng vượt trội. Những chiếc quần jean này đã trở thành trang phục đi chơi bình thường và sang trọng của tôi.",
    },
    {
      id: 6,
      name: "Phạm Pháp Phương",
      location: "BG - VN",
      avatar: Default,
      review:
        "Sành điệu nhưng không ảnh hưởng đến sự thoải mái. BoinStore biết cách cân bằng giữa thời trang và chức năng.",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="flex mt-[100px] w-full flex-col items-start rounded-[20px] border-2 border-dashed border-[#6b4d57]"
    >
      <div className="relative lg:pt-[80px] pt-[40px] lg:pr-[300px] pr-[40px] lg:pb-[80px] pb-[40px] lg:pl-[80px] pl-[40px] flex flex-col items-start gap-[30px] w-full border-b-2 border-solid border-[#262626]">
        <p className="self-stretch text-[var(--foreground-primary)] lg:text-[36px] text-[26px] lg:whitespace-nowrap z-30 not-italic font-[500] leading-normal uppercase">
          BỘ SƯU TẬP CHỨNG THỰC CỦA BOINSTORE.
        </p>
        <p className="self-stretch text-[var(--text-color)] text-[16px] not-italic font-[500] leading-[27px]">
          Tại BOINSTORE, khách hàng là trái tim của thương hiệu chúng tôi.
        </p>
        <Image
          src={Xoay}
          alt="xoay"
          width={300}
          className="absolute object-cover right-0 top-0 opacity-75 h-full lg:flex hidden"
        />
        <div
          className="m-auto cursor-pointer bounce-arrow"
          onClick={handleClick}
        >
          <RiArrowDownDoubleFill size={36} fill="gold" />
        </div>
      </div>

      {showTesti && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col lg:items-start items-center lg:p-[40px] p-[20px]  border-2 border-dashed border-[#262626] rounded-md"
            >
              <div className="flex items-center gap-[12px] self-stretch">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] object-cover bg-no-repeat bg-[#AE9B84]"
                />
                <div className="flex flex-col items-start gap-[4px] flex-1">
                  <p className="text-[#FFF] lg:text-[16px] text-[var(--foreground-secondary)] not-italic font-[500] leading-[30px]">
                    {testimonial.name}
                  </p>
                  <p className="text-[#fff] lg:text-[18px] text-[16px] not-italic font-[400] leading-[27px]">
                    {testimonial.location}
                  </p>
                </div>
                <Image
                  src={Twitter}
                  alt="Twitter"
                  width={34}
                  height={34}
                  className="lg:w-[34px] w-[24px] lg:h-[34px] h-[24px]"
                />
              </div>

              <div className="flex items-start gap-[5px] mt-4">
                <FaStar fill="yellow" width={24} height={24} />
                <FaStar fill="yellow" width={24} height={24} />
                <FaStar fill="yellow" width={24} height={24} />
                <FaStar fill="yellow" width={24} height={24} />
                <FaStar fill="yellow" width={24} height={24} />
              </div>

              <p className="text-[var(--text-color)] text-[18px] not-italic font-[500] leading-[27px] mt-4">
                {testimonial.review}
              </p>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Testimonials;
