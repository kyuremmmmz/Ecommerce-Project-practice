import { Badge } from '@/components/ui/badge'
import React from 'react'

function Sales() {
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
              <div className=' flex flex-row gap-6'>
                  <div className=' w-56 h-40 bg-slate-200'>
                      <Badge variant="destructive" className=' bg-red-500 rounded absolute mt-4 mx-3 hover:bg-red-200 duration-300 cursor-pointer'>40%</Badge>
                  </div>
                  <div className=' w-56 h-40 bg-slate-200'>
                      <Badge variant="destructive" className=' bg-red-500 rounded absolute mt-4 mx-3 hover:bg-red-200 duration-300 cursor-pointer'>40%</Badge>
                  </div>
                  <div className=' w-56 h-40 bg-slate-200'>
                      <Badge variant="destructive" className=' bg-red-500 rounded absolute mt-4 mx-3 hover:bg-red-200 duration-300 cursor-pointer'>40%</Badge>
                  </div>
                  <div className=' w-56 h-40 bg-slate-200'>
                      <Badge variant="destructive" className=' bg-red-500 rounded absolute mt-4 mx-3 hover:bg-red-200 duration-300 cursor-pointer'>40%</Badge>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Sales