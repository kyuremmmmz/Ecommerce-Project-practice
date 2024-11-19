import React from 'react'
import Password from './ui/Fields/Password'
import Email from './ui/Fields/Email'

function LoginForm() {
  return (
      <div className=' flex flex-col gap-5 w-full'>
          <h1 className=' font-semibold text-3xl'>Log in to Exclusive</h1>
          <p className=' font-medium'>Enter your details below</p>
          <Email/>
          <Password/>
    </div>
  )
}

export default LoginForm