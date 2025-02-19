import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({image,slogan,heading,button,background}) => {
  return (
    <div className="flex flex-col items-center text-white relative">
                <img width={"550px"} height={100} src={image} alt="hero image" className="max-h-[550px] w-full object-cover" loading="lazy" />
                <div className={`font-gara text-center flex flex-col gap-1 py-5 ${background} w-full md:absolute top-0 left-1/8 md:w-[275px] lg:w-[350px] md:h-full md:justify-center md:px-8 `}>
                    <img width={"70px"} height={"70px"} src={"https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/pixvhka5lafgfgs1h0un"} alt="logo" className="mx-auto lg:mb-2" loading="lazy" />
                    <p className="text-base md:my-2 font-gara">{slogan}</p>
                    <h1 className="text-2xl font-semibold lg:text-4xl">{heading}</h1>
                    <Link to={'/shop'}><button className="cursor-pointer inline-block mx-auto bg-white text-dark w-fit px-6 py-2 rounded text-inter mt-5">{button}</button></Link>
                </div>
            </div>
  )
}
export default Hero