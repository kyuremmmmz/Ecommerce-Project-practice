"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbars() {
    const pathname = usePathname();
  return (
      <nav>
          <Link className={pathname === '/' ? " font-bold mr-5" : " text-cyan-400 mr-5"} href={'/'}>Home</Link>
          <Link className={pathname === '/page/product/what' ? " font-bold mr-5" : " text-cyan-400 mr-5"} href={'/page/product/what'}>Product</Link>
          <Link className={pathname === '/page/product/puta' ? " font-bold mr-5" : " text-cyan-400 mr-5 hover:font-bold hover:text-white transition-all"} href={'/page/product/puta'}>Puta</Link>
          <Link className={pathname === '/page/about' ? " font-bold mr-5" : " text-cyan-400 mr-5"} href={'/page/about'}>About</Link>
     </nav>
  )
}
