import React from 'react'
type onLoading = {
  onLoading: boolean;
  signIn: string;
}
function ButtonSignIn({onLoading, signIn}: onLoading) {
  return (
      <div>
      <button type='submit' disabled={onLoading} className=' bg-red-500 text-white w-36 rounded  h-12 hover:bg-red-600 duration-300'>{ signIn }</button>
    </div>
  )
}

export default ButtonSignIn