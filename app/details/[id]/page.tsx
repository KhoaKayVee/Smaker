// app/product/[id]/page.tsx
"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Sử dụng useParams thay cho useRouter
import Nen from "../../../public/images/nen.png";
import { FaStar } from "react-icons/fa6";
import { Flex, Progress } from "antd";

interface Product {
  id: any;
  tags: string;
  name: string;
  fit: string;
  price: string;
  image: string;
  materials: any;
  rating: any;
  totalRating: any;
  rating5: any;
  rating4: any;
  rating3: any;
  rating2: any;
  rating1: any;
}

const renderRatingStars = (roundedTotalNumberRating: any) => {
  const maxRating = 5;
  const roundedRating = Math.floor(roundedTotalNumberRating); // Làm tròn xuống
  const filledStars = Math.min(roundedRating, maxRating); // Số sao không vượt quá 5
  const emptyStars = maxRating - filledStars;

  return (
    <div className="flex items-start gap-[5px]">
      {[...Array(filledStars)].map((_, index) => (
        <FaStar key={index} fill="yellow" width={24} height={24} />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FaStar key={index + filledStars} fill="gray" width={24} height={24} />
      ))}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState<Product | null>(null);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({}); // Changed key type to string

  const handleIncrease = (id: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  };

  const handleDecrease = (id: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 1) - 1, 1),
    }));
  };

  useEffect(() => {
    if (id) {
      axios
        .get("/api/allCollections")
        .then((res) => {
          const products = res.data;
          const selectedProduct = products.find(
            (p: Product) => p.id === parseInt(Array.isArray(id) ? id[0] : id)
          );

          setProduct(selectedProduct);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
        });
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const quantity = quantities[product.id] || 1; // Ensure product is not null
  const before =
    product.rating5 * 5 +
    product.rating4 * 4 +
    product.rating3 * 3 +
    product.rating2 * 2 +
    product.rating1 * 1;

  const after =
    parseInt(product?.rating5 || 0) +
    parseInt(product?.rating4 || 0) +
    parseInt(product?.rating3 || 0) +
    parseInt(product?.rating2 || 0) +
    parseInt(product?.rating1 || 0);

  console.log(after);

  const totalNumberRating = before / after;
  const roundedTotalNumberRating = totalNumberRating.toFixed(1);

  return (
    <div className="container mt-[100px] h-full">
      <div className="flex flex-col items-start rounded-[20px] border-2 border-dashed border-[#262626]">
        <div className="flex lg:p-[80px] p-[10px] lg:tems-start items-center justify-between self-stretch border-b-2 border-solid border-[#262626]">
          <div className="flex flex-col items-start gap-[14px] flex-1">
            <p className="self-stretch text-[#FFF] lg:text-[40px] text-[14px] not-italic font-[500] leading-normal uppercase">
              {product?.name}
            </p>
            <div className="flex items-center lg:gap-[16px] gap-[8px] self-stretch">
              <p className="text-[gold] flex lg:text-[28px] text-[12px] gap-[5px] not-italic font-[600] font-mono leading-[33px]">
                <p className="text-[#FFF] lg:text-[20px] text-[10px]">
                  {" "}
                  Form:{" "}
                </p>{" "}
                {product?.fit}
              </p>
              <div className="flex lg:py-[8px] py-[2px] lg:px-[20px] px-[10px] items-center gap-[10px] rounded-[100px] bg-[#152011]">
                <p className="text-[#8AF265] lg:text-[18px] text-[8px] not-italic font-[400] leading-[27px]">
                  In stock
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center lg:gap-[20px] gap-[8px]">
            <button className="flex lg:py-[18px] lg:px-[36px] py-[4px] px-[8px]  items-start lg:gap-[4px] rounded-[12px] border border-dashed border-[#404040] bg-[#1F1F1F] text-[#FFF] lg:text-[18px] text-[8px] not-italic font-[400] leading-[27px]">
              Add To Cart
            </button>
            <button className="flex lg:py-[18px] lg:px-[36px] py-[4px] px-[8px]  items-center lg:gap-[10px] rounded-[12px] bg-[gold] text-[#0F0F0F] text-center font-mono lg:text-[24px] text-[10px] not-italic font-[700] leading-[27px]">
              Shop Now
            </button>
          </div>
        </div>

        {/* DUOI */}
        <div className="flex w-full h-full flex-col items-start self-stretch">
          <div className="flex w-full h-full  items-start gap-[30px] self-stretch border-b-2 border-solid border-[#262626]">
            <div className="w-2/3 h-full  p-[50px] border-r-2 border-dashed border-[#262626]">
              <Image
                src={product?.image}
                alt="image"
                width={1000}
                height={700}
                className="self-stretch object-cover lg:w-[1000px] w-[1000px]"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-[30px] h-full px-[10px] py-[30px]">
              <Image
                src={product?.image}
                alt="image"
                width={200}
                height={200}
                className="w-full"
              />
              <Image
                src={product?.image}
                alt="image"
                width={200}
                height={200}
                className="w-full"
              />
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col md:flex-row items-start self-stretch">
            <div className="flex flex-col items-start flex-1">
              <div className="flex py-[20px] md:py-[50px] px-[20px] md:px-[80px] items-center gap-[10px] self-stretch border-b-2 border-solid border-[#262626]">
                <p className="text-[gold] not-italic text-[20px] md:text-[28px] font-[700] leading-normal">
                  Vật liệu, cách chăm sóc và xuất sứ
                </p>
              </div>
              <div className="flex py-[20px] md:py-[50px] px-[20px] md:px-[80px] flex-col items-start gap-[16px] self-stretch border-b-2 border-solid border-[#262626]">
                <p className="self-stretch text-[gold] text-[18px] md:text-[20px] not-italic font-[500] leading-normal">
                  Nguồn gốc
                </p>
                <p className="self-stretch text-[#FFF] text-[16px] md:text-[18px] not-italic font-[400] leading-[27px]">
                  Được lấy cảm hứng từ đường phố streetwear và lấy cảm hứng từ
                  các đường phố của châu âu. Cảm hứng cho những bộ quần áo của
                  BoinShop là từ những điều đó tạo nên giá trị của thương hiệu
                  theo style đường phố.
                </p>
              </div>
              <div className="flex py-[20px] md:py-[50px] px-[20px] md:px-[80px] flex-col items-start gap-[16px] md:gap-[50px] self-stretch border-b-2 border-solid border-[#262626]">
                <div className="flex flex-col items-start gap-[16px] self-stretch">
                  <p className="self-stretch text-[gold] text-[18px] md:text-[20px] not-italic font-[500] leading-normal">
                    Chất liệu
                  </p>
                  <p className="self-stretch text-[#FFF] text-[16px] md:text-[18px] not-italic font-[400] leading-[27px]">
                    {product?.materials}
                  </p>
                </div>
                <Image
                  src={Nen}
                  alt="nen"
                  width={626}
                  height={417}
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex flex-col items-start flex-1 border-t-2 md:border-t-0 md:border-l-2 border-solid border-[#262626]">
              <div className="flex py-[20px] md:py-[50px] px-[20px] md:px-[80px] flex-col items-start gap-[20px] md:gap-[50px] self-stretch border-b-2 border-solid border-[#262626]">
                <p className="self-stretch text-[gold] text-[24px] md:text-[30px] not-italic font-[500] leading-normal">
                  Đặc trưng
                </p>
                <p className="self-stretch text-[#FFF] text-[16px] md:text-[18px] not-italic font-[400] leading-[27px]">
                  Đặc trưng của những bô quần áo BoinShop được thiết kế mang
                  tính thời trang theo kiểu đường phố streetwear, giúp người sử
                  dụng khi mang có thể nổi bật giữa đám đông, tạo hiệu ứng
                  spotlight cho riêng bản thân mình. Được thiết kế chi tiết tỉ
                  mỉ và được chọn từ những chất liệu cao cấp mang lại sự đặc
                  biệt dành cho người sử dụng.
                </p>
              </div>

              <div className="flex py-[20px] md:py-[50px] px-[20px] md:px-[80px] flex-col justify-center items-center gap-[20px] self-stretch border-b-2 border-solid border-[#262626]">
                <p className="text-[#FFF] justify-center items-start text-center not-italic text-[24px] md:text-[30px] font-[700] leading-normal">
                  Giá sản phẩm
                </p>
                <p className="text-[gold] text-[40px] md:text-[50px] font-mono not-italic font-[700] leading-[45px]">
                  {product?.price} VND
                </p>
              </div>

              <div className="flex py-[20px] md:py-[50px] px-[20px] md:px-[80px] flex-col justify-center items-center gap-[20px] md:gap-[30px] self-stretch border-b-2 border-solid border-[#262626]">
                <p className="text-[gold] text-[22px] md:text-[26px] not-italic font-mono font-[700] leading-normal">
                  Sizes có sẵn
                </p>
                <div className="flex items-start gap-[8px] md:gap-[16px]">
                  <button className="flex py-[6px] md:py-[12px] px-[20px] md:px-[50px] items-center gap-[10px] rounded-[100px] bg-[#333] text-[gold] font-mono text-[15px] md:text-[24px] not-italic font-[700] leading-[27px]">
                    S
                  </button>
                  <button className="flex py-[6px] md:py-[12px] px-[20px] md:px-[50px] items-center gap-[10px] rounded-[100px] bg-[#333] text-[gold] font-mono text-[15px] md:text-[24px] not-italic font-[700] leading-[27px]">
                    M
                  </button>
                  <button className="flex py-[6px] md:py-[12px] px-[20px] md:px-[50px] items-center gap-[10px] rounded-[100px] bg-[#333] text-[gold] font-mono text-[15px] md:text-[24px] not-italic font-[700] leading-[27px]">
                    L
                  </button>
                  <button className="flex py-[6px] md:py-[12px] px-[20px] md:px-[50px] items-center gap-[10px] rounded-[100px] bg-[#333] text-[gold] font-mono text-[15px] md:text-[24px] not-italic font-[700] leading-[27px]">
                    XL
                  </button>
                </div>
                <button className="flex text-[gold] text-[16px] md:text-[18px] not-italic font-[700] leading-[27px] py-[12px] md:py-[18px] px-[16px] md:px-[24px] items-start gap-[4px] rounded-[12px] border border-dashed border-[#404040] bg-[#1F1F1F]">
                  Thêm vào giỏ
                </button>
                <div className="flex items-center text-center justify-center gap-[10px] md:gap-[20px] self-stretch">
                  <button
                    onClick={() => handleDecrease(product?.id)}
                    className="border-[#404040] bg-[#1F1F1F] text-[gold] text-[18px] md:text-[22px] not-italic font-[700] leading-[27px] rounded-[100px] py-[4px] md:py-[8px] px-[8px] md:px-[16px] hover:bg-[#000] transition-colors duration-300"
                  >
                    -
                  </button>
                  <span className="text-[gold] bg-[#333] rounded-[12px] px-[10px] md:px-[15px] py-[4px] md:py-[8px] text-[18px] md:text-[22px] not-italic font-[600] leading-[27px]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleIncrease(product?.id)}
                    className="border-[#404040] bg-[#1F1F1F] text-[gold] text-[18px] not-italic font-[700] leading-[27px] rounded-[100px] py-[4px] md:py-[8px] px-[8px] md:px-[16px] hover:bg-[#000] transition-colors duration-300"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-start self-stretch">
                <div className="flex py-[20px] md:py-[50px] px-[20px] md:px-[80px] items-start text-center justify-center gap-[10px] self-stretch border-b-2 border-solid border-[#262626]">
                  <p className="text-[gold] flex-1 text-[20px] md:text-[26px] not-italic font-[700] leading-normal">
                    Xếp hạng & Đánh giá
                  </p>
                </div>

                <div className="flex flex-col md:flex-row py-[20px] md:py-[50px] px-[20px] md:px-[80px] items-start w-full gap-[20px] md:gap-[100px] self-stretch">
                  <div className="flex flex-col items-start gap-[10px]">
                    <p className="text-[gold] font-mono text-[40px] md:text-[50px] not-italic font-[500] leading-[75px]">
                      {roundedTotalNumberRating}
                    </p>
                    {renderRatingStars(roundedTotalNumberRating)}

                    <p className="self-stretch text-[#FFF] text-[16px] md:text-[18px] not-italic font-[400] leading-[27px]">
                      {product?.totalRating} Ratings
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-[16px] flex-1  w-full">
                    <div className="flex items-center lg:gap-[20px] gap-[10px] self-stretch">
                      <FaStar
                        className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                        fill="yellow"
                        width={24}
                        height={24}
                      />
                      <div className="flex items-center lg:gap-[10px] gap-[6px]">
                        <div className="text-[#81807E] lg:text-[18px] text-[14px] not-italic font-[400] leading-[27px]">
                          05
                        </div>
                        <p className="min-w-[30px]">({product?.rating5})</p>
                      </div>
                      <div className="flex flex-col lg:p-[10px] p-[5px] items-start gap-[10px] flex-1 rounded-[100px] border border-solid border-[#262626] bg-[#1A1A1A]">
                        <Progress
                          percent={
                            (product?.rating5 * 100) / product?.totalRating
                          }
                          size="small"
                          strokeColor="#AE9B84"
                          showInfo={false}
                        />
                      </div>
                    </div>
                    <div className="flex items-center lg:gap-[20px] gap-[10px] self-stretch">
                      <FaStar
                        className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                        fill="yellow"
                        width={24}
                        height={24}
                      />
                      <div className="flex items-center lg:gap-[10px] gap-[6px]">
                        <div className="text-[#81807E] lg:text-[18px] text-[14px] not-italic font-[400] leading-[27px]">
                          04
                        </div>
                        <p className="min-w-[30px]">({product?.rating4})</p>
                      </div>
                      <div className="flex flex-col lg:p-[10px] p-[5px] items-start gap-[10px] flex-1 rounded-[100px] border border-solid border-[#262626] bg-[#1A1A1A]">
                        <Progress
                          percent={
                            (product?.rating4 * 100) / product?.totalRating
                          }
                          size="small"
                          strokeColor="#AE9B84"
                          showInfo={false}
                        />
                      </div>
                    </div>
                    <div className="flex items-center lg:gap-[20px] gap-[10px] self-stretch">
                      <FaStar
                        className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                        fill="yellow"
                        width={24}
                        height={24}
                      />
                      <div className="flex items-center lg:gap-[10px] gap-[6px]">
                        <div className="text-[#81807E] lg:text-[18px] text-[14px] not-italic font-[400] leading-[27px]">
                          03
                        </div>
                        <p className="min-w-[30px]">({product?.rating3})</p>
                      </div>
                      <div className="flex flex-col lg:p-[10px] p-[5px] items-start gap-[10px] flex-1 rounded-[100px] border border-solid border-[#262626] bg-[#1A1A1A]">
                        <Progress
                          percent={
                            (product?.rating3 * 100) / product?.totalRating
                          }
                          size="small"
                          strokeColor="#AE9B84"
                          showInfo={false}
                        />
                      </div>
                    </div>
                    <div className="flex items-center lg:gap-[20px] gap-[10px] self-stretch">
                      <FaStar
                        className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                        fill="yellow"
                        width={24}
                        height={24}
                      />
                      <div className="flex items-center lg:gap-[10px] gap-[6px]">
                        <div className="text-[#81807E] lg:text-[18px] text-[14px] not-italic font-[400] leading-[27px]">
                          02
                        </div>
                        <p className="min-w-[30px]">({product?.rating2})</p>
                      </div>
                      <div className="flex flex-col lg:p-[10px] p-[5px] items-start gap-[10px] flex-1 rounded-[100px] border border-solid border-[#262626] bg-[#1A1A1A]">
                        <Progress
                          percent={
                            (product?.rating2 * 100) / product?.totalRating
                          }
                          size="small"
                          strokeColor="#AE9B84"
                          showInfo={false}
                        />
                      </div>
                    </div>
                    <div className="flex items-center lg:gap-[20px] gap-[10px] self-stretch">
                      <FaStar
                        className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                        fill="yellow"
                        width={24}
                        height={24}
                      />
                      <div className="flex items-center lg:gap-[10px] gap-[6px]">
                        <div className="text-[#81807E] lg:text-[18px] text-[14px] not-italic font-[400] leading-[27px]">
                          01
                        </div>
                        <p className="min-w-[30px]">({product?.rating1})</p>
                      </div>
                      <div className="flex flex-col lg:p-[10px] p-[5px] items-start gap-[10px] flex-1 rounded-[100px] border border-solid border-[#262626] bg-[#1A1A1A]">
                        <Progress
                          percent={
                            (product?.rating1 * 100) / product?.totalRating
                          }
                          size="small"
                          strokeColor="#AE9B84"
                          showInfo={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
