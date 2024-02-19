import React from 'react';

const LoginPage = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-black'>
            <div className='flex flex-col items-center justify-center border border-red bg-white p-8 rounded-md w-1/2'>
                <h1 className='text-2xl font-bold mb-8'>Login Page</h1>
                <button className='bg-blue-500 text-white w-full px-4 py-2 rounded-md mb-4'>Login as a Student</button>
                <button className='bg-green-500 text-white w-full px-4 py-2 rounded-md'>Login as a Tutor</button>
            </div>
        </div>
    );
}

export default LoginPage;
