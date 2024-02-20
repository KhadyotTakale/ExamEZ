import React from 'react';
import Image from '../assets/pyqs.png';
import DoubtImage from '../assets/doubt.png';
import TopicImage from '../assets/topics.png';
import Video from '../assets/maths.mp4';



const Information = () => {
    return (
        <div className='max-w-[1240px]  mx-auto'>
            <div className=' h-[800px] col-span-1 w-[100%] py-2 flex justify-center'>
                <video width="1200" height="800" autoPlay loop muted playsInline style={{ pointerEvents: "none" }}>
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='h-[400px] col-span-2 '>
                <h1 className='text-4xl text-white flex justify-center font-Teko bg-blue-600'>What We Will Provide You</h1>

                <ul className='py-10 text-xl md:text-2xl space-y-4 flex flex-col md:flex-row justify-between'>
                    <li className='items-center py-4'>
                        <img className='bg-green-300 ' src={TopicImage} alt="PYQS" />
                        <div className='flex justify-center '>1. Topic Wise MCQS</div>
                    </li>
                    <li className='items-center'>
                        <img className='bg-yellow-300' src={Image} alt="PYQS" />
                        <div className='flex justify-center '>2. PYQS With Solutions</div>
                    </li>
                    <li className='items-center'>
                        <img className='bg-blue-300' src={DoubtImage} alt="PYQS" />
                        <div className='flex justify-center'>3. 1:1 Doubt Support</div>
                    </li>
                </ul>


            </div>




        </div>

    )
}

export default Information