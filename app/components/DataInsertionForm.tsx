import React from 'react';
import TextAreaFullBorder from './ui/Fields/TextAreaFullBorder'
import TextAreaWide from './ui/Fields/TextAreaWide';

function DataInsertionForm() {
  return (
      <div className=' flex flex-row h-screen-full'>
          <div className=' flex flex-col px-72 '>
              <h1 className=' font-medium text-2xl py-6'>Post my Product</h1>
              <form className=' flex flex-col gap-2'>
                  <label>Product Name: </label>
                  <TextAreaFullBorder type='' value='' onChange={(e) => e.target.value} />
                  <label>Product Description: </label>
                  <TextAreaWide value='' onChange={(e) => e.target.value} placeHolder={''} />
                  <label>Product Price: </label>
                  <TextAreaFullBorder type='number' value='' onChange={(e) => e.target.value} />
                  <label>Product Discount: </label>
                  <TextAreaFullBorder type='number' value='' onChange={(e) => e.target.value} />
                  <label>Product Image: </label>
                  <TextAreaFullBorder type='file' value='' onChange={(e) => e.target.value} />
              </form>
          </div>
          <div className=' flex flex-col px-72 '>
              <h1 className=' font-medium text-2xl py-6'>Post my Product</h1>
              <form className=' flex flex-col gap-2'>
                  <label>Product Name: </label>
                  <TextAreaFullBorder type='' value='' onChange={(e) => e.target.value} />
                  <label>Product Description: </label>
                  <TextAreaWide value='' onChange={(e) => e.target.value} placeHolder={''} />
                  <label>Product Price: </label>
                  <TextAreaFullBorder type='number' value='' onChange={(e) => e.target.value} />
                  <label>Product Discount: </label>
                  <TextAreaFullBorder type='number' value='' onChange={(e) => e.target.value} />
                  <label>Product Image: </label>
                  <TextAreaFullBorder type='file' value='' onChange={(e) => e.target.value} />
              </form>
          </div>
    </div>
  )
}

export default DataInsertionForm