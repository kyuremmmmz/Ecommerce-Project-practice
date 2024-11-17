"use client";
import { Badge } from '@/components/ui/badge'
import React from 'react'
import { FaStar } from 'react-icons/fa';
import image  from '../../../../assets/product-removebg-preview.png';
import Image from 'next/image';
import { IoEyeOutline, IoHeartOutline } from 'react-icons/io5';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Sales() {
    const list= [
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
              <div className="flex flex-row gap-10 items-center sticky top-32 z-50 bg-white">
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
              <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={4}
                  navigation
                  className="flex flex-col md:flex-row gap-2 items-center md:items-start justify-center md:justify-start w-[1200px]">
                  {list.map((item, index) => {
                      return (
                          <SwiperSlide key={index} className='w-auto h-72 ml-1px'>
                              <div className="relative w-64 h-64 bg-slate-100 overflow-hidden group/item rounded">
                                  <div className=' flex flex-row top-1 '>
                                      <div className=' w-4'></div>
                                      <div className=' flex flex-row items-center gap-36 h-7 justify-center mr-3'>
                                          <Badge variant="destructive" className=" bg-red-500 rounded ml-2 mt-3 hover:bg-red-200 duration-300 cursor-pointer  text-white">
                                              -40%
                                          </Badge>
                                          <div className=' flex flex-col gap-2 '>
                                              <div className=' h-8'></div>
                                              <IoHeartOutline className=' object-cover bg-white size-5 rounded-full' />
                                              <IoEyeOutline className=' object-cover bg-white size-5 rounded-full' />
                                          </div>
                                      </div>
                                  </div>
                                  <div className=' flex mx-4 rounded-2xl'>
                                      <Image className=' absolute top-8 mx-2 h-48 rounded-full items-center size-56 object-cover' src={image} alt={'img'} />
                                  </div>
                                  <div className=' flex justify-center bg-black  my-72 items-center rounded text-center hover:bg-slate-700 group-hover/item:my-[205px] duration-300'>
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
                          </SwiperSlide>
                      )
                  }) }
              </Swiper>
          </div>
    </div>
  )
}

export default Sales