import React from 'react';
import Achievement from '../Achievement/Achievement';
import AllBlogs from '../Blogs/AllBlogs';
import AllProject from '../Projects/AllProject';


const Home = () => {
    return (
        <div>
            <AllProject></AllProject>
            <AllBlogs></AllBlogs>
            <Achievement></Achievement>
        </div>
    );
};

export default Home;