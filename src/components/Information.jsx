import React from 'react';
import Image from '../assets/maths.webp'


const Information = () => {
    return (
        <div className='max-w-[1240px] my-10 mx-auto  grid grid-cols-3'>
            <div className=' h-[200px] col-span-1 w-[50%]'>
                <img src={Image} alt="maths" />
            </div>
            <div className='h-[200px] col-span-2 '>
                <h1 className='text-2xl text-[green] '>What We Will Provide You</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nesciunt eaque quos laudantium soluta quo neque. Unde, distinctio id nulla vel quas iste voluptas eius ipsam eum natus ut quisquam hic sequi? Autem earum nostrum ullam quae, eaque blanditiis ipsa voluptatibus, quis vitae iure laudantium similique? Labore illo eveniet laboriosam enim eius, cumque eum veniam illum odit. Cum at repudiandae magni est soluta voluptas aut unde, nulla doloribus repellendus aperiam esse voluptate laboriosam quam. Illo dicta nobis voluptatum doloremque accusamus ex odio minus at quis sed facere totam, animi quam necessitatibus consequuntur eius vero corrupti, repellendus facilis, ab accusantium nulla.</p>
            </div>

            <div >

            </div>


        </div>
    )
}

export default Information