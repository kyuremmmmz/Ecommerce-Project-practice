import React from 'react'
import Steps from './ui/Progress/Steps'
import TextArea from './ui/Fields/TextArea'
import TextAreaFullBorder from './ui/Fields/TextAreaFullBorder'
import CheckBox from './ui/CheckBox/CheckBox'
import ButtonSignIn from './ui/Buttons/ButtonSignIn'

function BillingForm() {
  return (
    <div className=' mx-80'>
      <form method='POST' className=' flex flex-row gap-5 w-[400px] mb-5'>
        <div className=' flex flex-col gap-2'>
          <h1 className=' text-3xl'>Billing Details</h1>
          <label className=' text-slate-500'>First Name</label>
          <TextAreaFullBorder onChange={(e) => e.target.value} />
          <label className=' text-slate-500'>Company Name</label>
          <TextAreaFullBorder onChange={(e) => e.target.value} />
          <label className=' text-slate-500'>Street Address</label>
          <TextAreaFullBorder onChange={(e) => e.target.value} />
          <label className=' text-slate-500'>Apartment, floor, etc. (optional)</label>
          <TextAreaFullBorder onChange={(e) => e.target.value} />
          <label className=' text-slate-500'>Town/City</label>
          <TextAreaFullBorder onChange={(e) => e.target.value} />
          <label className=' text-slate-500'>Phone Number</label>
          <TextAreaFullBorder onChange={(e) => e.target.value} />
          <label className=' text-slate-500'>Email Address</label>
          <TextAreaFullBorder type='email' required={true} onChange={(e) => e.target.value} />
          <CheckBox />
        </div>
        
      </form>
    </div>
  )
}

export default BillingForm