import DataReading from '@/app/hooks/data/DataReading'
import React from 'react'

function ListInProducts() {
    const { data, err, loading } = DataReading();
    return (
      
        <div className=' flex flex-row h-screen bg-slate-400 overflow-y-auto mt-10'>
            <div className=' flex flex-col  '>
                {data.map((products) => {
                    return (
                        <div className=' flex flex-row h-auto w-auto' key={products._id}>
                            <ul>
                                <li>Product: {products.productName}</li>
                                <li>Price: ${products.price}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default ListInProducts