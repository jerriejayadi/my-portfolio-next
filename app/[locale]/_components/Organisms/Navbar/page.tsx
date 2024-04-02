"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import {
  ArrowDown,
  ArrowDown2,
  CloseSquare,
  HambergerMenu,
  Moon,
  Sun1,
} from "iconsax-react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  label: string;
  url: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Projects",
    url: "/projects",
  },
];
const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full max-w-7xl mx-auto px-6 md:px-20 py-5  fixed top-0 z-50">
      <div className="justify-between md:items-center flex">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold dark:text-white">
              <Image
                className={`rounded-full`}
                src="/profile.jpg"
                alt=""
                width={50}
                height={50}
              />
            </h2>
          </div>
          {/* <div className="md:hidden">
            <button
              onClick={() => {
                setNavbar(!navbar);
              }}
            >
              {navbar ? "X" : <HambergerMenu />}
            </button>
          </div> */}
        </div>
        <div
          className={`rounded-[20px] shadow-lg border border-opacity-10 dark:border-white dark:border-opacity-10 px-6 py-2 dark:bg-[#444444] bg-[#FFFFFF] hidden md:flex`}
        >
          <div
            className={`flex-1 justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            } transition-all duration-150`}
          >
            <div className="md:flex md:space-x-6 space-y-4 md:space-y-0">
              {NAV_ITEMS.map((item: any, index: number) => (
                <Link
                  key={index}
                  href={item.url}
                  className={
                    "block lg:inline-block text-neutral-900 hover:text-primaryOrange dark:text-neutral-100"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={`flex items-center gap-5`}>
          <div
            className={`rounded-[20px] dark:bg-[#242424] px-4 py-2 flex gap-3 md:hidden`}
          >
            Menu <ArrowDown2 className={`w-4 `} />
          </div>
          <div className={`rounded-[50%] border-1 border-black`}>
            {currentTheme === "dark" ? (
              <button
                onClick={() => {
                  setTheme("light");
                }}
                className={`flex rounded-3xl px-2 py-1  hover:drop-shadow-sm hover:shadow-white hover:border hover:border-white hover:border-opacity-5  bg-[#242424]`}
              >
                <Sun1 />{" "}
              </button>
            ) : (
              <button
                onClick={() => {
                  setTheme("dark");
                }}
                className={`flex rounded-3xl px-2 py-1 shadow-lg hover:shadow-xl transition-all duration-150 hover:border hover:border-black hover:border-opacity-5 `}
              >
                <Moon />{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
