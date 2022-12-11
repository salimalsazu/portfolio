import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Hero = () => {

    const url = "https://drive.google.com/file/d/1cw-MeQudSPM8hopQWwaelvw7dfW-W9oW/view?usp=sharing"



    return (
        <div className='flex flex-col justify-center items-start' >
            <h1 className=' text-4xl lg:text-6xl font-extrabold text-white' ><Link to="/" >Salim Al Sazu</Link></h1>
            <p className='text-xl lg:text-2xl font-extrabold mt-1'>Web Application Developer</p>
            <div className='flex justify-center items-center mt-1' >
                <span className='mr-1 text-slate-400' > <MdLocationPin></MdLocationPin> </span>
                <p className='text-sm text-slate-400 font-light'> Dhaka, Bangladesh</p>
            </div>
            <p className='mt-8 text-slate-400' >Last one year i have gathered knowledge, build up my skills and made project on React.js, Node.js, Express.js and MongoDB. <br /> <br />

                I am also a part time bloger. In my spare time, i share my knowledge at <span className='underline text-white' >Dev.to</span> and <span className='underline text-white' >Medium</span> around the world.

            </p>

            <p className=' text-slate-400 mt-8' >You can also check my resume in here <button className='bg-yellow-500 text-gray-800 font-bold btn btn-xs' ><a href={url} target="_blank" >RESUME</a ></button> </p>
        </div >
    );
};

export default Hero;