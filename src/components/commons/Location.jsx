import React, { useCallback } from 'react'

const Location = ({ location }) => {
    const loc=useCallback((item,index) => (<span key={index}> /&nbsp;{item}</span>),[])
    return (
        <>
            <div className="capitalize text-neutral-600 font-semibold">
                <span>Home&nbsp;</span>
                {
                    location.map(loc)
                }
            </div>
        </>
    )
}

export default Location