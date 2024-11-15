import { Badge } from '@/components/ui/badge'
import React from 'react'
import { FaStar } from 'react-icons/fa';
import image  from '../../../../assets/product-removebg-preview.png';
import Image from 'next/image';
function Sales() {
    const list: unknown[] = [
        {
            name: 'Add to Cart'
        },
        {
            name: 'Add to Cart'
        },
        {
            name: 'Add to Cart'
        },
        {
            name: 'Add to Cart'
        },
        {
            name: 'Add to Cart'
        },
        {
            name: 'Add to Cart'
        },
    ];
  return (
    <div className=' flex'>
          <div className=' flex flex-col gap-3'>
              <div className=' flex flex-row gap-2 text-center items-center'>
                  <div className=' w-4 h-12 bg-red-500 rounded'></div>
                  <h2 className=' font-semibold text-red-500'>Today&apos;s</h2>
                  <div className=' w-[1000px]'></div>
              </div>
              <div className="flex flex-row gap-10 items-center">
                  <h2 className="font-semibold text-4xl">Flash Sales</h2>
                  <div className=' flex flex-row gap-8'>
                      <div className="flex flex-col items-center mb-4">
                          <p className="text-sm font-semibold">Days</p>
                          <h2 className="text-3xl font-semibold leading-none">03</h2>
                      </div>
                      <div className=' flex flex-col items-center justify-center text-center mb-1'>
                          <div className=' h-1'></div>
                          <h2 className='text-3xl font-semibold leading-none text-red-400'>:</h2>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center mb-4">
                          <p className="text-sm font-semibold">Hours</p>
                          <h2 className="text-3xl font-semibold leading-none">23</h2>
                      </div>
                      <div className=' flex flex-col items-center justify-center text-center mb-1'>
                          <div className=' h-1'></div>
                          <h2 className='text-3xl font-semibold leading-none text-red-400'>:</h2>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center mb-4">
                          <p className="text-sm font-semibold">Minutes</p>
                          <h2 className="text-3xl font-semibold leading-none">19</h2>
                      </div>
                      <div className=' flex flex-col items-center justify-center text-center mb-1'>
                          <div className=' h-1'></div>
                          <h2 className='text-3xl font-semibold leading-none text-red-400'>:</h2>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center mb-4">
                          <p className="text-sm font-semibold">Seconds</p>
                          <h2 className="text-3xl font-semibold leading-none">56</h2>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center md:justify-start">
                  {list.map((item, index) => {
                      return (
                          <div key={index} className=' w-auto bg-white h-72'>
                              <div className="relative w-64 h-64 bg-slate-100 overflow-hidden group/item">
                                  <Badge variant="destructive" className="bg-red-500 rounded absolute mt-4 mx-3 hover:bg-red-200 duration-300 cursor-pointer text-white">
                                      -40%
                                  </Badge>
                                  <div className=' flex mx-5 my-5'>
                                      <Image className=' absolute justify-center items-center size-56' src={image} alt={'img'} />
                                  </div>
                                  <div className=' flex z-50 justify-center bg-black  my-72 items-center text-center hover:bg-slate-700 group-hover/item:my-[210px] duration-300'>
                                      <h1 className=' text-white font-normal cursor-pointer'>{item.name}</h1>
                                  </div>
                              </div>
                              <div>
                                  <h1 className=' font-medium'>HAVIT HV-G92 Gamepad</h1>
                                  <p className=' text-red-400 font-medium'>$120</p>
                                  <div className=' flex flex-row gap-3'>
                                      <div className='flex flex-row'>
                                          <FaStar color='orange' />
                                          <FaStar color='orange' />
                                          <FaStar color='orange' />
                                          <FaStar color='orange' />
                                          <FaStar color='gray' />
                                      </div>
                                      <p className=' text-slate-400 '>(75)</p>
                                  </div>
                              </div>
                          </div>
                      )
                  }) }
              </div>
        </div>
    </div>
  )
}

export default Sales