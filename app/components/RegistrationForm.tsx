'use client'
import React from 'react'
import Password from './ui/Fields/Password'
import Email from './ui/Fields/Email'
import RegisterData from '../hooks/Auth/registration'
import TextArea from './ui/Fields/TextArea'
import ButtonSignUp from './ui/Buttons/ButtonSignUp'
import OAuthButton from './ui/Buttons/O-AuthButton'

function RegistrationForm() {
    const { password, email, lastName, firstName, loading, setEmail, setLastName, setPassword, setFirstName, handleRegister } = RegisterData();
    return (
        <div className=' flex flex-col gap-5 w-full'>
            <form method='POST' className=' flex flex-col gap-5 w-full' onSubmit={handleRegister}>
                <h1 className=' font-semibold text-3xl'>Register your account to Exclusive</h1>
                <p className=' font-medium'>Enter your details below</p>
                <TextArea placeHolder={'Enter your First name'} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <TextArea placeHolder={'Enter your Last name'} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <Email email={email} onChange={(e) => setEmail(e.target.value)} />
                <Password password={password} onChange={(e) => setPassword(e.target.value)} />
                <div className=' flex flex-col gap-5 w-full items-center'>
                    <ButtonSignUp onLoading={loading} signUp={loading === true ? 'Loading' : 'Register'} />
                    <OAuthButton onLoading={false} provider={'Sign Up With Google'}/>
                    <p className=' px-3 cursor-pointer font-medium text-red-500'>Already have an account?</p>
                </div>
            </form>

        </div>
    )
}

export default RegistrationForm