import React from 'react';
import { Outlet } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Navbar from '../Navvar/Navbar';

const MainLayout = () => {
    return (
        <div className='flex flex-col lg:flex-row' >
            <aside className='lg:h-screen lg:sticky top-10 lg:w-3/5 p-10' >
                <Hero></Hero>
                <Navbar></Navbar>
            </aside>
            <main className='mx-auto lg:w-4/5 flex flex-col justify-center items-center lg:mt-10 lg:p-20' >
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;