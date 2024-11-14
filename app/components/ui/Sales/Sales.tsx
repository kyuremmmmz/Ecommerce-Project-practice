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
              <div className=' flex flex-row gap-2'>
                  <h2 className=' font-semibold text-4xl'>Flash Sales</h2>
              </div>
              
        </div>
    </div>
  )
}

export default Sales