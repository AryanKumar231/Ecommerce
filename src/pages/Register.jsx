import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../services/auth'

const Register = () => {
    const [data, setData] = useState({
        username: "", email: "", password: ""
    })


    const [register, { isLoading }] = useRegisterMutation();


    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(data).unwrap();
        navigate("/login");
    }

    return (
        <>
            <div className='w-full h-screen grid place-items-center px-4'>
                <div className='max-w-[350px] borders px-8 py-4 rounded-md w-full'>
                    <h1 className='font-semibold text-xl font-inter mt-4 mb-8'>Register Form</h1>
                    <form className='flex flex-col gap-6 w-full ' onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" placeholder='Username' className='borders p-2 rounded' name='username' value={data.username} onChange={handleChange} />
                        <input type="email" placeholder='Email' className='borders p-2 rounded' name='email' value={data.email} onChange={handleChange} />
                        <input type="password" placeholder='Password' className='borders p-2 rounded' name='password' value={data.password} onChange={handleChange} />
                        <input type="submit" value="Submit" className={`borders p-2 rounded bg-black text-white ${isLoading && 'bg-gray-600'} `} disabled={isLoading} />
                    </form>
                    <p className='text-xs text-center my-4'>You have an Account? <Link to={'/login'}><span className='text-blue-500'>Login</span></Link></p>
                </div>
            </div>
        </>
    )
}

export default Register