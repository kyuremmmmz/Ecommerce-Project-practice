import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const productsList = [
    {
      name: "Woman Fashion"
    },
    {
      name: "Men’s Fashion"
    },
    {
      name: "Electronics"
    },
    {
      name: "Home & Lifestyle"
    },
    {
      name: "Medicine"
    },
    {
      name: "Sports & Outdoor"
    },
    {
      name: "Baby’s & Toys"
    },
    {
      name: "Groceries & Pets"
    },
  ]
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-1 gap-2">
        <div className="border-r-2 bg-black w-40">
          {productsList.map((item, index) => {
            return (
              <div key={index}>
                <div className=" container grid-rows-2 w-44 px-4 rounded hover:bg-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                  <p>{item.name}</p>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  );
}
