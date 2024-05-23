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
  return (
    <div className="flex mt-[100px] w-full flex-col items-start rounded-[20px] border-2 border-dashed border-[#262626]">
      <div className="flex relative pt-[80px] pr-[300px] pb-[80px] pl-[80px] flex-col items-start gap-[30px] self-stretch border-b-2 border-solid border-[#262626]">
        <p className="self-stretch text-[#FFF] text-[36px] whitespace-nowrap z-30 not-italic font-[500] leading-normal uppercase">
          The StyleLoom Testimonial Collection.
        </p>
        <p className="self-stretch text-[#676665] text-[16px] not-italic font-[500] leading-[27px]">
          At StyleLoom, our customers are the heartbeat of our brand.
        </p>
        <Image
          src={Xoay}
          alt="xoay"
          width={300}
          className="absolute object-cover right-0 top-0 opacity-75 h-full"
        />
      </div>

      <div className="flex flex-col items-start self-stretch">
        <div className="flex items-start self-stretch border-b-2 border-solid border-[#262626]">
          <div className="flex px-[30px] py-[40px] flex-col items-start gap-[40px] flex-1 border-r-2 border-solid border-[#262626]">
            <div className="flex items-center gap-[12px] self-stretch">
              <Image
                src={Avatar2}
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-[100px] object-cover bg-no-repeat bg-[#AE9B84]"
              />
              <div className="flex flex-col items-start gap-[4px] flex-1">
                <p className="self-stretch text-[#FFF] text-[16px] not-italic font-[500] leading-[30px]">
                  Sarah Thompson
                </p>
                <p className="self-stretch text-[#676665] text-[18px] not-italic font-[400] leading-[27px]">
                  New York, USA
                </p>
              </div>
              <Image src={Twitter} alt="Twitter" width={34} height={34} />
            </div>

            <div className="flex items-start gap-[5px]">
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
            </div>

            <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[500] leading-[27px]">
              Absolutely love the style and warmth of the jacket. A perfect
              blend of fashion and functionality!
            </p>
          </div>
          <div className="flex px-[30px] py-[40px] flex-col items-start gap-[40px] flex-1 border-r-2 border-solid border-[#262626]">
            <div className="flex items-center gap-[12px] self-stretch">
              <Image
                src={Avatar}
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-[100px] object-cover bg-no-repeat bg-[#AE9B84]"
              />
              <div className="flex flex-col items-start gap-[4px] flex-1">
                <p className="self-stretch text-[#FFF] text-[16px] not-italic font-[500] leading-[30px]">
                  Rajesh Patel
                </p>
                <p className="self-stretch text-[#676665] text-[18px] not-italic font-[400] leading-[27px]">
                  Mumbai, India
                </p>
              </div>
              <Image src={Twitter} alt="Twitter" width={34} height={34} />
            </div>

            <div className="flex items-start gap-[5px]">
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
            </div>

            <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[500] leading-[27px]">
              Absolutely love the style and warmth of the jacket. A perfect
              blend of fashion and functionality!
            </p>
          </div>
          <div className="flex px-[30px] py-[40px] flex-col items-start gap-[40px] flex-1">
            <div className="flex items-center gap-[12px] self-stretch">
              <Image
                src={Avatar3}
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-[100px] object-cover bg-no-repeat bg-[#AE9B84]"
              />
              <div className="flex flex-col items-start gap-[4px] flex-1">
                <p className="self-stretch text-[#FFF] text-[16px] not-italic font-[500] leading-[30px]">
                  Emily Walker
                </p>
                <p className="self-stretch text-[#676665] text-[18px] not-italic font-[400] leading-[27px]">
                  London, UK
                </p>
              </div>
              <Image src={Twitter} alt="Twitter" width={34} height={34} />
            </div>

            <div className="flex items-start gap-[5px]">
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
            </div>

            <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[500] leading-[27px]">
              Absolutely love the style and warmth of the jacket. A perfect
              blend of fashion and functionality!
            </p>
          </div>
        </div>

        <div className="flex items-start self-stretch">
          <div className="flex px-[30px] py-[40px] flex-col items-start gap-[40px] flex-1 border-r-2 border-solid border-[#262626]">
            <div className="flex items-center gap-[12px] self-stretch">
              <Image
                src={Avatar4}
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-[100px] object-cover bg-no-repeat bg-[#AE9B84]"
              />
              <div className="flex flex-col items-start gap-[4px] flex-1">
                <p className="self-stretch text-[#FFF] text-[16px] not-italic font-[500] leading-[30px]">
                  Alejandro Martinez
                </p>
                <p className="self-stretch text-[#676665] text-[18px] not-italic font-[400] leading-[27px]">
                  Barcelona, Spain
                </p>
              </div>
              <Image src={Twitter} alt="Twitter" width={34} height={34} />
            </div>

            <div className="flex items-start gap-[5px]">
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
            </div>

            <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[500] leading-[27px]">
              Absolutely love the style and warmth of the jacket. A perfect
              blend of fashion and functionality!
            </p>
          </div>
          <div className="flex px-[30px] py-[40px] flex-col items-start gap-[40px] flex-1 border-r-2 border-solid border-[#262626]">
            <div className="flex items-center gap-[12px] self-stretch">
              <Image
                src={Avatar5}
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-[100px] object-cover bg-no-repeat bg-[#AE9B84]"
              />
              <div className="flex flex-col items-start gap-[4px] flex-1">
                <p className="self-stretch text-[#FFF] text-[16px] not-italic font-[500] leading-[30px]">
                  Priya Sharma
                </p>
                <p className="self-stretch text-[#676665] text-[18px] not-italic font-[400] leading-[27px]">
                  Delhi, India
                </p>
              </div>
              <Image src={Twitter} alt="Twitter" width={34} height={34} />
            </div>

            <div className="flex items-start gap-[5px]">
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
            </div>

            <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[500] leading-[27px]">
              Absolutely love the style and warmth of the jacket. A perfect
              blend of fashion and functionality!
            </p>
          </div>
          <div className="flex px-[30px] py-[40px] flex-col items-start gap-[40px] flex-1">
            <div className="flex items-center gap-[12px] self-stretch">
              <Image
                src={Avatar6}
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-[100px] object-cover bg-no-repeat bg-[#AE9B84]"
              />
              <div className="flex flex-col items-start gap-[4px] flex-1">
                <p className="self-stretch text-[#FFF] text-[16px] not-italic font-[500] leading-[30px]">
                  Maria Rodriguez
                </p>
                <p className="self-stretch text-[#676665] text-[18px] not-italic font-[400] leading-[27px]">
                  Mexico City, Mexico
                </p>
              </div>
              <Image src={Twitter} alt="Twitter" width={34} height={34} />
            </div>

            <div className="flex items-start gap-[5px]">
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
              <FaStar fill="yellow" width={24} height={24} />
            </div>

            <p className="self-stretch text-[#81807E] text-[18px] not-italic font-[500] leading-[27px]">
              Absolutely love the style and warmth of the jacket. A perfect
              blend of fashion and functionality!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
