import React from 'react'

type Text = {
  product: string;
  description: string;
}
function ProductsText({ product,  description }: Text) {
  return (
      <div>
          <div className=' flex flex-row gap-2 text-center items-center mb-5'>
              <div className=' w-4 h-12 bg-red-500 rounded'></div>
        <h2 className=' font-semibold text-red-500'>{ product }</h2>
              <div className=' w-[1000px]'></div>
          </div>
          <div className="flex flex-row gap-10 items-center sticky top-32 z-50 bg-white">
        <h2 className="font-semibold text-4xl">{ description }</h2>
          </div>
    </div>
  )
}

export default ProductsText