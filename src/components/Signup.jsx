import React from 'react';
import Image from '../assets/signup.svg';

const Signup = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='border-2 border-gray-300 p-4 rounded-md shadow-lg max-w-md mx-auto'>
                <div className='flex justify-center'>
                    <h1 className='text-2xl'>Sign up as a student</h1>
                </div>
                <div className='flex justify-center'>
                    <img className='w-[800px] h-[400px]' src={Image} alt="" />
                </div>
                <div>
                    <form className='space-y-4'>
                        <input className='w-full p-2 border-2 border-gray-300 rounded-md' type='text' placeholder='Full Name' required />
                        <input className='w-full p-2 border-2 border-gray-300 rounded-md' type='email' placeholder='Email' required />
                        <input className='w-full p-2 border-2 border-gray-300 rounded-md' type='password' placeholder='Password' required />
                        <input className='w-full p-2 border-2 border-gray-300 rounded-md' type='confirmpassword' placeholder='Confirm Password' required />

                        <button className='w-full p-2 bg-green-400 text-white rounded-md' type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
