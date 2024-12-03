'use client'
import DataInsertionForm from '@/app/components/DataInsertionForm'
import ListInProducts from '@/app/components/ui/List/ListInProducts'
import React from 'react'

function page() {
  return (
    <div className='flex items-center h-screen-full gap-96 w-full justify-center overflow-hidden  font-[family-name:var(--font-geist-sans)]'>
      <DataInsertionForm />
      <ListInProducts/>
    </div>
  )
}

export default page