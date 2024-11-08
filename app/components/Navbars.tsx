"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbars() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-5">
      <Link
        href="/"
        className={`${pathname === "/" ? "text-black" : "text-gray-500"
          } pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300`}
      >
        Home
      </Link>
      <Link
        href="/page/product/what"
        className={`${pathname === "/page/product/what" ? "text-black" : "text-gray-500"
          } pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300`}
      >
        Contact
      </Link>
      <Link
        href="/page/product/puta"
        className={`${pathname === "/page/product/puta" ? "text-black" : "text-gray-500"
          } pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300`}
      >
        About
      </Link>
      <Link
        href="/page/about"
        className={`${pathname === "/page/about" ? "text-black" : "text-gray-500"
          } pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300`}
      >
        Sign Up
      </Link>
    </nav>
  );
}
