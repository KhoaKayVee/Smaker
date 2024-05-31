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
              className="shadow-xl shadow-[var(--foreground-primary)] rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[20px] flex items-center gap-[6px] font-[700]">
                    <h2 className="text-xl font-semibold"> Mã đơn hàng:</h2>
                    <p className="text-[var(--foreground-primary)]">
                      {order.id}
                    </p>
                  </div>
                </div>

                <div className="mb-4 flex flex-col gap-[4px]">
                  <h3 className=" mb-2 text-[20px] font-[700] text-[var(--foreground-secondary)]">
                    Thông tin khách hàng
                  </h3>
                  <div>
                    <p className="text-gray-400 flex items-center gap-[6px]">
                      <strong>Họ và Tên:</strong>
                      <p className="lg:text-[20px] text-[14px] font-[700] text-[var(--text-color)]">
                        {order.customerDetails.name}
                      </p>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 flex items-center gap-[6px] truncate">
                      <strong>SĐT:</strong>
                      <p className="lg:text-[20px] text-[14px] font-[700] text-[var(--text-color)]">
                        {order.customerDetails.phone}
                      </p>
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 flex items-center gap-[6px] truncate">
                      <strong className="lg:text-[20px] text-[16px] whitespace-nowrap">
                        Địa chỉ:
                      </strong>
                      <p className="lg:text-[20px] whitespace-nowrap text-[14px] font-[700] text-[var(--text-color)]">
                        {order.customerDetails.address}
                      </p>
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 flex items-center gap-[6px] truncate">
                      <strong className="lg:text-[20px] text-[14px]">
                        Email:
                      </strong>
                      <p className="lg:text-[20px] text-[14px] font-[700] text-[var(--text-color)]">
                        {order.customerDetails.email}
                      </p>
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 flex items-center gap-[6px] truncate">
                      <strong className="lg:text-[20px] text-[14px]">
                        Ghi chú:
                      </strong>
                      <p className="lg:text-[20px] text-[14px] font-[700] text-[var(--text-color)]">
                        {order.customerDetails.note}
                      </p>
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 flex items-center gap-[6px]">
                      <strong className="lg:text-[20px] text-[14px]">
                        Thanh toán bằng:
                      </strong>
                      <p className="lg:text-[20px] text-[14px] font-[700] text-[var(--text-color)]">
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
                          <div className="mb-2">
                            <Image
                              src={item.image}
                              alt="image"
                              width={100}
                              height={100}
                            />
                          </div>
                          <p className="text-gray-400 flex items-center gap-[6px] mb-2 truncate">
                            <strong className="lg:text-[20px] text-[14px]">
                              Tên:
                            </strong>
                            <p className="lg:text-[20px] text-[14px] font-[700] text-[var(--text-color)]">
                              {item.name}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="text-gray-400 flex items-center gap-[6px] mb-2">
                            <strong className="lg:text-[20px] text-[14px]">
                              Size:
                            </strong>
                            <p className="lg:text-[20px] text-[14px] font-[700] text-[var(--text-color)]">
                              {item.size}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="text-gray-400 flex items-center gap-[6px] mb-2">
                            <strong className="lg:text-[20px] text-[14px]">
                              Giá/ Sản phẩm:
                            </strong>
                            <p className="lg:text-[20px] text-[14px] font-[700] text-[var(--text-color)]">
                              {formatCurrency(item.price)}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="text-gray-400 flex items-center gap-[6px] mb-2">
                            <strong className="lg:text-[20px] text-[14px]">
                              Số lượng:
                            </strong>
                            <p className="lg:text-[20px] text-[14px] font-[700] text-[var(--text-color)]">
                              {item.quantity}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="text-gray-400 flex items-center gap-[6px] mb-2">
                            <strong className="lg:text-[20px] text-[14px]">
                              Tổng giá sản phẩm
                            </strong>
                            <p className="lg:text-[20px] text-[14px] font-[700] text-[var(--text-color)]">
                              {formatCurrency(item.quantity * item.price)}
                            </p>
                          </p>
                        </div>
                        <Divider className="pink-divider" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-[22px]">
                <p className="text-gray-400 flex items-center gap-[6px] mb-2">
                  <strong className="lg:text-[20px] text-[14px]">
                    Phí Ship:
                  </strong>
                  <p className="lg:text-[20px] text-[14px] font-[700] text-[var(--text-color)]">
                    {formatCurrency(50000)}
                  </p>
                </p>
              </div>
              <div className="px-[22px]">
                <p className="text-gray-400 flex items-center gap-[6px]">
                  <strong className="lg:text-[20px] text-[14px]">
                    Tổng giá đơn hàng:
                  </strong>
                  <p className="lg:text-[20px] text-[14px] font-[700] text-[var(--text-color)]">
                    {formatCurrency(order.totalPrice)}
                  </p>
                </p>
              </div>
              <div className="mx-auto flex justify-center w-full mb-[20px]">
                <button
                  className="mt-4 lg:px-[22px] lg:py-[18px] px-[18px] py-[12px] rounded-[12px] lg:text-[20px] text-[16px] font-[700] leading-[27px]"
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
