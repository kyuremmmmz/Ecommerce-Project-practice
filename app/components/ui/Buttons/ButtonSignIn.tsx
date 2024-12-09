import React from 'react'
import { FaSpinner } from 'react-icons/fa';
type onLoading = {
  onLoading: boolean;
  signIn: string;
  css: string
}
function ButtonSignIn({onLoading, signIn, css}: onLoading) {
  return (
      <div>
      <button type='submit' disabled={onLoading} className={css}>
        <div className=' flex flex-row justify-center items-center gap-4'>
          {signIn} {onLoading == true ? <FaSpinner className=' animate-spin' /> : ''}
        </div>
      </button>
    </div>
  )
}

export default ButtonSignIn