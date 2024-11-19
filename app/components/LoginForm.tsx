import React from 'react'
import Password from './ui/Fields/Password'
import Email from './ui/Fields/Email'
import ButtonSignIn from './ui/Buttons/ButtonSignIn'

function LoginForm() {
  return (
      <div className=' flex flex-col gap-5 w-full'>
          <form method='POST' className=' flex flex-col gap-5 w-full'>
            <h1 className=' font-semibold text-3xl'>Log in to Exclusive</h1>
            <p className=' font-medium'>Enter your details below</p>
            <Email/>
              <Password />
              <div className=' flex flex-row gap-20 w-full items-center'>
                  <ButtonSignIn />
                  <p className=' px-3'>Forget Password?</p>
              </div>
          </form>
          
    </div>
  )
}

export default LoginForm