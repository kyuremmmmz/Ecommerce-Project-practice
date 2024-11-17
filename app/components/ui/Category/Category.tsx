"use client";
import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaCamera, FaDesktop, FaGamepad, FaHeadphones, FaMobileAlt } from 'react-icons/fa';
import { IoWatchSharp } from 'react-icons/io5';

function Category() {
    const categories = [
        {
            name: 'Phones',
            icon: <FaMobileAlt className='  size-16 hover:text-white duration-300 group-hover/item:text-white' />,
        },
        {
            name: 'Computers',
            icon: <FaDesktop className='  size-16 hover:text-white duration-300 group-hover/item:text-white' />,
        },
        {
            name: 'Smartwatch',
            icon: <IoWatchSharp className='  size-16 hover:text-white duration-300 group-hover/item:text-white' />,
        },
        {
            name: 'Camera',
            icon: <FaCamera className='  size-16 hover:text-white duration-300 group-hover/item:text-white' />,
        },
        {
            name: 'HeadPhones',
            icon: <FaHeadphones className='  size-16 hover:text-white duration-300 group-hover/item:text-white' />,
        },
        {
            name: 'Gaming',
            icon: <FaGamepad className=' size-16 hover:text-white duration-300 group-hover/item:text-white' />,
        },

        
    ]
  return (
    <div className=' flex'>
          <div className=' flex flex-col gap-3'>
              <div className=' flex flex-row gap-2 text-center items-center'>
                  <div className=' w-4 h-12 bg-red-500 rounded'></div>
                  <h2 className=' font-semibold text-red-500'>Categories</h2>
                  <div className=' w-[1000px]'></div>
              </div>
              <div className="flex flex-row gap-10 items-center">
                  <h2 className="font-semibold text-4xl">Browse By Category</h2>
              </div>
              <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={6}
                  navigation
                  className="flex flex-col md:flex-row gap-2 items-center md:items-start justify-center md:justify-start w-[1200px] mb-14">
                  {categories.map((item, index) => {
                      return (
                          <SwiperSlide key={index} className='w-auto h-72 ml-1px'>
                              <div className="flex justify-center items-center w-40 h-40 bg-slate-100 hover:bg-red-500 duration-500 overflow-hidden group/item rounded cursor-pointer">
                                  <div className=' flex flex-col items-center justify-center'>
                                      <p className=' font-light'> {item.icon}</p>
                                      <p className=' font-normal group-hover/item:text-white duration-300'> {item.name}</p>
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

export default Category