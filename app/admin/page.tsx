"use client";

import { Button, Divider } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Order {
  id: number;
  customerDetails: {
    name: string;
    phone: string;
    address: string;
    email: string;
    note: string;
    paymentMethod: string;
  };
  cartItems: {
    id: number;
    name: string;
    price: number;
    size: string;
    quantity: number;
    image: string;
  }[];
  totalPrice: number;
}

const Admin: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/loginpage");
    } else {
      const localOrders = JSON.parse(localStorage.getItem("orders") || "[]");
      setOrders(localOrders);
    }
  }, []);

  const handleLogout = () => {
    // Xóa trạng thái đăng nhập từ localStorage
    localStorage.removeItem("isLoggedIn");
    // Chuyển hướng về trang đăng nhập
    router.push("/loginpage");
  };

  useEffect(() => {
    const localOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(localOrders);
  }, []);

  const handleDeliver = (orderId: number) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    toast.success("Đã bàn giao đơn hàng thành công!");
  };

  // useEffect(() => {
  //   // Fetch orders from the API
  //   fetch("/api/orders")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setOrders(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching orders:", error);
  //     });
  // }, []);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);

  return (
    <div className=" text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Page</h1>
        <div className="grid gap-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className=" border-2 border-solid border-[orange] shadow-2xl rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[20px] flex items-center gap-[6px] font-[700]">
                    <h2 className="text-xl font-semibold"> Mã đơn hàng:</h2>
                    <p className="text-[var(--foreground-primary)]">
                      {order.id}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 flex items-center gap-[6px]">
                      <strong>Tổng giá đơn hàng:</strong>
                      <p className="text-[20px] font-[700] text-[var(--text-color)]">
                        {formatCurrency(order.totalPrice)}
                      </p>
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className=" mb-2 text-[20px] font-[700] text-[var(--foreground-secondary)]">
                    Thông tin khách hàng
                  </h3>
                  <div>
                    <p className="text-gray-400 flex items-center gap-[6px]">
                      <strong>Họ và Tên:</strong>
                      <p className="text-[20px] font-[700] text-[var(--text-color)]">
                        {order.customerDetails.name}
                      </p>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 flex items-center gap-[6px]">
                      <strong>SĐT:</strong>
                      <p className="text-[20px] font-[700] text-[var(--text-color)]">
                        {order.customerDetails.phone}
                      </p>
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 flex items-center gap-[6px]">
                      <strong>Địa chỉ:</strong>
                      <p className="text-[20px] font-[700] text-[var(--text-color)]">
                        {order.customerDetails.address}
                      </p>
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 flex items-center gap-[6px]">
                      <strong>Email:</strong>
                      <p className="text-[20px] font-[700] text-[var(--text-color)]">
                        {order.customerDetails.email}
                      </p>
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 flex items-center gap-[6px]">
                      <strong>Ghi chú:</strong>
                      <p className="text-[20px] font-[700] text-[var(--text-color)]">
                        {order.customerDetails.note}
                      </p>
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 flex items-center gap-[6px]">
                      <strong>Thanh toán bằng:</strong>
                      <p className="text-[20px] font-[700] text-[var(--text-color)]">
                        {order.customerDetails.paymentMethod}
                      </p>
                    </p>
                  </div>
                  <Divider className="pink-divider" />
                </div>
                <div>
                  <h3 className="mb-2 text-[20px] font-[700] text-[var(--foreground-secondary)]">
                    Sản phẩm đặt hàng
                  </h3>

                  <ul>
                    {order.cartItems.map((item) => (
                      <li key={item.id} className="mb-4">
                        <div>
                          <p className="text-gray-400 flex items-center gap-[6px] mb-2">
                            <strong>Tên:</strong>
                            <p className="text-[20px] font-[700] text-[var(--text-color)]">
                              {item.name}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="text-gray-400 flex items-center gap-[6px] mb-2">
                            <strong>Giá/ Sản phẩm:</strong>
                            <p className="text-[20px] font-[700] text-[var(--text-color)]">
                              {formatCurrency(item.price)}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="text-gray-400 flex items-center gap-[6px] mb-2">
                            <strong>Size:</strong>
                            <p className="text-[20px] font-[700] text-[var(--text-color)]">
                              {item.size}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="text-gray-400 flex items-center gap-[6px] mb-2">
                            <strong>Số lượng:</strong>
                            <p className="text-[20px] font-[700] text-[var(--text-color)]">
                              {item.quantity}
                            </p>
                          </p>
                        </div>

                        <div className="">
                          <Image
                            src={item.image}
                            alt="image"
                            width={100}
                            height={100}
                          />
                        </div>
                        <Divider className="pink-divider" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mx-auto flex justify-center w-full mb-[20px]">
                <button
                  className="mt-4 px-[22px] py-[18px] rounded-[12px] text-[20px] font-[700] leading-[27px]"
                  onClick={() => handleDeliver(order.id)}
                >
                  Đã Bàn Giao
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="flex items-start justify-center text-center mx-auto px-[18px] py-[20px] text-[20px] font-[700] text-[gold] rounded-[12px] mt-[20px]"
          onClick={handleLogout}
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default Admin;
