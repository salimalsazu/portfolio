import React from 'react';
import { BsFillDisplayFill } from 'react-icons/bs'


const SingleAchievment = ({ achievment }) => {

    const { course, coursetitle, duration } = achievment;

    console.log(achievment);
    return (
        <div className='card lg:px-14 py-4 hover:text-slate-500 ' >
            <div className='flex justify-center items-center lg:mx-0 mx-5' >
                <div>
                    <BsFillDisplayFill className='text-9xl mr-10 text-[#151515]' ></BsFillDisplayFill>
                </div>
                <div className=' flex flex-col' >
                    <h1 className="card-title">{course}</h1>
                    <h3 className='text-slate-400 text-sm mt-1' >{coursetitle}</h3>
                    <p className='text-slate-400 text-sm mt-1' >{duration}</p>
                </div >
            </div >
        </div >
    );
};

export default SingleAchievment;