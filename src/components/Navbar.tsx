"use client";

import { GiCrestedHelmet } from "react-icons/gi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const currentRoute = usePathname();
  return (
    <nav className="sticky top-0 z-10 flex h-[6rem] flex-row items-center justify-between bg-gray-900 px-20">
      <div className="flex flex-row items-center gap-2">
        <GiCrestedHelmet className="h-[3rem] w-[3rem] text-white" />
        <span className="text-xl font-bold tracking-widest text-white">
          <span className="text-blue-400">INV</span>
          ERATOR
        </span>
      </div>
      <ul className="flex flex-row gap-4 text-white">
        <li>
          <Link
            href={"/"}
            className={`${currentRoute === "/" ? "font-bold underline" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/invoices"}
            className={`${
              currentRoute === "/invoices" ? "font-bold underline" : ""
            }`}
          >
            Invoices
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
