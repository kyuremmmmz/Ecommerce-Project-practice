import React from 'react'

type Value = {
    email: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>void
}

function Email({ email, onChange} : Value) {
  return (
    <div>
          <input type="email" value={email} onChange={onChange} required placeholder="Enter your email address" className=' border-b-2 border-gray-500 py-2 w-full focus:border-b-2 focus:outline-none focus:border-black duration-300 outline-none' />
    </div>
  )
}

export default Email