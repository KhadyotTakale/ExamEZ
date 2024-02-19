import React from 'react';
import { ReactTyped } from 'react-typed';
import Information from './Information';
import Features from './Features';


const Banner = () => {
    return (
        <div>
            <div className='bg-[black] w-full py-[50px]'>
                <div className='max-w-[1240px] my-[100px] mx-auto text-center font-bold '>
                    <div className='text-xl md:text-3xl md:p-[24px] text-white' >
                        Learn With Us
                    </div>

                    <h2 className='text-white text-5xl md:text-[80px] p-[24px]'>
                        Solve With Us.
                    </h2>
                    <div className='text-[20px] md:text-[50px] md:p-[24px] text-green-600'>
                        Solve
                        <ReactTyped
                            className='p-3 text-red-600'
                            strings={['CBSE PYQS', 'JEE PYQS', 'SSC PYQS']}
                            typeSpeed={100}
                            loop={true}
                        />
                    </div>
                </div>

            </div>
            <Information />
            <Features />
        </div>
    )
}

export default Banner