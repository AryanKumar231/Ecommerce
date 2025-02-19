import React, { useCallback } from 'react'

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, IoIosArrowRoundForward } from "../../utils/icons_constant"
import { lightLogo } from '../../../public/assets'



const FooterMenu = ({ name, links }) => {
    const link=useCallback((link, index) => (<li key={index}>{link}</li>),[])
    return (
        <div>
            <h3 className='text-lg mt-6 lg:mt-0 mb-4 uppercase font-semibold'>{name}</h3>
            <ul className='uppercase text-xs flex flex-col gap-2'>
                {
                    links.map(link)
                }
            </ul>
        </div>
    )
}

const icons = [FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub];

const Footer = () => {
    const footerIcons=useCallback((Icon, index) => (<li key={index} className='cursor-pointer hover:text-white transition ease-in-out duration-200'><Icon /></li>), [])
    return (
        <>
            {/* newsletter */}

            <div className="mt-12 md:mt-24 bg-neutral-200 md:py-20 text-center p-8">
                <span className="font-semibold text-sm text-neutral-700 md:text-base">Subscribe our newsletter</span>
                <h3 className="text-xl font-semibold uppercase my-2 text-neutral-700 md:text-3xl">For News, collections, & more</h3>
                <input type="text" placeholder="Enter your email address" className="border-b w-full max-w-[350px] mx-auto text-center pb-1 mt-4" />
                <button className="uppercase py-2 px-6 border block mx-auto mt-8 hover:bg-brown hover:border-transparent hover:text-white transition ease-in-out duration-200">Subscribe</button>
            </div>

            <footer className="bg-warm text-neutral-500 p-8 lg:pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
                    <div className='max-w-[400px]'>
                        <div className="flex items-center gap-2">
                            <img src={lightLogo} width={"40px"} height={"40px"} alt="logo" loading='lazy' />
                            <span className='text-2xl font-bold text-gara'>Moon.</span>
                        </div>
                        <p className='text-xs leading-height my-3'>At Moon, we bring you high-quality products crafted with excellence and passion. Rooted in Indian heritage and powered by modern innovation, we deliver world-class shopping experiences with trust, authenticity, and unmatched customer satisfaction. Proudly Made in India! 🇮🇳🚀</p>
                        <button className='uppercase py-2 px-6 border border-neutral-500 my-4 md:mt-8 text-neutral-500 bg-transparent flex items-center gap-1 cursor-pointer group text-xs '>get started <IoIosArrowRoundForward className='text-xl group-hover:translate-x-1 transition-all ease-in-out duration-200' /></button>


                        <ul className='flex gap-4 mt-8'>
                            {
                                icons.map(footerIcons)
                            }
                        </ul>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-baseline">
                        <FooterMenu name='Company' links={['Home', 'About', 'Careers', 'Shop', 'Contact']} />
                        <FooterMenu name='Legal' links={['Terms & Conditions', 'Privacy Policy', 'Return Policy', 'Cookie Policy']} />
                        <FooterMenu name='Support' links={['Blog', 'News', 'Press', 'FAQ']} />
                    </div>

                </div>
                <div className='text-center pt-8 mt-8  border-t'>
                    <span>Copyright &copy; 2025 Moon | All Rights Reserved</span>
                </div>
            </footer>
        </>
    )
}

export default Footer