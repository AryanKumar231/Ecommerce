import React, { lazy, memo, useCallback } from 'react';
import { productData } from "../utils/product_contants";
const Banner = memo(lazy(() => import('../components/commons/Banner')));
const ProductCard = memo(lazy(() => import('../components/commons/ProductCard')));
const HorizontalScrollItem = memo(lazy(() => import('../components/commons/HorizontalScrollItem')));
const Hero = memo(lazy(() => import('../components/commons/Hero')));



const Home = () => {
    const bestSellers = productData.slice(0, 8);
    const newArrivals = productData.slice(8, 12);


    const data = useCallback((product, index) => (
        <ProductCard key={index} product={product} />
    ), [])

    return (
        <>
            {/* hero */}
            <Hero
                image={"https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/q9aa1utcqgr1zyi048nr"}
                heading={"Fast Fashion, Instant Style"}
                slogan={"Fashion that tells your story"}
                button={"Shop Now"}
                background={'bg-dark'}
            />

            <div className="max-w-[1200px] mx-auto py-4 md:py-8 lg:py-12">
                {/* horizontal scroll */}
                <div className="flex overflow-x-auto py-3 md:gap-4 px-6 space-x-4 hide-overflow lg:justify-center">
                    <HorizontalScrollItem image={"https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/k3w5ndct72tfoopnbbcy"} category={"Mens Wear"} />
                    <HorizontalScrollItem image={"https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/jg2mzpmy27v5ufirvrbr"} category="Womens Wear" />
                    <HorizontalScrollItem image={"https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/zxggufbmbzpf7da22k07"} category="Kids Wear" />
                    <HorizontalScrollItem image={"https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/zxggufbmbzpf7da22k07"} category="Unisex" />
                </div>

                {/* banner-1 */}
                <div className='my-16'>
                    <Banner
                        heading="up to 40% off our holi collection"
                        desc="Style That Sparks Joy and Makes You Squeal"
                        link_name="Shop Now"
                        image={"https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/xu8ojndton56ijcajib3"}
                        url={'/shop'}
                    />
                </div>




                {/* Product */}
                <div className="">
                    <h2 className="text-center text-2xl mb-8 font-semibold font-inter">Best Sellers</h2>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8 mx-4 md:grid-cols-3 lg:grid-cols-4">
                        {
                            bestSellers.map(data)
                        }
                    </div>
                </div>


                {/* banner 2 */}
                <div className="my-16 md:my-24">
                    <Banner
                        heading="Made in india since 1950."
                        desc="Rooted in rich traditions, crafted with excellence, and designed for the future."
                        link_name="Learn More"
                        image={"https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/xhdgsbvmdndna5ajqytz"}
                        url={'/'}
                    />

                    <Banner
                        heading="Our History"
                        desc="From humble beginnings to a brand of trust, we blend tradition with innovation."
                        link_name="Learn More"
                        image={"https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/japdylkejqqkgdmis945"}
                        direction={'md:flex-row-reverse'}
                        url={"/"}
                    />
                </div>

                {/* new arrivals */}
                <div>
                    <h2 className="text-center text-2xl mb-8 font-semibold font-inter uppercase">Discover new arrivals</h2>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8 mx-4 md:grid-cols-3 lg:grid-cols-4 place-items-center">
                        {
                            newArrivals.map(data)
                        }
                    </div>
                </div>


            </div>

        </>
    )
}

export default memo(Home)