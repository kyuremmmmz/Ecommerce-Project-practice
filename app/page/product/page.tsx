'use client'
import DataInsertionForm from '@/app/components/DataInsertionForm'
import ListInProducts from '@/app/components/ui/List/ListInProducts'
import React from 'react'

function page() {
  return (
    <div className='grid  h-screen gap-16  font-[family-name:var(--font-geist-sans)]'>
      <DataInsertionForm />
      <ListInProducts/>
    </div>
  )
}

export default page