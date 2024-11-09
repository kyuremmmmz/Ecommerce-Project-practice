"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbars() {
  const pathname = usePathname();
  return (
    <nav className="grid grid-cols-6 items-center gap-10">
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
      <div className=" col-span-1 flex justify-end">
        <input className="
        col-span-4 justify-center space-x-10
        placeholder:italic
        placeholder:text-slate-400 block
        bg-white w-full border
        border-slate-300 rounded-3xl
        py-2 pl-9 pr-3 shadow-sm
        focus:outline-none focus:ring-0 focus:border-cyan-200
        transition: border-color 
        border-color: hover:border-cyan-300
        transition-shadow
        duration: 0.3s ease-in-out"
          placeholder="What are you looking for?"
          type="text"
          name="search" />
      </div>
    </nav>
  );
}
