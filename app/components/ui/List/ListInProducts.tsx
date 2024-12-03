import DataReading from '@/app/hooks/data/DataReading'
import Image from 'next/image';
import React from 'react'

function ListInProducts() {
    const { data, err, loading } = DataReading();
    return (
      
        <div className=' flex flex-row h-screen bg-slate-400 w-64 overflow-y-auto mt-10'>
           <div className=' flex flex-col gap-4 mt-4 w-full  '>
                <h1>Popular Products</h1>
                <div className=' flex flex-row gap-16 w-full justify-center items-center'>
                    <h2 className=' text-black'>Product</h2>
                    <h2 className=' text-black'>Earnings</h2>
                </div>
                {data.map((products) => {
                    return (
                        <div className=' flex flex-row h-auto w-auto' key={products._id}>
                            <ul className=''>
                               
                            </ul>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default ListInProducts