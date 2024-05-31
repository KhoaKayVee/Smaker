"use client";
import { Button, Divider, Input, Modal, Select } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

interface CartItem {
  id: number;
  name: string;
  price: any;
  size: string;
  quantity: number;
  image: any;
}
const { Option } = Select;

const CartPage = () => {
  const { cartItems, setCartItems, handleQuantityChange } = useCart(); // Use context state instead of local state
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    note: "",
    paymentMethod: "Chọn Phương Thức Thanh Toán",
  });
  const [shippingFee, setShippingFee] = useState(50000); // Example shipping fee

  useEffect(() => {
    // Fetch cart items from the API or local storage
    fetch("/api/cart")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
        localStorage.setItem("cart", JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
        const localCart = localStorage.getItem("cart");
        if (localCart) {
          setCartItems(JSON.parse(localCart));
        }
      });
  }, [setCartItems]);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);

  const handleOrder = async () => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerDetails,
          cartItems,
        }),
      });

      if (response.ok) {
        const orderData = {
          id: Date.now(), // Assuming Date.now() is used as a unique order ID
          customerDetails,
          cartItems,
          totalPrice:
            cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            ) + shippingFee,
        };
        setIsModalVisible(false);
        toast.success("Bạn đã đã đặt hàng thành công!!!");
        toast.success(
          "Nếu là ADMIN hoặc TESTING, Vui lòng đăng nhập ở icon thanh NAVBAR"
        );

        // Save the order to local storage
        const existingOrders = JSON.parse(
          localStorage.getItem("orders") || "[]"
        );
        localStorage.setItem(
          "orders",
          JSON.stringify([...existingOrders, orderData])
        );

        setCartItems([]);
        localStorage.removeItem("cart"); // Xóa giỏ hàng sau khi đặt hàng thành công
      } else {
        console.error("Failed to create order");
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handleOrderAndClear = async () => {
    console.log("Handle order and clear function is called."); // Kiểm tra hàm được gọi hay không
    await handleOrder(); // Gọi hàm handleOrder để gửi đơn hàng
    console.log("Cart items before clearing:", cartItems); // In ra giỏ hàng trước khi xóa
    setCartItems([]); // Xóa sản phẩm đã đặt hàng khỏi giỏ hàng
    console.log("Cart items after clearing:", cartItems); // In ra giỏ hàng sau khi xóa
    localStorage.removeItem("cart"); // Xóa dữ liệu giỏ hàng trong localStorage
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setCustomerDetails({ ...customerDetails, paymentMethod: value });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl text-center mb-8 font-bold">GIỎ HÀNG CỦA BẠN</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl">
          KHÔNG CÓ SẢN PHẨM NÀO TRONG GIỎ HÀNG
        </p>
      ) : (
        <div>
          <div className="lg:grid hidden text-[var(--foreground-secondary)] grid-cols-12 gap-4 font-semibold text-lg mb-4">
            <div className="col-span-12 sm:col-span-6 flex items-center">
              <p className="w-1/2">Hình sản phẩm</p>
              <p className="w-1/4 text-center">Tên Sản Phẩm</p>
              <p className="w-1/4 text-center">Size</p>
            </div>
            <div className="col-span-12 sm:col-span-6 grid grid-cols-3 text-center">
              <p>Giá / Item</p>
              <p>Số Lượng</p>
              <p>Tổng giá / số lượng</p>
            </div>
          </div>
          <Divider className="mb-4 pink-divider" />
          {cartItems.map((item) => (
            <div key={item.id} className="mb-6">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 sm:col-span-6 flex items-center">
                  <div className="w-1/2 flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={140}
                      height={100}
                    />
                  </div>
                  <p className="w-1/4 text-center text-[var(--text-color)] font-[600]">
                    {item.name}
                  </p>
                  <p className="w-1/4 font-[700] text-[16px] sm:text-[20px] text-center text-[var(--text-color)]">
                    {item.size}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-6 grid grid-cols-3 items-center text-center">
                  <p className="text-[var(--text-color)] font-[500] text-[14px] sm:text-[16px]">
                    {formatCurrency(item.price)}
                  </p>
                  <div className="flex gap-4 items-center justify-center">
                    <button
                      className="border px-2"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <p className="text-[var(--text-color)] text-[20px] font-[700]">
                      {item.quantity}
                    </p>
                    <button
                      className="border px-2"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[var(--text-color)] font-[700] text-[14px] sm:text-[20px]">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              </div>
              <Divider className="my-4 pink-divider" />
            </div>
          ))}
          <div className="text-right font-bold text-2xl text-[var(--foreground-secondary)]">
            Tổng giá:{" "}
            {formatCurrency(
              cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )
            )}
          </div>
          <div className="text-right mt-4">
            <button
              className="rounded-[8px] px-[12px] py-[8px] text-[16px] sm:text-[18px] font-[700] leading-[27px]"
              onClick={() => setIsModalVisible(true)}
            >
              Thanh Toán
            </button>
            <Modal
              title="Chi tiết thanh toán"
              visible={isModalVisible}
              onCancel={() => setIsModalVisible(false)}
              footer={[
                <Button key="back" onClick={() => setIsModalVisible(false)}>
                  Cancel
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  onClick={handleOrderAndClear}
                >
                  Đặt hàng
                </Button>,
              ]}
              className="custom-modal !shadow-2xl !mb-[20px]"
            >
              <div className="flex flex-col gap-4">
                <Input
                  name="name"
                  value={customerDetails.name}
                  onChange={handleInputChange}
                  placeholder="Họ tên khách hàng"
                />
                <Input
                  name="phone"
                  value={customerDetails.phone}
                  onChange={handleInputChange}
                  placeholder="Số điện thoại khách hàng"
                />
                <Input
                  name="address"
                  value={customerDetails.address}
                  onChange={handleInputChange}
                  placeholder="Địa chỉ giao hàng"
                />
                <Input
                  name="email"
                  value={customerDetails.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
                <Input.TextArea
                  name="note"
                  value={customerDetails.note}
                  onChange={handleInputChange}
                  placeholder="Nhập ghi chú"
                />
                <Select
                  value={customerDetails.paymentMethod}
                  onChange={handleSelectChange}
                  className="custom-select"
                >
                  <Select.Option value="COD">
                    Thanh toán khi nhận hàng
                  </Select.Option>
                  <Select.Option value="creditCard">Thẻ tín dụng</Select.Option>
                  <Select.Option value="bankTransfer">
                    Chuyển khoản ngân hàng
                  </Select.Option>
                </Select>
                <Divider />
                <div className="text-right">
                  <p className="font-bold">Phí ship: 50,000 VND</p>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
