import React, { useCallback } from 'react'

const Filter = ({ product, heading, classes,handler }) => {
    const handleClick=(e)=>{
        handler
    }
    const filter = useCallback((item, index) => (
        <div key={index} className={`flex items-center space-x-2 my-2 ${heading === 'Colors' ? 'border border-neutral-200' : ''}`} >
            <input
                type="checkbox"
                id={item}
                className={`w-4 h-4 text-blue-500 border-gray-300 rounded ${heading === 'Colors' ? 'hidden checked:block' : ''}`}
            />

            <label
                htmlFor={item}
                className={`${heading === 'Colors' ? 'w-5 h-5' : 'text-xs md:text-sm capitalize '} cursor-pointer`}
                style={{ background: `${item}` }}
                onClick={(e)=>handleClick(e)}
            >
                {heading !== 'Colors' && item}
            </label>
        </div>
    ), [])
    return (
        <div className='border-b py-4 my-4'>
            <h3 className='font-semibold'>{heading}</h3>
            <div className={classes}>
                {
                    product.map(filter)
                }
            </div>
        </div>
    )
}

export default Filter