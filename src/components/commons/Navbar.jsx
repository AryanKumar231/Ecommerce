import React, { useState, memo, useCallback, useEffect } from 'react'
import { FaBarsStaggered, FiSearch, LuShoppingCart, LuCircleUserRound, IoClose } from '../../utils/icons_constant';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../../utils/Constant';
import { useSelector } from 'react-redux';





const Menu = ({ item }) => {
    // console.log(item.path);

    return (<>
        <li className={`pb-1 borders-b md:border-none ${item.value === "Profile" ? 'md:hidden' : ''}`} aria-label={item.value} ><Link to={item.path}>{item.value}</Link></li>
    </>)
}



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [searchShow, setSearchShow] = useState(false);
    const menu = useCallback((item, index) => (
        <Menu key={index} item={item} border={true} />
    ), [])

    const { isAuthenticated } = useSelector(state => state.auth)

    return (
        <>
            {/* mobile navbar */}
            <nav className="md:hidden flex justify-between px-8 items-center py-4 overflow-x-hidden borders-b">

                <FaBarsStaggered className='cursor-pointer text-lg' onClick={() => setOpen(true)} />
                {
                    !searchShow ? (<Link to="/">
                        <div className="flex items-center gap-1">
                            <img src={"https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/tcfnrmg5v8copqi0jrwk"} alt="logo" width={"40px"} height={"40px"} loading='lazy' />
                            <span className='uppercase font-inter text-neutral-700 font-bold text-xl'>Moon.</span>
                        </div>
                    </Link>)
                        :
                        (<div className='flex items-center'>
                            <input type="text" placeholder='Search' className='border-b border-gray-300 py-[6px] px-2 ' />
                        </div>)
                }
                <div className='flex gap-4'>
                    <Link to={'/cart'}><LuShoppingCart className='text-lg' /></Link>
                    <FiSearch className='text-lg' onClick={() => setSearchShow(!searchShow)} />
                </div>
                <div className={`fixed top-0 h-full w-72 bg-white z-50 ${open ? 'left-0' : '-left-full'} transition-all borders shadow duration-300`}>
                    <ul className='flex flex-col gap-6 mt-20 mx-12 h-full'>

                        {
                            MENU_ITEMS.map(menu)
                        }
                    </ul>
                    <IoClose className='cursor-pointer text-lg absolute top-6 right-6' onClick={() => setOpen(false)} />
                </div>

            </nav>



            {/* web navbar */}

            <div className='borders-b'>
                <nav className="md:flex max-w-[1200px] mx-auto justify-between px-8 items-center py-4 hidden ">
                    <Link to="/">
                        <div className="flex items-center gap-1">
                            <img src={"https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/tcfnrmg5v8copqi0jrwk"} alt="logo" width={"40px"} height={"40px"} loading='lazy' />
                            <span className='uppercase font-inter text-green font-bold text-xl'>Moon.</span>
                        </div>
                    </Link>
                    {
                        searchShow ? (<div className='flex items-center max-w-[500px] w-full'>
                            <input type="text" placeholder='Search' className='w-full py-[4.2px] px-2 focus:outline-none border-b border-gray-200 text-neutral-600' />
                        </div>)
                            :
                            (<ul className='flex gap-8'>
                                {
                                    MENU_ITEMS.map(menu)
                                }
                            </ul>)
                    }
                    <div className='flex gap-6 relative'>
                        <Link to={isAuthenticated ? '/profile' : '/login'} ><LuCircleUserRound className='text-lg' /></Link>
                        <Link to={'/cart'}><LuShoppingCart className='text-lg' /></Link>
                        <FiSearch className='text-lg' onClick={() => setSearchShow(!searchShow)} />

                    </div>
                </nav>
            </div>
        </>
    )
}

export default memo(Navbar)