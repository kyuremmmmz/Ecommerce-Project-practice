import React from 'react'

function Header1() {
  return (
      <div>
          <header className=" bg-slate-950 flex items-center justify-center h-14">
              <div className="flex items-center justify-center flex-auto">
                  <h1 className="text-white ml-40">Winter Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
                  <h1 className="relative text-white cursor-pointer ml-4 transition-all duration-300 ease-in-out 
              before:absolute before:bottom-0 before:left-0 before:h-[2px] 
              before:w-0 before:bg-white before:transition-all before:duration-300 
              hover:before:w-full">
                      Trade Now
                  </h1>

              </div>
              <div className="">
                  <p className=" text-white mr-20">English</p>
              </div>
          </header>
    </div>
  )
}

export default Header1