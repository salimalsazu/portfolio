import React from 'react';
import { MdLocationPin } from 'react-icons/md';

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-start' >
            <h1 className='text-6xl font-extrabold text-white' >Salim Al Sazu</h1>
            <p className='text-2xl font-extrabold mt-2'>Web Application Developer</p>
            <div className='flex justify-center items-center mt-2' >
                <span className='mr-1 text-slate-400' > <MdLocationPin></MdLocationPin> </span>
                <p className='text-sm text-slate-400 font-light'> Dhaka, Bangladesh</p>
            </div>
            <p className='mt-10 text-slate-400' >Last one year i have gathered knowledge, build up my skills and made project on React.js, Node.js, Express.js and MongoDB. <br /> <br />

                I am a bloger, i share my knowledge at <span className='underline text-white' >Dev.to</span> and <span className='underline text-white' >Medium</span> around the world.

            </p>
        </div >
    );
};

export default Hero;