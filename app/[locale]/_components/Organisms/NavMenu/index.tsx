import { CloseCircle } from "iconsax-react";
import { NAV_ITEMS } from "../Navbar";
import Link from "next/link";
import { useEffect } from "react";

interface NavMenuProps {
  open: boolean;
  onClose: () => void;
}
const NavMenu = ({ open, onClose }: NavMenuProps) => {
  return (
    <div
      className={`h-screen fixed inset-0  bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 transition-all duration-200 ${
        open ? "opacity-100 z-50 " : "opacity-0 -z-50 "
      }`}
      onClick={(e) => {
        onClose();
      }}
    >
      <div
        className={`fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 "
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={`flex items-center justify-between mb-6`}>
          <div>Navigation</div>
          <div>
            <CloseCircle onClick={onClose} />
          </div>
        </div>
        <div
          className={`divide-y divide-gray-500 divide-opacity-50 flex flex-col gap-4`}
        >
          {NAV_ITEMS.map((data: any, index: number) => (
            <Link
              href={data.url}
              key={index}
              className={`w-full`}
              onClick={onClose}
            >
              {data.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
