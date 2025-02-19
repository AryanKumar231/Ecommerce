import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <Link to="/shop/tshirt">
            <div className="group transition-all ease-in-out cursor-pointer" key={product.id} >
                <div className="overflow-hidden w-full">
                    <img width={100} height={"208px"} src={product.image} alt={product.name} className="h-52 w-full object-cover borders group-hover:scale-120 transition-all ease-in-out duration-200" loading="lazy" />
                </div>
                <div>
                    <h3 className="mt-2 font-semibold text-neutral-800 font-inter text-base sm:text-md line-clamp-1 uppercase">{product.name}</h3>
                    <div className="flex items-center gap-4">
                        <span className="font-bold ">${product.price}</span>
                        <strike className="font-bold text-sm text-neutral-600">${((product.price) / (1 - product.discount)).toFixed(2)}</strike>
                    </div>
                    <p className="text-sm line-clamp-2 font-gara my-2">{product.description}</p>
                    <button className="borders w-full py-2 mt-4 group-hover:bg-beige group-hover:text-white transition-all ease-in-out duration-200 uppercase">Add to cart</button>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard