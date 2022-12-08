import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl hover:scale-125 hover:transition-all">
                <div className="card-body">
                    <h2 className="card-title">Projects Name:</h2>
                    <div className='flex gap-2 text-sm' >
                        <Link>Live Site </Link> <span>||</span>
                        <Link> Client Side </Link> <span>||</span>
                        <Link> Server Side </Link>
                    </div>
                    <div>
                        <h1 className='font-bold' >Features:</h1>
                        <div className='text-xs text-slate-400 flex flex-col gap-2 mt-3 ' >
                            <li>It's an ad-classified marketplace people can buy and sell their products.</li>
                            <li>Admin can see his Buyers and Sellers List.</li>
                            <li>Buyer can book a product and pay later also he can add a product to his wishlist.</li>
                        </div>
                        <div className='mt-3' >
                            <h1 className='font-bold' >Technologies:</h1>
                            <p className='text-xs text-slate-400 mt-3' >React.js, React Router Dom, React Hook, React Query, Axios, Firebase, Tailwind CSS, Daisy UI, Node.js, Express.js, MongoDB, JWT, Env, Vercel.</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Projects; <h1>This is Projects layout</h1>