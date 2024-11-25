import React from 'react';
import TextAreaFullBorder from './ui/Fields/TextAreaFullBorder'
import TextAreaWide from './ui/Fields/TextAreaWide';

function DataInsertionForm() {
  return (
      <div className=' flex flex-row justify-center items-center h-screen-full'>
          <div className=' flex flex-col py-10 '>
              <h1 className=' font-medium text-2xl'>Post my Product</h1>
              <form className=' flex flex-col gap-2'>
                  <label>Product Name: </label>
                  <TextAreaFullBorder type='' value='' onChange={(e) => e.target.value} />
                  <label>Product Description: </label>
                  <TextAreaWide value='' onChange={(e) => e.target.value} placeHolder={''} />
                  <TextAreaFullBorder type='text' value='' onChange={(e) => e.target.value} />
                  <TextAreaFullBorder type='text' value='' onChange={(e) => e.target.value} />
                  <TextAreaFullBorder type='text' value='' onChange={(e) => e.target.value} />
              </form>
          </div>
    </div>
  )
}

export default DataInsertionForm