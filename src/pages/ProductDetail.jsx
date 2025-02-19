import React, { memo, useCallback, useState } from 'react'
import Location from '../components/commons/Location'
import { productData } from "../utils/product_contants"
import ProductCard from '../components/commons/ProductCard';
import Updater from '../components/commons/Updater';
import Accordion from '../components/commons/Accordion';
const ProductDetail = () => {
    const data = productData[2];
    const product = productData.slice(0, 4);
    const [preview, setPreview] = useState(data.image);
    const [color, setColor] = useState("Not Select ");


    const similarProduct = useCallback((item, index) => <ProductCard key={index} product={item} />, [])
    const extraImages = useCallback((item, index) => (
        <img
            key={index}
            src={item}
            alt="preview images"
            className='w-full max-h-24 h-full aspect-auto object-cover cursor-pointer'
            onClick={(e) => setPreview(e.target.src)}
            width={100}
            height={100}
            loading='lazy'
        />
    ), [])

    const colors = useCallback((item, index) => (
        <label key={index} onClick={() => setColor(item)} className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="peer hidden" />
            <span className="w-5 h-5 peer-checked:opacity-70" style={{
                background: `${item}`
            }}></span>
        </label>
    ), [])


    const Checkbox = ({ value }) => {
        return (
            <div className='my-4'>
                <label htmlFor={value} className='font-semibold bg-gray-400 w-12 h-12 grid place-items-center rounded cursor-pointer'>
                    <input type='checkbox' id={value} className='border w-full p-2 rounded-md border-gray-400 peer' hidden />
                    <span className='peer-checked:text-black text-white'>{value}</span>
                </label>

            </div>
        )
    }

    return (
        <>
            <div className="max-w-[1200px] mx-auto px-4 py-8">
                <Location location={['shop', 'Classic White T-Shirt']} />

                <div className='my-6 lg:flex gap-8'>

                    <div className='max-w-[500px] w-full mx-auto'>
                        <img
                            src={preview}
                            alt="product image"
                            className='max-w-[500px] w-full max-h-[450px] h-full aspect-auto object-cover'
                            width="450px"
                            height="450px"
                            loading='lazy'
                        />

                        <div className='flex w-full justify-between max-w-[500px] mx-auto mt-5 gap-4 overflow-x-scroll hide-overflow    '>
                            {
                                data.extra_images.map(extraImages)
                            }
                        </div>
                    </div>

                    <div className='max-w-[450px] lg:max-w-[600px] w-full mx-auto'>
                        <h1 className='text-2xl mt-4 font-semibold'>{data.name}</h1>
                        <div className='text-lg font-semibold my-1 flex gap-4'>
                            <span >${data.price}</span>
                            <strike className='text-neutral-500'>${((data.price) / (1 - data.discount)).toFixed(2)}</strike>
                        </div>
                        <div>
                            <p className='py-1 text-sm text-neutral-700 font-gara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequuntur quae eos earum dolores culpa corrupti unde, at aperiam distinctio deleniti error doloremque enim placeat ullam quia illo, fugiat alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi corporis nihil iusto repudiandae ad.</p>
                        </div>
                        <div>
                            <p className='mb-2 mt-4'>
                                <span className='font-semibold'>Size : </span>
                                <div className='flex gap-4 flex-wrap'>
                                    <Checkbox value={'XS'} />
                                    <Checkbox value={'S'} />
                                    <Checkbox value={'M'} />
                                    <Checkbox value={'L'} />
                                    <Checkbox value={'XL'} />
                                    <Checkbox value={'XXL'} />
                                </div>
                            </p>
                            <p className='mb-2 mt-4'>
                                <span className='font-semibold'>Color : </span>
                                <span style={{ background: `${color}`, backgroundBlendMode: 'difference', color: 'white' }} className='uppercase px-4 rounded py-0.5'>{color}</span>
                            </p>
                            <div className='flex gap-4'>
                                {
                                    data.colors.map(colors)
                                }
                            </div>
                            <div className='flex gap-4 items-center my-6 w-full'>
                                <Updater />
                                <button className='uppercase py-2 bg-warm text-white px-6 flex-1'>Add to cart</button>
                            </div>
                            <div>
                                <button className='border uppercase w-full py-2 font-semibold'>Buy Now</button>
                            </div>
                            <div className='border-t mt-12'>
                                <Accordion heading={"Details"} />
                                <Accordion heading={"Dimensions"} />
                                <Accordion heading={"Reviews"} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-24'>
                    <h2 className='text-2xl font-semibold my-4'>Similar Products</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8'>
                        {
                            product.map(similarProduct)
                        }
                    </div>
                </div>


            </div>
        </>
    )
}

export default memo(ProductDetail)