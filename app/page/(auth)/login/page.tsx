import React from 'react'
import cart from '../../../../assets/cart.png';
import Image from 'next/image';
import LoginForm from '@/app/components/LoginForm';
function page() {
  return (
    <div className=' flex flex-row mt-9 mb-9'>
      <div className=' h-[1561] w-full flex flex-row gap-80'>
        <div className=' flex h-[781px] w-[905px] bg-blue-200'>
          <Image src={cart} alt={'image'}/>
        </div>
        <div className=' flex items-center justify-center w-96'>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default page