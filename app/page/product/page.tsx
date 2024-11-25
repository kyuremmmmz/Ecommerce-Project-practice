'use client'
import DataInsertionForm from '@/app/components/DataInsertionForm'
import React from 'react'

function page() {
  return (
    <div className='grid p-8 h-screen-full  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <DataInsertionForm/>
    </div>
  )
}

export default page