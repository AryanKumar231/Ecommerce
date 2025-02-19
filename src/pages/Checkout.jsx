import React, { memo, useCallback } from 'react'
import Location from '../components/commons/Location'
import { productData } from "../utils/product_contants";
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from "../utils/icons_constant"
import InputWithLabel from '../components/commons/InputWithLabel';


const Checkout = () => {
    const product = productData.slice(0, 4);

    const data = useCallback((item, index) => (
        <div key={index} className='flex justify-between text-neutral-600 my-2 text-sm'>
            <span >{item.name}</span>
            <span>${item.price}</span>
        </div>
    ), [])

    return (
        <>
            <div className="max-w-[1200px] mx-auto py-8 px-4">
                <Location location={["cart", "shipping", "payment"]} />
                <div className='lg:flex w-full justify-between gap-20'>
                    <div className='flex-1'>
                        <div>
                            <h3 className='font-semibold text-lg mt-8'>Billing Details</h3>
                            <div className='md:flex justify-between gap-4'>
                                <InputWithLabel
                                    label={"First Name *"}
                                    id={"fname"}
                                    placeholder={"John"}
                                    type={"text"}
                                />
                                <InputWithLabel
                                    label={"Last Name *"}
                                    id={"lname"}
                                    placeholder={"Doe"}
                                    type={"text"}
                                />
                            </div>
                            <div className='md:flex justify-between gap-4'>
                                <InputWithLabel
                                    label={"Country / Region *"}
                                    type={"text"}
                                    id={"country"}
                                    placeholder={"India"}
                                />
                                <InputWithLabel
                                    label={"State *"}
                                    type={"text"}
                                    id={"state"}
                                    placeholder={"State"}
                                />
                            </div>


                            <div className='md:flex gap-4'>
                                <InputWithLabel
                                    label={"Town / City *"}
                                    type={"text"}
                                    id={"city"}
                                    placeholder={"City"}
                                />
                                <InputWithLabel
                                    label={"Zip Code *"}
                                    type={"text"}
                                    id={"zipcode"}
                                    placeholder={"Zip code"}
                                />
                            </div>

                            <InputWithLabel
                                label={"Address *"}
                                type={"text"}
                                id={"address"}
                                placeholder={"Address"}
                            />




                            <InputWithLabel
                                label={"Phone *"}
                                type={"number"}
                                id={"phone"}
                                placeholder={"+91 00000 00000"}
                            />
                            <InputWithLabel
                                label={"Email *"}
                                type={"email"}
                                id={"email"}
                                placeholder={"example@email.com"}
                            />

                        </div>
                        <Link to={'/cart'}>
                            <button className='flex  items-center gap-2 borders px-6 py-2 rounded mt-12 cursor-pointer'>
                                <MdOutlineArrowBackIosNew />
                                <span>Back to Cart</span>
                            </button>
                        </Link>
                    </div>


                    <div className='my-12 flex-1 max-w-[400px] mx-auto border p-8 rounded'>
                        <div className=' flex justify-between text-lg font-semibold border-b pb-4'>
                            <span>Product</span>
                            <span>Subtotal</span>
                        </div>
                        <div className='my-4'>
                            {
                                product.map(data)
                            }
                        </div>
                        <div className="flex my-2 justify-between text-sm font-semibold">
                            <span>Subtotal: </span>
                            <span>$345.34</span>
                        </div>
                        <div className="flex mb-4  justify-between text-sm font-semibold">
                            <span>Shipping: </span>
                            <span>$15.34</span>
                        </div>

                        <div className="flex justify-between text-lg font-semibold border-t pt-4">
                            <span>Total: </span>
                            <span>$415.34</span>
                        </div>


                        <button className='border mt-12 w-full py-2 border-neutral-300 cursor-pointer'>Place order</button>


                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Checkout)