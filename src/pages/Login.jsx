import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../services/auth';
import { setCredenticals } from '../features/authSlice';

const Login = () => {
    const [data, setData] = useState({
        email: "", password: ""
    })


    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await login(data).unwrap(); 
            dispatch(setCredenticals({ token: res.token, user: res.user }))
            res.token && navigate("/")
        }catch(error){
            console.log(error);
            
        }
    }
    return (
        <>
            <div className='w-full h-screen grid place-items-center'>
                <div className='max-w-[350px] borders px-8 py-4 rounded-md w-full'>
                    <h1 className='font-semibold text-xl font-inter mt-4 mb-8'>Login Form</h1>
                    <form className='flex flex-col gap-6 w-full ' onSubmit={handleSubmit}>
                        <input type="email" placeholder='Email' className='borders p-2 rounded' name='email' value={data.email} onChange={handleChange} />
                        <input type="password" placeholder='Password' className='borders p-2 rounded' name='password' value={data.password} onChange={handleChange} />
                        <input type="submit" value="Submit" className={`borders p-2 rounded bg-black text-white ${isLoading && 'bg-gray-600'} `} disabled={isLoading} />
                    </form>
                    <p className='text-xs text-center my-4'>You don't have an Account? <Link to={'/register'}><span className='text-blue-500'>Register</span></Link></p>
                </div>
            </div>
        </>
    )
}

export default Login