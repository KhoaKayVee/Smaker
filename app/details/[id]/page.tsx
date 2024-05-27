// app/product/[id]/page.tsx
"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Sử dụng useParams thay cho useRouter
import Nen from "../../../public/images/nen.png";
import { FaStar } from "react-icons/fa6";
import { Flex, Progress } from "antd";
import { toast } from "react-toastify";
import { useCart, CartItem } from "@/app/context/CartContext";

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

const ProductDetail = ({ params }: any) => {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState<Product | null>(null);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({}); // Changed key type to string
  // CART
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");
  const router = useRouter();

  const { dispatch } = useCart();

  const getCartItemsFromLocalStorage = () => {
    // Kiểm tra xem local storage có khả dụng không
    if (typeof window !== "undefined") {
      const cartItems = localStorage.getItem("cartItems");
      return cartItems ? JSON.parse(cartItems) : [];
    }
    return [];
  };

  const cartItems = getCartItemsFromLocalStorage();

  const handleAddToCart = async () => {
    if (product) {
      try {
        const response = await fetch("/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: product.id,
            name: product.name,
            price: parseFloat(product.price.replace(/\./g, "")),
            image: product.image,
            size,
            quantity,
          }),
        });

        if (response.ok) {
          toast.success("Đã thêm vào giỏ hàng thành công!");
          const cartItem: CartItem = {
            id: product.id,
            name: product.name,
            price: parseFloat(product.price.replace(/\./g, "")),
            image: product.image,
            size,
            quantity,
          };
          dispatch({ type: "ADD_TO_CART", payload: cartItem });
        } else {
          toast.error("Thêm thất bại");
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };
  // CART

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

  const totalNumberRating = before / after;
  const roundedTotalNumberRating = totalNumberRating.toFixed(1);

  return (
    <div className="container mt-[100px] h-full">
      <div className="flex flex-col items-start rounded-[20px] border-2 border-dashed border-[#262626]">
        <div className="flex lg:p-[80px] p-[10px] lg:tems-start items-center justify-between self-stretch border-b-2 border-solid border-[#262626]">
          <div className="flex flex-col items-start gap-[14px] flex-1">
            <p className="self-stretch text-[var(--foreground-primary)] lg:text-[40px] text-[14px] not-italic font-[500] leading-normal uppercase">
              {product?.name}
            </p>
            <div className="flex items-center lg:gap-[16px] gap-[8px] self-stretch">
              <p className="text-[var(--foreground-secondary)] flex lg:text-[28px] text-[12px] gap-[5px] not-italic font-[600] font-mono leading-[33px]">
                <p className="text-[var(--text-color)] lg:text-[20px] text-[10px]">
                  Form:
                </p>
                {product?.fit}
              </p>
              <div className="flex lg:py-[8px] py-[2px] lg:px-[20px] px-[10px] items-center gap-[10px] rounded-[100px] bg-[#333]">
                <p className="text-[#59e959] lg:text-[18px] text-[8px] not-italic font-[400] leading-[27px]">
                  In stock
                </p>
              </div>
            </div>
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
                <p className="text-[var(--foreground-primary)] not-italic text-[20px] md:text-[28px] font-[700] leading-normal">
                  Vật liệu, cách chăm sóc và xuất sứ
                </p>
              </div>
              <div className="flex py-[20px] md:py-[50px] px-[20px] md:px-[80px] flex-col items-start gap-[16px] self-stretch border-b-2 border-solid border-[#262626]">
                <p className="self-stretch text-[var(--foreground-secondary)] text-[18px] md:text-[20px] not-italic font-[500] leading-normal">
                  Nguồn gốc
                </p>
                <p className="self-stretch text-[var(--text-color)] text-[16px] md:text-[18px] not-italic font-[400] leading-[27px]">
                  Được lấy cảm hứng từ đường phố streetwear và lấy cảm hứng từ
                  các đường phố của châu âu. Cảm hứng cho những bộ quần áo của
                  BoinShop là từ những điều đó tạo nên giá trị của thương hiệu
                  theo style đường phố.
                </p>
              </div>
              <div className="flex py-[20px] md:py-[50px] px-[20px] md:px-[80px] flex-col items-start gap-[16px] md:gap-[50px] self-stretch border-b-2 border-solid border-[#262626]">
                <div className="flex flex-col items-start gap-[16px] self-stretch">
                  <p className="self-stretch text-[var(--foreground-secondary)] text-[18px] md:text-[20px] not-italic font-[500] leading-normal">
                    Chất liệu
                  </p>
                  <p className="self-stretch text-[var(--text-color)] text-[16px] md:text-[18px] not-italic font-[400] leading-[27px]">
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
                <p className="self-stretch text-[var(--foreground-primary)] text-[24px] md:text-[30px] not-italic font-[500] leading-normal">
                  Đặc trưng
                </p>
                <p className="self-stretch text-[var(--text-color)] text-[16px] md:text-[18px] not-italic font-[400] leading-[27px]">
                  Đặc trưng của những bô quần áo BoinShop được thiết kế mang
                  tính thời trang theo kiểu đường phố streetwear, giúp người sử
                  dụng khi mang có thể nổi bật giữa đám đông, tạo hiệu ứng
                  spotlight cho riêng bản thân mình. Được thiết kế chi tiết tỉ
                  mỉ và được chọn từ những chất liệu cao cấp mang lại sự đặc
                  biệt dành cho người sử dụng.
                </p>
              </div>

              <div className="flex py-[20px] md:py-[50px] px-[20px] md:px-[80px] flex-col justify-center items-center gap-[20px] self-stretch border-b-2 border-solid border-[#262626]">
                <p className="text-[var(--foreground-primary)] justify-center items-start text-center not-italic text-[24px] md:text-[30px] font-[700] leading-normal">
                  Giá sản phẩm
                </p>
                <p className="text-[var(--foreground-secondary)] text-[40px] md:text-[50px] font-mono not-italic font-[700] leading-[45px]">
                  {product?.price} VND
                </p>
              </div>

              <div className="flex py-[20px] md:py-[50px] px-[20px] md:px-[80px] flex-col justify-center items-center gap-[20px] md:gap-[30px] self-stretch border-b-2 border-solid border-[#262626]">
                <p className="text-[var(--foreground-primary)] text-[22px] md:text-[26px] not-italic font-mono font-[700] leading-normal">
                  Chọn size
                </p>
                <div className="flex items-start gap-[8px] md:gap-[16px]">
                  {["S", "M", "L", "XL"].map((sizeOption) => (
                    <button
                      key={sizeOption}
                      className={`flex text-[var(--text-color)] shadow-xl py-[6px] md:py-[12px] px-[20px] md:px-[50px] items-center gap-[10px] rounded-[100px]  font-mono text-[15px] md:text-[24px] not-italic font-[700] leading-[27px] ${
                        size === sizeOption
                          ? "bg-[var(--btn-secondary)]"
                          : "bg-[#333]"
                      }`}
                      onClick={() => setSize(sizeOption)}
                    >
                      {sizeOption}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex bg-[var(--btn-primary)] text-[#fff] text-[16px] md:text-[18px] not-italic font-[700] leading-[27px] py-[12px] md:py-[18px] px-[16px] md:px-[24px] items-start gap-[4px] rounded-[12px] border border-dashed border-[#404040]"
                >
                  Thêm vào giỏ
                </button>
                <div className="flex items-center text-center justify-center gap-[10px] md:gap-[20px] self-stretch">
                  <button
                    onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                    className="border-[#404040] bg-[#1F1F1F] text-[var(--text-color)] text-[18px] md:text-[22px] not-italic font-[700] leading-[27px] rounded-[100px] py-[4px] md:py-[8px] px-[8px] md:px-[16px] hover:bg-[#000] transition-colors duration-300"
                  >
                    -
                  </button>
                  <span className="text-[var(--text-color)] bg-[#333] rounded-[12px] px-[10px] md:px-[15px] py-[4px] md:py-[8px] text-[18px] md:text-[22px] not-italic font-[600] leading-[27px]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="border-[#404040] bg-[#1F1F1F] text-[var(--text-color)] text-[18px] not-italic font-[700] leading-[27px] rounded-[100px] py-[4px] md:py-[8px] px-[8px] md:px-[16px] hover:bg-[#000] transition-colors duration-300"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-start self-stretch">
                <div className="flex py-[20px] md:py-[50px] px-[20px] md:px-[80px] items-start text-center justify-center gap-[10px] self-stretch border-b-2 border-solid border-[#262626]">
                  <p className="text-[var(--foreground-primary)] flex-1 text-[20px] md:text-[26px] not-italic font-[700] leading-normal">
                    Xếp hạng & Đánh giá
                  </p>
                </div>

                <div className="flex flex-col md:flex-row py-[20px] md:py-[50px] px-[20px] md:px-[80px] items-start w-full gap-[20px] md:gap-[100px] self-stretch">
                  <div className="flex flex-col items-start gap-[10px]">
                    <p className="text-[var(--foreground-primary)] font-mono text-[40px] md:text-[50px] not-italic font-[500] leading-[75px]">
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
                        <div className="text-[var(--text-color)] lg:text-[18px] text-[14px] not-italic font-[400] leading-[27px]">
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
                        <div className="text-[var(--text-color)] lg:text-[18px] text-[14px] not-italic font-[400] leading-[27px]">
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
                        <div className="text-[var(--text-color)] lg:text-[18px] text-[14px] not-italic font-[400] leading-[27px]">
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
                        <div className="text-[var(--text-color)] lg:text-[18px] text-[14px] not-italic font-[400] leading-[27px]">
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
                        <div className="text-[var(--text-color)] lg:text-[18px] text-[14px] not-italic font-[400] leading-[27px]">
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
