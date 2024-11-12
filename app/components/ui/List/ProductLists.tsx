'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaBasketballBall, FaCapsules, FaDog, FaLightbulb } from 'react-icons/fa';
import { FaBaby, FaHouseMedical, FaPersonDress, FaShirt } from 'react-icons/fa6';

const productsList = [
    {
        name: "Woman Fashion",
        icon: <FaPersonDress />,
        link: '/'
    },
    {
        name: "Men’s Fashion",
        icon: <FaShirt />
    },
    {
        name: "Electronics",
        icon: <FaLightbulb />
    },
    {
        name: "Home & Lifestyle",
        icon: <FaHouseMedical />
    },
    {
        name: "Medicine",
        icon: <FaCapsules />
    },
    {
        name: "Sports & Outdoor",
        icon: <FaBasketballBall />
    },
    {
        name: "Baby’s & Toys",
        icon: <FaBaby />
    },
    {
        name: "Groceries & Pets",
        icon: <FaDog />
    },
];

function ProductLists() {
    const pathName = usePathname();
    return (
        <aside className="group sticky bg-blend-darken top-32 left-0 w-12 hover:w-52 transition-all duration-300 border-r-2 overflow-hidden py-5 h-screen">
            <div className="flex flex-col space-y-2">
                {productsList.map((item, index) => {
                    return (
                        <div key={index} className="group flex items-center space-x-2 px-2 py-2 rounded hover:bg-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                            <Link href={`${item.link}`} className="flex items-center space-x-2">
                                <span className='flex justify-center items-center text-2xl w-8 h-8'>
                                    {item.icon}
                                </span>
                                <span className="hidden group-hover:inline-block">{item.name}</span>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </aside>
    );
}

export default ProductLists;
