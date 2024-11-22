import React from 'react'
type onLoading = {
    onLoading: boolean;
    provider: string;
}
function OAuthButton({ onLoading, provider }: onLoading) {
    return (
        <div>
            <button type='submit' disabled={onLoading} className=' bg-slate-100 text-black border border-black w-96 rounded  h-12 hover:bg-slate-200 duration-300'>{provider}</button>
        </div>
    )
}

export default OAuthButton