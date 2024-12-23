'use client'
import React from 'react'
import Password from './ui/Fields/Password'
import Email from './ui/Fields/Email'
import ButtonSignIn from './ui/Buttons/ButtonSignIn'
import { LoginData } from '../hooks/Auth/authentication'

function LoginForm() {
    const { email, password, setEmail, setPassword, loading, handleSubmit,  hasErr, error } = LoginData();
  return (
    <div className=' flex flex-col gap-5 w-full'>
     
          <form method='POST' className=' flex flex-col gap-5 w-full' onSubmit={handleSubmit}>
        <h1 className=' font-semibold text-3xl'>Log in to Exclusive</h1>
        {hasErr === true ? error : <div className=''>
          <p className=' text-red-400'>{ error}</p>
        </div> }
            <p className=' font-medium'>Enter your details below</p>
              <Email email={ email } onChange={(e)=>setEmail(e.target.value)} />
              <Password password={password} onChange={(e)=>setPassword(e.target.value)} />
              <div className=' flex flex-row gap-20 w-full items-center'>
              <ButtonSignIn onLoading={loading} signIn={loading === true ? 'Loading' : 'Sign In'} css={'bg-red-500 text-white w-36 rounded  h-12 hover:bg-red-600 duration-300'} />
                  <p className=' px-3 cursor-pointer font-medium text-red-500'>Forget Password?</p>
              </div>
          </form>
          
    </div>
  )
}

export default LoginForm