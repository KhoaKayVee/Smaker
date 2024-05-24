"use client";

import * as React from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";

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
import Logo from "../../public/images/logo-smaker.png";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="container sticky top-0 z-50">
      <div className="flex flex-wrap py-4 justify-between items-center border-b border-solid border-[#262626]">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5 text-white" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <div className="flex items-center">
          <Link href="/">
            <Image
              className={`text-[#FFF] object-contain lg:flex hidden filter invert ${
                isMenuOpen ? "hidden" : "" // Ẩn logo khi menu được mở
              }`}
              src={Logo}
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <ul
          className={`flex-col lg:flex-row flex items-center gap-2 lg:gap-4 ${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex w-full lg:w-auto`}
        >
          <Link href="/">
            <li className="flex cursor-pointer py-4 px-6 gap-2 rounded-lg hover:bg-[#1A1A1A]">
              <p className="text-[#FFF] text-center text-base lg:text-lg font-normal leading-6">
                Home
              </p>
            </li>
          </Link>
          <Link href="/products">
            <li className="flex py-4 px-6 gap-2 rounded-lg hover:bg-[#1A1A1A]">
              <p className="text-[#FFF] text-center text-base lg:text-lg font-normal leading-6">
                NEW ARRIVALS
              </p>
            </li>
          </Link>
          <Link href="/all-collections">
            <li className="flex py-4 px-6 gap-2 rounded-lg hover:bg-[#1A1A1A]">
              <p className="text-[#FFF] text-center text-base lg:text-lg font-normal leading-6">
                ALL COLLECTIONS
              </p>
            </li>
          </Link>
        </ul>
        <div className="flex items-center gap-4">
          <div className="flex p-4 items-start gap-2 rounded-lg bg-[#1A1A1A]">
            <Image className="w-6 h-6" src={Image1} alt="Icon" />
          </div>
          <div className="hidden lg:flex py-4 px-6 items-center gap-2 rounded-lg bg-[#AE9B84]">
            <button className="text-[#0F0F0F] items-center text-base lg:text-lg font-medium leading-6">
              Contact
            </button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
