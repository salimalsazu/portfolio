import React from 'react';
import { Outlet } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Navbar from '../Navvar/Navbar';

const MainLayout = () => {
    return (
        <div className='flex' >
            <aside className='h-screen lg:sticky top-20 w-3/5 p-10' >
                <Hero></Hero>
                <Navbar></Navbar>
            </aside>
            <main className='mx-auto w-4/5 flex flex-col justify-center items-center mt-20 p-20' >
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;