import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Steps() {
    const path = usePathname();
  return (
      <div className=' flex flex-row text-black mx-80 mt-10 mb-10'>
          <div className=' flex flex-row gap-3'>
              <Link href={'/page/Billing'} className={`hover:text-red-300 duration-300`} title='Account' >Account</Link>
              <span>/</span>
              <Link href={'/page/Billing'} className={`hover:text-red-300 duration-300`} title='My Account' >My Account</Link>
              <span>/</span>
              <Link href={'/page/Billing'} className={`hover:text-red-300 duration-300`} title='Product' >Product</Link>
              <span>/</span>
              <Link href={'/page/Billing'} className={`hover:text-red-300 duration-300`} title='View Cart' >View Cart</Link>
              <span>/</span>
              <Link href={'/page/Billing'} className={`hover:text-red-300 duration-300`} title='Checkout' >Checkout</Link>
          </div>
    </div>
  )
}

export default Steps