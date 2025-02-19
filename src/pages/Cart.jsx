import React, { memo } from 'react'
import Location from "../components/commons/Location"
import CartItem from '../components/commons/CartItem'
import { productData } from '../utils/product_contants';
import { Link } from 'react-router-dom';
const Cart = () => {
    const product = productData.slice(0, 4);

    return (
        <>
            <div className="max-w-[1200px] mx-auto py-8 px-4">
                <Location location={["Shopping cart"]} />

                <h1 className='font-semibold text-lg my-4'>Cart ( 3 Item )</h1>

                <CartItem product={product} />

                {/* Cart total */}
                <div className="flex justify-center md:justify-end md:pr-8  w-full">
                    <div className='max-w-[400px] w-full bg-warm text-white p-6 '>
                        <h3 className='font-semibold text-lg'>Cart totals</h3>
                        <div className='flex justify-between items-center my-4'>
                            <span>Subtotal</span>
                            <span>$465.00</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span>Total</span>
                            <span>$499.00</span>
                        </div>
                        <Link to={'/cart/shipping/payment'}>
                            <button className='border cursor-pointer uppercase mt-8 mb-4 w-full py-3'>
                                proceed to checkout
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default memo(Cart)