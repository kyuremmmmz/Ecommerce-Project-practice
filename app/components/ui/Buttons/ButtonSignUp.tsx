import React from 'react'
type onLoading = {
    onLoading: boolean;
    signUp: string;
}
function ButtonSignUp({ onLoading, signUp }: onLoading) {
    return (
        <div>
            <button type='submit' disabled={onLoading} className=' bg-red-500 text-white w-96 rounded  h-12 hover:bg-red-600 duration-300'>{signUp}</button>
        </div>
    )
}

export default ButtonSignUp