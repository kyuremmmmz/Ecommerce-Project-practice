"use client"
import Steps from '@/app/components/ui/Progress/Steps'
import React from 'react'

export default function layout({ children, }: Readonly <{children: React.ReactNode}>) {
  return (
      <div>
          <Steps/>
          {children}
    </div>
  )
}
