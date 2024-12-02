
import React from 'react'
type FieldsTypes = {
    value?: string,
    type?: string,
    name?: string,
    accept? : string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
function TextAreaFullBorder({  value, onChange, type, name, accept }: FieldsTypes) {
    return (
        <div>
            <input type={type} value={value} onChange={onChange} accept={accept} name={name} required className='border border-gray-500 w-full focus:border py-2 px-2 focus:border-black focus:outline-none outline-none duration-300'></input>
        </div>
    )
}

export default TextAreaFullBorder