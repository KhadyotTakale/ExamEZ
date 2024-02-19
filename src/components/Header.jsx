import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-[black] p-4'>
            <div className='max-w-[1240px]  py-[12px]  items-center flex justify-between mx-auto '>
                <div className='text-3xl font-bold text-white hover:text-red-500'>
                    ExamEz
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />


                }
                <ul className='hidden md:flex text-white gap-10'>
                    <Link to="/" className='hover:text-red-500' >Home</Link>
                    <li className='hover:text-red-500'>About</li>
                    <Link to="/login" className='hover:text-red-500'>Login</Link>
                    <li className='hover:text-red-500'>Contact</li>
                </ul>
                {/* Responsive Menu */}
                <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black  top-[92px]
                        ${toggle ? 'left-[0]' : 'left-[-100%]'}   
                    `}>
                    <li className='p-5'>Home</li>
                    <li className='p-5'>About</li>
                    <li className='p-5'>Login</li>
                    <li className='p-5'>Contact</li>
                </ul>


            </div>
        </div >
    )
}

export default Header