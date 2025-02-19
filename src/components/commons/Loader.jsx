import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-screen grid place-items-center'>
        <img width={100} height={100} src={"https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/djvdxwq4h8c5uoajcab4"} alt="loader" loading='lazy'/>
    </div>
  )
}

export default Loader