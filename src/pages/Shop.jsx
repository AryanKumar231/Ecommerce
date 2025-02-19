import React, { useState, memo, lazy, useCallback } from 'react'
import { productData, category, productRange, productType, colors } from '../utils/product_contants';
import { IoFilterSharp } from "../utils/icons_constant"
const Filter = memo(lazy(() => import('../components/commons/Filter')));
const ProductCard = memo(lazy(() => import('../components/commons/ProductCard')));
const Location = memo(lazy(() => import('../components/commons/Location')));

const Shop = () => {

    const [open, setOpen] = useState(false);
    // const product = productData.slice(0, 15);
    const [product,setProduct]=useState(productData.slice(0, 15));
    const data = useCallback((item, index) => <ProductCard key={index} product={item} />, [])

    return (
        <>
            <div className='max-w-[1200px] mx-auto px-4 py-8'>

                <Location location={['shop']} />
                <div className='flex justify-between items-center my-4'>
                    <h3 className="font-semibold capitalize hidden md:block">Showing 120 items</h3>

                    <div className='flex items-center gap-2 cursor-pointer md:hidden'>
                        <IoFilterSharp className="text-lg" />
                        <span className="" onClick={() => setOpen(!open)}>Filter</span>
                    </div>
                    <div>
                        <label htmlFor="sort" className='text-sm mr-2'>Sort by:</label>
                        <select id="sort" className='text-sm p-2 border border-neutral-300 rounded-md'>
                            <option value="name">Low to High</option>
                            <option value="name">High to Low</option>
                        </select>
                    </div>
                </div>

                <h3 className="font-semibold capitalize md:hidden">Showing 120 items</h3>

                <div className='flex gap-20 relative flex-col md:flex-row'>
                    <div className={`${open ? 'block' : 'hidden'} md:block md:sticky top-0 bottom-12 mt-8 h-full max-w-[300px]`}>
                        <Filter product={category} heading='Category' handler={setProduct} />
                        <Filter product={productRange} heading='Price Range' handler={setProduct} />
                        <Filter product={productType} heading='Product Type' handler={setProduct} />
                        <Filter product={colors} heading='Colors' classes='flex gap-4 flex-wrap' handler={setProduct} />
                    </div>


                    {/* Products */}
                    <div className="mt-8 grid">
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
                            {
                                product.map(data)
                            }
                        </div>
                        <button className='inline-block mx-auto w-fit py-2 px-6 mt-12 border border-neutral-300 cursor-pointer rounded hover:scale-105 transition-all ease-in-out duration-200'>Show More</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default memo(Shop)