import React from 'react'
import BuyNowButton from '../Buttons/BuyNowButton'
import Image from 'next/image'
import radio from '../../../../assets/jbl-boombox-removebg-preview.png';
function SingleCategory() {
  return (
    <div className=' bg-black flex flex-row w-[1200px] h-[550px] gap-10 overflow-hidden'>
          <div className=' flex flex-col gap-2'>
              <p className=' text-green-400 px-10 mt-10 py-5 font-semibold'>Categories</p>
              <div className=' flex flex-col gap-2'>
                  <h1 className=' text-white text-6xl px-10 font-semibold'>Enhance Your</h1>
                  <h1 className=' text-white text-6xl px-10 font-semibold'>Music Experience</h1>
              </div>
              <div className=' flex flex-row items-center mt-5 px-10 gap-5'>
                  <div className=' flex flex-col w-20 h-20 bg-white rounded-full items-center justify-center'>
                      <h1 className=' font-bold'>23</h1>
                      <p className=' text-sm'>Hours</p>
                  </div>
                  <div className=' flex flex-col w-20 h-20 bg-white rounded-full items-center justify-center'>
                      <h1 className=' font-bold'>05</h1>
                      <p className=' text-sm'>Days</p>
                  </div>
                  <div className=' flex flex-col w-20 h-20 bg-white rounded-full items-center justify-center'>
                      <h1 className=' font-bold'>59</h1>
                      <p className=' text-sm'>Minutes</p>
                  </div>
                  <div className=' flex flex-col w-20 h-20 bg-white rounded-full items-center justify-center'>
                      <h1 className=' font-bold'>35</h1>
                      <p className=' text-sm'>Seconds</p>
                  </div>
              </div>
              <div className=' px-10 mt-5'>
                <BuyNowButton/>
              </div>
          </div>
          <div className=' flex justify-center w-[550px] h-[500px]  rounded-full my-5 animate-in'>
              <div className='flex justify-center bg-slate-50 opacity-30 blur-xl w-[550px] h-[500px] rounded-full my-5'>
              </div>
              <div className=' absolute flex items-center justify-center my-20'>
                  <Image src={radio} alt={'radio'} className='scale-90' />
              </div>
          </div>
    </div>
  )
}

export default SingleCategory