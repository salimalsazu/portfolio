import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Blog from './Blog';

const AllBlogs = () => {

    //fetch 
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://server-salimalsazu.vercel.app/homeblogs');
            const data = await res.json();
            return data;
        }
    })

    console.log(blogs)

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5' >
            {
                blogs.map(blog => <Blog blog={blog} key={blog._id} ></Blog>)
            }
        </div>
    );
};

export default AllBlogs;
