"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
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
  // const { setTheme } = useTheme();

  return (
    <nav className="container sticky top-0 z-50">
      <div className="flex py-[30px] justify-between items-center border-b border-solid border-[#262626]">
        <Link href="/">
          <Image
            className="text-[#FFF] object-contain filter invert"
            src={Logo}
            alt="ok"
            width={50}
            height={50}
          />
        </Link>
        <ul className="flex items-center gap-[2px]">
          <Link href="/">
            <li className="flex cursor-pointer py-[18px] px-[30px] gap-[10px] rounded-[12px] hover:bg-[#1A1A1A]">
              <p className="text-[#FFF] text-center text-[18px] not-italic font-[400] leading-[27px]">
                Home
              </p>
            </li>
          </Link>
          <Link href="/products">
            <li className="flex py-[18px] px-[30px] gap-[10px] rounded-[12px] hover:bg-[#1A1A1A]">
              <p className="text-[#FFF] text-center text-[18px] not-italic font-[400] leading-[27px]">
                NEW ARRIVALS
              </p>
            </li>
          </Link>
          <Link href="/all-collections">
            <li className="flex py-[18px] px-[30px] gap-[10px] rounded-[12px] hover:bg-[#1A1A1A]">
              <p className="text-[#FFF] text-center text-[18px] not-italic font-[400] leading-[27px]">
                ALL COLLECTIONS
              </p>
            </li>
          </Link>
        </ul>
        <div className="flex items-center gap-[14px]">
          <div className="flex p-[18px] items-start gap-[10px] rounded-[12px] bg-[#1A1A1A]">
            <Image className="w-[24px] h-[24px]" src={Image1} alt="" />
          </div>
          <div className="flex py-[18px] px-[30px] items-center gap-[10px] rounded-[12px] bg-[#AE9B84]">
            <button className="text-[#0F0F0F] items-center text-[18px] not-italic font-[500] leading-[27px]">
              Contact
            </button>
          </div>
        </div>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
        </DropdownMenu> */}
      </div>
    </nav>
  );
};

export default Navbar;
