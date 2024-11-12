import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaBasketballBall, FaCapsules, FaDog, FaLightbulb } from 'react-icons/fa';
import { FaBaby, FaHouseMedical, FaPersonDress, FaShirt } from 'react-icons/fa6';

const pathName = usePathname();

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
        icon: <FaHouseMedical/>
    },
    {
        name: "Medicine",
        icon: <FaCapsules/>
    },
    {
        name: "Sports & Outdoor",
        icon: <FaBasketballBall/>
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
    return (
        <div>
            {productsList.map((item, index) => {
                return (
                    <div key={index} className="flex items-center space-x-2 px-2 py-2  rounded hover:bg-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                        <Link className='' href={`${item.link}`} >
                            <span className='flex justify-center items-center text-2xl w-8 h-8'>{item.icon}</span>
                            <span className=" hidden group-hover:block">{item.name}</span>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductLists;
