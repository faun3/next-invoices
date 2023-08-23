"use client";

import { GiCrestedHelmet } from "react-icons/gi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const currentRoute = usePathname();
  return (
    <nav className="bg-gray-900 h-[6rem] sticky top-0 px-20 flex flex-row items-center justify-between">
      <div className="flex flex-row gap-2 items-center">
        <GiCrestedHelmet className="text-white h-[3rem] w-[3rem]" />
        <span className="text-white font-bold tracking-widest text-xl">
          <span className="text-blue-400">INV</span>
          ERATOR
        </span>
      </div>
      <ul className="text-white flex flex-row gap-4">
        <li>
          <Link
            href={"/"}
            className={`${currentRoute === "/" ? "underline font-bold" : ""}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/invoices"}
            className={`${
              currentRoute === "/invoices" ? "underline font-bold" : ""
            }`}>
            Invoices
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
