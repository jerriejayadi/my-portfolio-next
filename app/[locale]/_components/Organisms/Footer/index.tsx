"use client";

import Link from "next/link";

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

const Footer = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center md:justify-between md:flex-row py-8 px-2 bg-[#FFFFFF] dark:bg-[#242424] gap-6 md:gap-0 md:px-16 border-t-2 border-black border-opacity-5 dark:border-white dark:border-opacity-5`}
    >
      <div
        className={`flex items-center justify-center space-x-6 md:space-y-0 `}
      >
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
      <div className={`flex text-sm md:text-base`}>
        © 2024 Jerrie Jayadi. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
