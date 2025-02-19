import React, { useCallback } from 'react'
import Updater from "./Updater"
import { CiCircleRemove } from "../../utils/icons_constant"
const CartItem = ({ product }) => {

    const cartData = useCallback((product, index) => (
        <tr key={index} className='grid md:grid-cols-6 borders-b items-center py-6 gap-4 '>
            <td className='text-2xl cursor-pointer'><CiCircleRemove className='text-neutral-500' /></td>
            <td>
                <img src={product.image} alt="image" className='w-12 h-12 aspect-square object-cover' width={"48px"} height={"48px"} loading='lazy' />
            </td>
            <td className='font-semibold text-base line-clamp-1'>{product.name}</td>
            <td className='font-semibold flex justify-between'>
                <span className='md:hidden'>Price:</span>
                <span>
                    ${product.price}
                </span>
            </td>
            <td className='md:max-w-[120px]'>
                <div className='flex justify-between items-center w-full'>
                    <span className='md:hidden'>Price:</span>
                    <Updater />
                </div>
            </td>
            <td className='font-semibold text-neutral-500'>
                <div className='flex justify-between items-center w-full'>
                    <span className='md:hidden'>Subtotal:</span>
                    <span>${(product.price + 3).toFixed(2)}</span>
                </div>
            </td>
        </tr>
    ), [])


    return (
        <table className='w-full text-gray-800 my-12'>
            <thead className='borders-b w-full'>
                <tr className='pb-4 w-full hidden md:grid grid-cols-6 place-items-start'>
                    <th>Remove</th>
                    <th>Photo</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map(cartData)
                }
            </tbody>
        </table>
    )
}

export default CartItem