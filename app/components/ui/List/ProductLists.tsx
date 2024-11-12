import React from 'react'


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


function ProductLists() {
  return (
      <div>
        {productsList.map((item, index) => {
          return (
              <div key={index}>
                  <div className=" container grid-rows-2 w-44 px-4 py-2 rounded hover:bg-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                      <p>{item.name}</p>
                  </div>
              </div>
          )
      })}</div>
  )
}

export default ProductLists