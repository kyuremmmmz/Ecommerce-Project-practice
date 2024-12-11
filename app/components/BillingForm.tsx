import CheckBox from './ui/CheckBox/CheckBox'
import TextAreaFullBorder from './ui/Fields/TextAreaFullBorder'
import BillingTable from './ui/Table/BillingTable'

function BillingForm() {
  return (
    <div className=' xl:mx-80 sm:mx-0 flex flex-row gap-96'>
      <form method='POST' className=' flex gap-5 w-[400px] mb-5'>
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
      <div className='flex flex-col gap-5 w-[400px]'>
        <BillingTable />
      </div>
      </div>
  )
}

export default BillingForm