import React from 'react'

type Value = {
    password: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}
function Password({ password, onChange }: Value) {
  return (
      <div>
          <input type="password" value={password} onChange={onChange} required placeholder="Enter password" className=' border-b-2 border-gray-500 w-full focus:border-b-2 py-2 focus:border-black focus:outline-none outline-none duration-300' />
    </div>
  )
}

export default Password