import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {

    const { technology, title, time, videolink, detailslink } = blog;
    return (
        <div className='lg:mx-0 mx-5'>
            <div className="card bg-base-100 shadow-xl lg:hover:scale-125 lg:hover:transition-all ease-in-out hover:duration-500">
                <div className="card-body">
                    <h2 className="card-title">{technology}</h2>
                    <p>{time}</p>
                    <div>
                        <p className='text-2xl' >{title}</p>
                    </div>
                    <div className='flex gap-5 mt-5' >
                        <a href={videolink} target="_blank" className='btn btn-xs' >Video</a>
                        <a href={detailslink} target="_blank" className='btn btn-xs' >Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;