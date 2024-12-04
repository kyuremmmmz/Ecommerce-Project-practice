import DataReading from '@/app/hooks/data/DataReading'
import React from 'react'

function ListInProducts() {
    const { data } = DataReading();
    return (
        <div className='flex flex-row h-screen bg-slate-300'>
            <div className=' flex flex-col gap-4 mt-4 w-full  '>
                <div className='flex flex-row gap-4'>
                    <div className=''></div>
                    <h1 className=' text-2xl font-medium'>Popular Products</h1>
                </div>
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