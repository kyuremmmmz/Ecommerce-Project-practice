'use client'
import React from 'react'
import Password from './ui/Fields/Password'
import Email from './ui/Fields/Email'
import ButtonSignIn from './ui/Buttons/ButtonSignIn'
import { LoginData } from '../hooks/Auth/authentication'
import Cookie from 'js-cookie';

function LoginForm() {
    const { email, password, setEmail, setPassword, loading, handleSubmit } = LoginData();
  return (
      <div className=' flex flex-col gap-5 w-full'>
          <form method='POST' className=' flex flex-col gap-5 w-full' onSubmit={handleSubmit}>
            <h1 className=' font-semibold text-3xl'>Log in to Exclusive</h1>
            <p className=' font-medium'>Enter your details below</p>
              <Email email={ email } onChange={(e)=>setEmail(e.target.value)} />
              <Password password={password} onChange={(e)=>setPassword(e.target.value)} />
              <div className=' flex flex-row gap-20 w-full items-center'>
                  <ButtonSignIn onLoading={loading} signIn={loading === true? 'Loading' : 'Sign In'} />
                  <p className=' px-3 cursor-pointer font-medium text-red-500'>Forget Password?</p>
              </div>
          </form>
          
    </div>
  )
}

export default LoginForm