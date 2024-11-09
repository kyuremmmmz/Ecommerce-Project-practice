"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHeart, FaSearch } from "react-icons/fa";
import Search from "./ui/Fields/Search";


export default function Navbars() {
  const pathname = usePathname();
  return (
    <nav className="grid grid-cols-7 items-center gap-10">
      <div className="col-span-1 ml-30">
        <h1 className="font-bold text-3xl text-right">Exclusive</h1>
      </div>
      <div className="col-span-4 flex justify-center space-x-8">
        <Link
          href="/"
          className={`${pathname === "/" ? " border-b-2 border-black" : "text-gray-500"
            } relative text-black cursor-pointer transition-all duration-300 ease-in-out 
        before:absolute before:bottom-0 before:left-0 before:h-[2px]
        before:w-0 before:bg-black before:transition-all before:duration-300
        hover:before:w-full`}
        >
          Home
        </Link>
        <Link
          href="/page/product/what"
          className={`${pathname === "/page/product/what" ? " border-b-2 border-black" : "text-gray-500"
            } relative text-black cursor-pointer transition-all duration-300 ease-in-out 
        before:absolute before:bottom-0 before:left-0 before:h-[2px]
        before:w-0 before:bg-black before:transition-all before:duration-300
        hover:before:w-full`}
        >
          Contact
        </Link>
        <Link
          href="/page/product/puta"
          className={`${pathname === "/page/product/puta" ? " border-b-2 border-black" : "text-gray-500"
            } relative text-black cursor-pointer transition-all duration-300 ease-in-out 
        before:absolute before:bottom-0 before:left-0 before:h-[2px]
        before:w-0 before:bg-black before:transition-all before:duration-300
        hover:before:w-full`}
        >
          About
        </Link>
        <Link
          href="/page/product/puta"
          className={`${pathname === "/page/product/puta" ? " border-b-2 border-black" : "text-gray-500"
            } relative text-black cursor-pointer transition-all duration-300 ease-in-out 
        before:absolute before:bottom-0 before:left-0 before:h-[2px]
        before:w-0 before:bg-black before:transition-all before:duration-300
        hover:before:w-full`}
        >
          Products
        </Link>
        <Link
          href="/page/about"
          className={`${pathname === "/page/about" ? " border-b-2 border-black" : "text-gray-500"
            } relative text-black cursor-pointer transition-all duration-300 ease-in-out
        before:absolute before:bottom-0 before:left-0 before:h-[2px]
        before:w-0 before:bg-black before:transition-all before:duration-300
        hover:before:w-full`}
        >
          Sign Up
        </Link>
      </div>
      <div className=" grid grid-cols-7 items-center gap-10">
        <div className=" col-span-2">
          <Search />
        </div>

      </div>
    </nav>
  );
}
