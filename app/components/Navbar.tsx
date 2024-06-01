"use client";

import * as React from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image1 from "../../public/Icon.png";
import Image2 from "../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/boinshop/logoBoinShop.png";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useCart } from "../context/CartContext";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false); // Thêm state mới để kiểm soát việc mở/closed sidebar
  const [sidebarVisible, setSidebarVisible] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null); // Specify HTMLInputElement type

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
    setSearchQuery("");
    if (inputRef.current) {
      // Add this null check
      inputRef.current.focus();
    }
  };

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  const handleToggleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setSidebarVisible(true); // Đánh dấu rằng sidebar đã được mở
  };

  const handleMiniToggle = () => {
    setSidebarVisible(false); // Đánh dấu rằng sidebar đã được đóng
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const pathname = usePathname();

  const isHome = pathname === "/";
  const isNewArrivals = pathname === "/products";
  const isAllCollections = pathname === "/all-collections";

  return (
    <nav className="container backdrop-blur-[2px] sticky top-0 z-50">
      <div className="flex flex-wrap py-4 justify-between items-center border-b border-solid border-[#262626]">
        <Button
          size="icon"
          onClick={handleToggleClick} // Thêm sự kiện onClick để mở sidebar
          className="lg:hidden"
        >
          <Menu className="h-5 w-5 text-[var(--foreground-primary)]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <div className="flex items-center hover:scale-125 hover:transition-all hover:duration-700">
          <Link href="/">
            <Image
              className={`text-[red] object-contain lg:flex hidden ${
                isMenuOpen ? "hidden" : ""
              }`}
              src={Logo}
              alt="Logo"
              width={130}
              height={130}
              style={{ filter: "invert(1)" }}
            />
          </Link>
        </div>
        {/* Thanh sidebar */}
        {sidebarVisible && (
          <div className={`lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}>
            <motion.div
              initial={{ x: "-100%" }} // Hiệu ứng ban đầu: sidebar nằm ngoài khung nhìn bên trái
              animate={{ x: 0 }} // Hiệu ứng khi hiển thị: sidebar dịch chuyển từ bên ngoài vào trong
              transition={{ type: "spring", stiffness: 150, damping: 50 }} // Cài đặt transition để hiệu ứng mượt mà hơn
              className="fixed px-[12px] top-0 left-0 w-56 h-full bg-black bg-opacity-25 z-50"
            >
              <div className="flex justify-center items-center h-20">
                {/* Nút đóng sidebar */}
                <button onClick={() => setIsSidebarOpen(false)}>
                  <IoMdClose className="h-6 w-6 text-white bg-transparent" />
                </button>
              </div>
              <ul className="flex flex-col items-start space-y-2 p-4">
                <Link onClick={handleMiniToggle} href="/">
                  <li className="cursor-pointer text-white hover:text-gray-300">
                    Home
                  </li>
                </Link>
                <Link onClick={handleMiniToggle} href="/products">
                  <li className="cursor-pointer text-white hover:text-gray-300">
                    New Arrivals
                  </li>
                </Link>
                <li
                  className={`flex items-center gap-2 rounded-lg ${
                    isAllCollections
                      ? "border-b-2 border-solid border-[var(--foreground-secondary)]"
                      : "text-[var(--foreground-primary)]"
                  }`}
                >
                  <p
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="cursor-pointer relative flex gap-[2px] items-center text-white hover:text-gray-300"
                  >
                    All
                    <RiArrowDropDownLine size={20} fill="white" />
                  </p>
                  {isDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-[180px] mt-2 px-[30px] bg-[#333333] bg-opacity-50  shadow-lg rounded-lg py-2"
                    >
                      <Link href="/all-collections">
                        <li
                          className="px-4 py-2 hover:bg-[#333] font-[600] text-[var(--btn-text2)] hover:text-[var(--btn-text)] hover:transition-all hover:duration-500"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Collections
                        </li>
                      </Link>

                      <Link href="/tshirts">
                        <li
                          className="px-4 py-2 hover:bg-[#333] font-[600] text-[var(--btn-text2)] hover:text-[var(--btn-text)] hover:transition-all hover:duration-500"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          T-Shirts
                        </li>
                      </Link>
                      <Link href="/shirts">
                        <li
                          className="px-4 py-2 hover:bg-[#333] font-[600] text-[var(--btn-text2)] hover:text-[var(--btn-text)] hover:transition-all hover:duration-500"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Shirts
                        </li>
                      </Link>
                      <Link href="/pants">
                        <li
                          className="px-4 py-2 hover:bg-[#333] font-[600] text-[var(--btn-text2)] hover:text-[var(--btn-text)] hover:transition-all hover:duration-500"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Pants
                        </li>
                      </Link>
                    </motion.ul>
                  )}
                </li>
              </ul>
            </motion.div>
            {/* Overlay để tắt sidebar khi click ngoài */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.5 }}
              className={`fixed top-0 left-0 w-screen h-screen bg-black z-40 ${
                isSidebarOpen ? "block" : "hidden"
              }`}
              onClick={() => setIsSidebarOpen(false)}
            ></motion.div>
          </div>
        )}

        <ul
          className={`flex-col lg:flex-row flex items-center w-full ${
            isMenuOpen
              ? "absolute left-0 top-full w-full bg-[#1A1A1A] py-4 px-0 z-10"
              : "hidden"
          } lg:flex w-full lg:w-auto`}
        >
          <Link href="/">
            <li
              className={`flex cursor-pointer py-4 px-6 gap-2 rounded-lg ${
                isHome
                  ? "border-b-2 border-solid border-[var(--foreground-primary)]"
                  : "text-[var(--foreground-primary)]"
              }`}
              onClick={handleNavItemClick}
            >
              <p className="hover:text-[var(--foreground-secondary)] hover:transition-all hover:duration-500 hover:scale-95 text-center text-base lg:text-lg font-[700] leading-6">
                HOME
              </p>
            </li>
          </Link>
          <Link href="/products">
            <li
              className={`flex py-4 px-6 gap-2 rounded-lg ${
                isNewArrivals
                  ? "border-b-2 border-solid border-[var(--foreground-primary)]"
                  : "text-[var(--foreground-primary)]"
              }`}
              onClick={handleNavItemClick}
            >
              <p className="text-[var(--foreground-primary)] hover:text-[var(--foreground-secondary)] hover:transition-all hover:duration-500 hover:scale-95 text-center text-base lg:text-lg font-[700] leading-6">
                NEW ARRIVALS
              </p>
            </li>
          </Link>

          <Link href="/all-collections">
            <li
              className={`flex py-4 px-6 gap-2 rounded-lg ${
                isAllCollections
                  ? "border-b-2 border-solid border-[var(--foreground-primary)]"
                  : "text-[var(--foreground-primary)]"
              }`}
              onClick={handleNavItemClick}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <p className="text-[var(--foreground-primary)] flex items-center relative hover:text-[var(--foreground-secondary)] hover:transition-all hover:duration-500 hover:scale-95 text-center text-base lg:text-lg font-[700] leading-6">
                ALL COLLECTIONS
                <RiArrowDropDownLine size={26} fill="white" />
              </p>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute  mt-2 top-[100px] px-[50px] bg-[#333333] bg-opacity-50  shadow-lg rounded-lg py-2"
                >
                  <Link href="/all-collections">
                    <li
                      className="px-4 py-2 hover:bg-[#333] font-[600] text-[white] hover:text-[var(--btn-text)] hover:transition-all hover:duration-500"
                      onClick={handleNavItemClick}
                    >
                      Collections
                    </li>
                  </Link>

                  <Link href="/tshirts">
                    <li
                      className="px-4 py-2 hover:bg-[#333] font-[600] text-[white] hover:text-[var(--btn-text)] hover:transition-all hover:duration-500"
                      onClick={handleNavItemClick}
                    >
                      T-Shirts
                    </li>
                  </Link>
                  <Link href="/shirts">
                    <li
                      className="px-4 py-2 hover:bg-[#333] font-[600] text-[white] hover:text-[var(--btn-text)] hover:transition-all hover:duration-500"
                      onClick={handleNavItemClick}
                    >
                      Shirts
                    </li>
                  </Link>
                  <Link href="/pants">
                    <li
                      className="px-4 py-2 hover:bg-[#333] font-[600] text-[white] hover:text-[var(--btn-text)] hover:transition-all hover:duration-500"
                      onClick={handleNavItemClick}
                    >
                      Pants
                    </li>
                  </Link>
                </motion.ul>
              )}
            </li>
          </Link>
        </ul>

        <div className="flex items-center gap-2  ">
          <form
            onSubmit={handleSearch}
            className="search-form flex items-center"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm sản phẩm..."
              className="shadow-xl shadow-[black] bg-[var(--btn-primary)] rounded-[10px] text-[#fff] flex-grow mr-2 p-2 border border-gray-300 outline-none border-none focus:outline-none focus:border-blue-500 sm:w-full sm:mr-0 sm:mt-2"
              ref={inputRef}
            />
          </form>
          <Link href="/cart">
            <div className="flex p-4 items-start gap-2 rounded-lg cursor-pointer ">
              <FaShoppingCart className="w-6 h-6 relative shadow-xl shadow-[black] " />

              {totalQuantity > 0 && (
                <div
                  style={{ backdropFilter: "blur(50px)" }}
                  className="absolute right-[100px] top-[56px] bg-opacity-50 rounded-full backdrop-filter bg-red-500 text-white px-[7px] text-[15px] font-[600] flex items-center justify-center text-center"
                >
                  {totalQuantity}
                </div>
              )}
            </div>
          </Link>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer hover:opacity-50 hover:duration-200 transition-all"
              onClick={toggleDropdown}
            >
              <RxAvatar
                size={26}
                className="!text-[var(--foreground-primary)] shadow-xl shadow-[black]"
              />
              <RiArrowDropDownLine className="h-6 w-6 !text-[var(--foreground-primary)] " />
            </div>
            {/* Dropdown */}
            {isOpen && (
              <Link href="/loginpage">
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline whitespace-nowrap absolute rounded-[12px] top-[36px] -left-8 px-4 py-2"
                >
                  Sign-In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
