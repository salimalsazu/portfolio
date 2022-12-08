import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className='text-white mt-20 ' >
            <ul className='flex flex-col gap-5'>
                <Link to="/projects" className='flex items-center text-xs tracking-[7px] uppercase'> <span className='mr-5'> <BsArrowRight></BsArrowRight> </span> Projects </Link>
                <Link to="/blogs" className='flex items-center text-xs tracking-[7px] uppercase'> <span className='mr-5'> <BsArrowRight></BsArrowRight> </span> Blogs </Link>
                <Link to="/achivements" className='flex items-center text-xs tracking-[7px] uppercase'> <span className='mr-5'> <BsArrowRight></BsArrowRight> </span> Achievements </Link>

            </ul>
        </div>
    );
};

export default Navbar;