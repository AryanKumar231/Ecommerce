import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({ heading, desc, link_name, image, direction, url,classes }) => {
    return (
        <div className={`${classes} md:flex ${direction} items-center justify-between bg-neutral-100`}>
            <div className="text-center px-8 py-16 md:p-8 md:w-1/2">
                <h2 className="uppercase text-xl font-semibold font-inter">{heading}</h2>
                <p className="text-sm font-gara my-2">{desc}</p>
                {link_name != null && <Link to={url} className="font-bold border-b mt-2 inline-block">{link_name}</Link>}
            </div>
            <img width={100} height={100} src={image} alt="banner" className="w-full object-cover md:max-w-1/2" loading="lazy" />
        </div>
    )
}

export default Banner