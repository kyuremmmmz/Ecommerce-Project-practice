import React from 'react'
import Steps from './ui/Progress/Steps'
import TextArea from './ui/Fields/TextArea'
import TextAreaFullBorder from './ui/Fields/TextAreaFullBorder'

function BillingForm() {
  return (
    <div className=' mx-80'>
      <form method='POST' className=' flex flex-col gap-5 w-96 mb-5'>
        <h1 className=' text-3xl'>Billing Details</h1>
        <TextAreaFullBorder onChange={(e) => e.target.value} />
        <TextAreaFullBorder onChange={(e) => e.target.value} />
        <TextAreaFullBorder onChange={(e) => e.target.value} />
        <TextAreaFullBorder onChange={(e) => e.target.value} />
        <TextAreaFullBorder onChange={(e) => e.target.value} />
        <TextAreaFullBorder onChange={(e) => e.target.value} />
        <TextAreaFullBorder onChange={(e) => e.target.value} />
      </form>
    </div>
  )
}

export default BillingForm