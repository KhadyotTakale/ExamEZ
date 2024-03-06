import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-[white] p-4'>
            <div className='max-w-[1240px]  py-[12px]  items-center flex justify-between mx-auto '>
                <div className='text-3xl font-bold  text-black hover:text-red-500'>
                    ExamEz
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-black text-2xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-black text-2xl md:hidden block' />
                }
                <ul className='hidden md:flex gap-10 text-black'>
                    <Link to="/" className='hover:text-red-500' >Home</Link>

                    <Link to="/login" className='hover:text-red-500'>Login</Link>
                    <Link to="/signup" className='hover:text-red-500'>SignUp</Link>
                    <Link to="/contact" className='hover:text-red-500'>Contact</Link>

                </ul>
                {/* Responsive Menu */}
                <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] flex flex-col items-start
                    ${toggle ? 'left-[0]' : 'left-[-100%]'} `}>
                    <Link to="/" className='p-5 block w-full text-left'>Home</Link>
                    <Link to="/login" className='p-5 block w-full text-left'>Login</Link>
                    <Link to="/signup" className='p-5 block w-full text-left'>SignUp</Link>
                    <Link to="/contact" className='p-5 block w-full text-left'>Contact</Link>
                </ul>
            </div>
        </div >
    )
}

export default Header
