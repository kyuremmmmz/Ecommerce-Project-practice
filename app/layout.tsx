import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbars from "./components/Navbars";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className=" bg-slate-950 flex items-center justify-center h-14">
          <div className="flex items-center justify-center flex-auto">
            <h1 className="text-white ml-40">Start Investing Today with 50% OFF Trading Fees!</h1>
            <h1 className="relative text-white cursor-pointer ml-4 transition-all duration-300 ease-in-out 
              before:absolute before:bottom-0 before:left-0 before:h-[2px] 
              before:w-0 before:bg-white before:transition-all before:duration-300 
              hover:before:w-full">
              Trade Now
            </h1>

          </div>
          <div className="">
            <p className=" text-white mr-20">English</p>
          </div>
        </header>
        <header className="flex justify-center items-center sticky top-0 h-32 bg-black bg-opacity-10 transition-all group">
          <Navbars />
        </header>
        {children}
        <footer className=" flex items-center align-middle bg-cyan-950 h-32 justify-center">
          <p className="text-center text-white">All rights reserved © 2024 Cryptotality</p>
        </footer>
      </body>
    </html>
  );
}
