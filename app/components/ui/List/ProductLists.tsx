import React from 'react';
import { FaShirt } from 'react-icons/fa6';

const productsList = [
    {
        name: "Woman Fashion",
        icon: <FaShirt />
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
];

function ProductLists() {
    return (
        <div>
            {productsList.map((item, index) => {
                return (
                    <div key={index} className="container w-44 px-4 py-2 rounded hover:bg-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                        <div className="flex items-center space-x-2">
                            <p>{item.name}</p>
                            {item.icon && <span>{item.icon}</span>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductLists;
