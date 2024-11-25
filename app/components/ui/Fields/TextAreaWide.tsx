import React from 'react'
type FieldsTypes = {
    placeHolder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}
function TextAreaWide({ placeHolder, value, onChange }: FieldsTypes) {
    return (
        <div>
            <textarea value={value} autoFocus={true} onChange={onChange} placeholder={placeHolder} className='border border-gray-500 w-full focus:border py-2 px-2 focus:border-black focus:outline-none outline-none duration-300'></textarea>
        </div>
    )
}

export default TextAreaWide