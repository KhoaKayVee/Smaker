import React from "react";
import Xoay from "../../public/vongxoay.png";
import Image from "next/image";
import Avatar from "../../public/avatar1.png";
import Avatar2 from "../../public/avatar2.png";
import Avatar3 from "../../public/avatar3.png";
import Avatar4 from "../../public/avata4.png";
import Avatar5 from "../../public/avatar5.png";
import Avatar6 from "../../public/avatar6.png";
import Twitter from "../../public/twitter.png";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      location: "New York, USA",
      avatar: Avatar2,
      review:
        "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
    },
    {
      id: 2,
      name: "Rajesh Patel",
      location: "Mumbai, India",
      avatar: Avatar,
      review:
        "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
    },
    {
      id: 3,
      name: "Emily Walker",
      location: "London, UK",
      avatar: Avatar3,
      review:
        "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
    },
    {
      id: 4,
      name: "Alejandro Martinez",
      location: "Barcelona, Spain",
      avatar: Avatar4,
      review:
        "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
    },
    {
      id: 5,
      name: "Priya Sharma",
      location: "Delhi, India",
      avatar: Avatar5,
      review:
        "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
    },
    {
      id: 6,
      name: "Maria Rodriguez",
      location: "Mexico City, Mexico",
      avatar: Avatar6,
      review:
        "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
    },
  ];

  return (
    <div className="flex mt-[100px] w-full flex-col items-start rounded-[20px] border-2 border-dashed border-[#262626]">
      <div className="relative lg:pt-[80px] pt-[40px] lg:pr-[300px] pr-[40px] lg:pb-[80px] pb-[40px] lg:pl-[80px] pl-[40px] flex flex-col items-start gap-[30px] w-full border-b-2 border-solid border-[#262626]">
        <p className="self-stretch text-[#FFF] lg:text-[36px] text-[26px] lg:whitespace-nowrap z-30 not-italic font-[500] leading-normal uppercase">
          The StyleLoom Testimonial Collection.
        </p>
        <p className="self-stretch text-[#676665] text-[16px] not-italic font-[500] leading-[27px]">
          At StyleLoom, our customers are the heartbeat of our brand.
        </p>
        <Image
          src={Xoay}
          alt="xoay"
          width={300}
          className="absolute object-cover right-0 top-0 opacity-75 h-full lg:flex hidden"
        />
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
                <p className="text-[#FFF] lg:text-[16px] text-[14px] not-italic font-[500] leading-[30px]">
                  {testimonial.name}
                </p>
                <p className="text-[#676665] lg:text-[18px] text-[16px] not-italic font-[400] leading-[27px]">
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

            <p className="text-[#81807E] text-[18px] not-italic font-[500] leading-[27px] mt-4">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
