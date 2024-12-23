import React from 'react'
type FieldsTypes = {
    placeHolder: string,
    value: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
function TextArea({placeHolder, value, onChange, type}: FieldsTypes) {
  return (
      <div>
          <input type={type} value={value} onChange={onChange} placeholder={placeHolder} className='border-b-2 border-gray-500 w-full focus:border-b-2 py-2 focus:border-black focus:outline-none outline-none duration-300'></input>
    </div>
  )
}

export default TextArea