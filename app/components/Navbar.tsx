"use client";

import * as React from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { RiArrowDropDownLine } from "react-icons/ri";

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
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  const pathname = usePathname();

  const isHome = pathname === "/";
  const isNewArrivals = pathname === "/products";
  const isAllCollections = pathname === "/all-collections";

  return (
    <nav className="container sticky top-0 z-50">
      <div className="flex flex-wrap py-4 justify-between items-center border-b border-solid border-[#262626]">
        <Button
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        <ul
          className={`flex-col lg:flex-row flex items-center gap-2 lg:gap-4 ${
            isMenuOpen
              ? "absolute left-0 top-full w-full bg-[#1A1A1A] py-4 px-0 z-10"
              : "hidden"
          } lg:flex w-full lg:w-auto`}
        >
          <Link href="/">
            <li
              className={`flex cursor-pointer py-4 px-6 gap-2 rounded-lg ${
                isHome
                  ? "border-b-2 border-solid border-[var(--foreground-secondary)]"
                  : "text-[var(--foreground-primary)]"
              }`}
              onClick={handleNavItemClick}
            >
              <p className="text-[var(--foreground-primary)] hover:text-[var(--foreground-secondary)] hover:transition-all hover:duration-500 hover:scale-95 text-center text-base lg:text-lg font-[700] leading-6">
                HOME
              </p>
            </li>
          </Link>
          <Link href="/products">
            <li
              className={`flex py-4 px-6 gap-2 rounded-lg ${
                isNewArrivals
                  ? "border-b-2 border-solid border-[var(--foreground-secondary)]"
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
                  ? "border-b-2 border-solid border-[var(--foreground-secondary)]"
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
                  className="absolute  mt-2 top-[100px] px-[50px] bg-[#333333]  shadow-lg rounded-lg py-2"
                >
                  <Link href="/tshirts">
                    <li
                      className="px-4 py-2 hover:bg-[#333] font-[600] text-[var(--btn-text2)] hover:text-[var(--btn-text)] hover:transition-all hover:duration-500"
                      onClick={handleNavItemClick}
                    >
                      T-Shirts
                    </li>
                  </Link>
                  <Link href="/shirts">
                    <li
                      className="px-4 py-2 hover:bg-[#333] font-[600] text-[var(--btn-text2)] hover:text-[var(--btn-text)] hover:transition-all hover:duration-500"
                      onClick={handleNavItemClick}
                    >
                      Shirts
                    </li>
                  </Link>
                  <Link href="/pants">
                    <li
                      className="px-4 py-2 hover:bg-[#333] font-[600] text-[var(--btn-text2)] hover:text-[var(--btn-text)] hover:transition-all hover:duration-500"
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
        <div className="flex items-center gap-4">
          <div className="flex p-4 items-start gap-2 rounded-lg cursor-pointer hover:scale-110 hover:transition-all hover:duration-500 ">
            <Image className="w-6 h-6" src={Image1} alt="Icon" />
          </div>
          <div className="hidden lg:flex items-center gap-2 rounded-lg ">
            <button className=" items-center hover:duration-500 hover:transition-all hover:scale-110 text-base px-[20px] py-[14px] rounded-[6px] lg:text-lg font-medium leading-6">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
