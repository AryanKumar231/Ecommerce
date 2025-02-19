import React from 'react'
import { productData } from "../utils/product_contants"
import { Link } from "react-router-dom"

const Profile = () => {
    return (
        <>
            <div className="max-w-[1200px] w-full mx-auto px-4 py-8">
                <div className='md:flex gap-12'>
                    <aside className='flex justify-center md:justify-start md:mt-4'>
                        <ul className='flex gap-3 md:gap-8 justify-between md:justify-start md:flex-col md:w-fit'>
                            <li className='borders py-2 px-6 rounded-md'>Orders</li>
                            <li className='borders py-2 px-6 rounded-md'>Update</li>
                            <li className='borders py-2 px-6 rounded-md'>Logout</li>
                        </ul>
                    </aside>
                    <div className='mt-12 md:w-full md:mt-0'>
                        {
                            productData.slice(0, 4).map((item, index) => (
                                <Link to='/shop/tshirt' key={index}>
                                    <div  className='flex items-center justify-between gap-8 my-4 md:w-full border-y py-2 border-neutral-200'>
                                        <img src={item.image} alt="image" w={100} height={100} className='w-12 h-12 object-cover ' />
                                        <h1 className='font-semibold text-left flex-1 line-clamp-1'>{item.name}</h1>
                                        <div className='flex gap-2 items-center'>
                                            <span className='text-xs font-semibold'>12/08/2024</span>
                                            <span className='capitalize borders py-1 px-4 rounded-md text-orange-500'>placed</span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile