import React, { memo } from 'react'
import Banner from '../components/commons/Banner'
import { peImg, unImg, wear } from '../../public/assets'

const About = () => {
    return (
        <>
            <div className="max-w-[1200px] mx-auto px-4 py-8">
                <div className="">
                    <div className='text-center my-12'>
                        <h1 className='text-2xl font-semibold my-2'>About Moon</h1>
                        <p className='text-neutral-700 text-sm max-w-[400px] mx-auto'>Moon Ecommerce offers a seamless shopping experience with a wide range of trendy products, secure payments, and fast delivery. 🚀</p>
                    </div>
                    <Banner
                        heading={"1910"}
                        desc={"Since 1910, Moon Ecommerce has been dedicated to providing high-quality products and exceptional customer service. Over the years, we have evolved with technology, ensuring a seamless and modern shopping experience. "}
                        link_name={null}
                        image={peImg}
                    />
                    <Banner
                        heading={"1990"}
                        desc={"Since 1990, Moon Ecommerce has been delivering quality products with a seamless shopping experience. From humble beginnings to a leading online marketplace, we prioritize innovation, customer satisfaction, and secure transactions. "}
                        link_name={null}
                        image={unImg}
                        direction={'flex-row-reverse'}
                    />
                    <Banner
                        heading={"2010"}
                        desc={"Since 2010, Moon Ecommerce has been redefining online shopping with a seamless experience, top-quality products, and fast, secure transactions. Our commitment to innovation and customer satisfaction makes us a trusted choice for shoppers worldwide. "}
                        link_name={null}
                        image={peImg}
                    />

                    <div className='my-8 md:flex gap-8 items-center '>
                        <img width={100} height={100} src={unImg} alt="banner" className="w-full object-cover md:max-w-1/2" loading="lazy" />
                        <div>
                            <h2 className='text-2xl font-semibold my-4'>How we works?</h2>
                            <div>
                                <h3 className='font-semibold uppercase my-1'>product design</h3>
                                <p className='mx-4 text-sm font-gara'>Our product design blends innovation, aesthetics, and functionality to deliver a seamless user experience.</p>
                            </div>
                            <div>
                                <h3 className='font-semibold uppercase my-2'>Offer Premium </h3>
                                <p className='text-sm mx-3 font-gara'>Premium quality products with durability, reliability, and excellence for a superior shopping experience.</p>
                            </div>
                            <div>
                                <h3 className='font-semibold uppercase my-2'>sell product</h3>
                                <p className='mx-3 text-sm font-gara'>Moon Ecommerce offers high-quality products with secure payments, fast delivery, and excellent customer support.</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h2 className='uppercase font-semibold text-2xl mt-16 mb-8 text-center'>Meet our Team</h2>
                        <div className='overflow-auto flex gap-6 hide-overflow'>
                            <div className='min-w-60'>
                                <img src={wear} alt="team" width={100} height={100} className=' w-full' />
                                <div className='uppercase text-center my-2'>
                                    <h3 className='text-base font-semibold'>Bernie Patterson</h3>
                                    <span className='text-xs'>CEO & founder</span>
                                </div>
                            </div>
                            <div className='min-w-60'>
                                <img src={wear} alt="team" width={100} height={100} className=' w-full' />
                                <div className='uppercase text-center my-2'>
                                    <h3 className='text-base font-semibold'>Ophelia vase</h3>
                                    <span className='text-xs'>creative director</span>
                                </div>
                            </div>
                            <div className='min-w-60'>
                                <img src={wear} alt="team" width={100} height={100} className=' w-full' />
                                <div className='uppercase text-center my-2'>
                                    <h3 className='text-base font-semibold'>corbin hossain</h3>
                                    <span className='text-xs'>artist</span>
                                </div>
                            </div>
                            <div className='min-w-60'>
                                <img src={wear} alt="team" width={100} height={100} className=' w-full' />
                                <div className='uppercase text-center my-2'>
                                    <h3 className='text-base font-semibold'>seren bowl</h3>
                                    <span className='text-xs'>marketing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(About)