import React from 'react'
import Hero from '../components/commons/Hero'
import InputWithLabel from '../components/commons/InputWithLabel'
import { hero } from '../../public/assets'

const Contact = () => {
    return (
        <>
            <Hero
                image={hero}
                heading={"Contact US"}
                slogan={"Proudly Made in India – Quality You Can Trust!"}
                button={"Shop Now"}
                background={'bg-warm'}
            />
            <div className="max-w-[1200px] mx-auto my-8 px-4 md:flex gap-8 items-center">
                <div className='text-center md:text-left flex-1'>
                    <h1 className='text-2xl font-semibold uppercase my-2'>GET in touch with us</h1>
                    <p className='text-xs text-neutral-700 font-gara max-w-[400px] mx-auto md:mx-0'>Have questions or need assistance? We're here to help! Contact us for product inquiries, order support, or any concerns. Reach out via email, phone, or our contact form. Our team is dedicated to providing prompt and friendly service to ensure a seamless shopping experience. We look forward to assisting you!</p>
                    <div className='uppercase my-4'>
                        <h3 className='font-semibold'>office hours</h3>
                        <p className='text-xs my-1'>Mon - FRI 8am to 5pm</p>
                    </div>
                    <div className='uppercase my-4'>
                        <h3 className='font-semibold'>Email</h3>
                        <p className='text-xs my-1'>contact@moon.com</p>
                    </div>
                    <div className='uppercase my-4'>
                        <h3 className='font-semibold'>Phone</h3>
                        <p className='text-xs font-inter my-1'>+91 00000 00000</p>
                    </div>
                    <div className='uppercase my-4'>
                        <h3 className='font-semibold'>Location</h3>
                        <p className='text-xs my-1'>haridwar, Uttarakhand, India, 249408</p>
                    </div>
                </div>
                <div className='md:flex-1 max-w-[400px] md:max-w-full'>
                    <InputWithLabel
                        label={"Name"}
                        id={"name"}
                        placeholder={"Your name"}
                        type={"text"}
                    />

                    <InputWithLabel
                        label={"Email"}
                        id={"email"}
                        placeholder={"example@email.com"}
                        type={"email"}
                    />

                    <InputWithLabel
                        label={"Phone"}
                        id={"phone"}
                        placeholder={"+91 00000 00000"}
                        type={"phone"}
                    />
                    <div className='flex flex-col my-4 '>
                        <label htmlFor="message" className='font-semibold mb-1'>Message</label>
                        <textarea id="message" rows={4} className='border rounded resize-none' >
                        </textarea>
                    </div>
                    <button className='uppercase bg-warm text-white py-2 w-full text-center rounded my-6'>send message</button>
                </div>

            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100106.84977453438!2d78.03352383870086!3d29.952772958361013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee57c9%3A0x4e449176a640f5f3!2sHaridwar%2C%20Uttarakhand!5e1!3m2!1sen!2sin!4v1739721213200!5m2!1sen!2sin" width={100} height="450" className='w-full mt-20' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

export default Contact