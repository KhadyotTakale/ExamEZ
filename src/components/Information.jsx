import React from 'react';
import Image from '../assets/maths.webp';
import Video from '../assets/maths.mp4';


const Information = () => {
    return (
        <div className='max-w-[1240px] my-10 mx-auto'>
            <div className=' h-[800px] col-span-1 w-[100%] py-2 flex justify-center'>
                <video width="800" height="800" autoPlay loop muted playsInline style={{ pointerEvents: "none" }}>
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='h-[200px] col-span-2 '>
                <h1 className='text-4xl text-white flex justify-center bg-blue-600'>What We Will Provide You</h1>
                <p className='py-5 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse aut quisquam, eveniet, voluptatum voluptatem autem illo ipsum dolor in nisi perferendis voluptate dolores. Totam fugit similique atque dolore repellat. Pariatur tempora, vitae consectetur voluptatem blanditiis a? Magni aperiam nam aspernatur doloribus possimus quaerat, accusamus eius velit molestiae nesciunt iure nobis?</p>
            </div>




        </div>

    )
}

export default Information