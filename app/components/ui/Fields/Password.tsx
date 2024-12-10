import { LoginData } from '@/app/hooks/Auth/authentication';
import { Value } from '@/app/type/DataReadings';
import React from 'react'
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';


function Password({ password, onChange }: Value) {
  const { isVisible, handleVisibility } = LoginData();
  return (
    <div>
      <div className=' absolute mx-[19%] my-2'>
        {isVisible  ? <FaEye className=' cursor-pointer' onClick={() => handleVisibility()} /> : <FaRegEyeSlash className=' cursor-pointer' onClick={() => handleVisibility()} />}
      </div>
      <input type={isVisible ? "password" : "text"} value={password} onChange={onChange} required placeholder="Enter password" className=' border-b-2 border-gray-500 w-full focus:border-b-2 py-2 focus:border-black focus:outline-none outline-none duration-300' />
    </div>
  )
}

export default Password