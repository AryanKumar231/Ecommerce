import React, { memo } from 'react'

const HorizontalScrollItem = ({ image, category }) => {
    return (
        <div className="min-w-[250px] group cursor-pointer">
            <div className='w-full h-56 overflow-hidden'>
                <img width={100} height={100} src={image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-200 ease-in-out" loading="lazy" />
            </div>
            <h2 className="text-center font-semibold font-inter my-1 text-base pt-2">{category}</h2>
        </div>
    )
}

export default memo(HorizontalScrollItem)