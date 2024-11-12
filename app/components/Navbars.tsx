"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import Search from "./ui/Fields/Search";
import { useRouter } from 'next/navigation'
import { useState } from "react";


export default function Navbars() {
  const pathname = usePathname();
  const [sign, setSign] = useState(false);
  const router = useRouter()
  return (
    <div className=" flex justify-center items-center ml-24">
      <nav className="md:grid md:grid-cols-8 md:gap-10 md:items-center flex flex-col items-center py-4">
        <div className="md:col-span-2 ml-30">
          <h1 className="font-bold text-3xl text-right cursor-pointer">Exclusive</h1>
        </div>
        <div className="md:col-span-2 flex justify-center space-x-8">
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
            Delivery
          </Link>
        </div>
        <div className=" md:grid md:grid-cols-4 flex flex-col  justify-center items-center">
          <div className="col-span-1">
            <Search />
          </div>
          <div className="col-span-1 md:grid md:grid-cols-4 flex flex-col justify-center gap-10 ml-72">
            <FaHeart className="lg:flex md:ml-1 text-red-500 text-2xl cursor-pointer" onClick={() => router.push('/page/cart')} />
            <FaCartArrowDown className="lg:flex md:ml-1 text-red-500 text-2xl cursor-pointer" onClick={() => router.push('/page/tanginamo')} />
            {
              (sign === true ?
                (<button className=" md:ml-2  text-white bg-black opacity-45 hover:bg-black hover:opacity-100 hover:text-white transition-all duration-300 w-20 rounded cursor-pointe"
                  onClick={() => setSign(!sign)}>Sign Out</button>)
                :
                (<div className=" grid grid-cols-2 gap-16">
                  <button className=" md:ml-2  text-white bg-black opacity-45 hover:bg-black hover:opacity-100 hover:text-white transition-all duration-300 w-20 rounded cursor-pointe"
                    onClick={() => setSign(true)}>Sign In</button>
                  <button className=" md:ml-10  text-white bg-black opacity-45 hover:bg-black hover:opacity-100 hover:text-white transition-all duration-300 w-20 rounded cursor-pointe"
                    onClick={() => setSign(true)}>Sign Up</button>
                </div>
                )

              )
            }
          </div>
        </div>
      </nav>
    </div>
  );
}
