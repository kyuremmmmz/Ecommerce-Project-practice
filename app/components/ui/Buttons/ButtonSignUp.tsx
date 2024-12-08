import React from 'react'
type onLoading = {
    onLoading: boolean;
    signUp: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
function ButtonSignUp({ onLoading, signUp, onClick }: onLoading) {
    return (
        <div>
            <button onClick={onClick} type='submit' disabled={onLoading} className=' bg-red-500 text-white w-96 rounded  h-12 hover:bg-red-600 duration-300'>{signUp}</button>
        </div>
    )
}

export default ButtonSignUp