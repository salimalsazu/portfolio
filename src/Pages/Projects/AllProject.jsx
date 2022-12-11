import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Projects from './Projects';

const AllProject = () => {

    //fetch 
    const { data: projects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch('https://server-salimalsazu.vercel.app/homeprojects');
            const data = await res.json();
            return data;
        }
    })

    // console.log(projects);

    return (
        <div className='grid grid-cols-1 gap-5'>

            {
                projects.map(project => <Projects project={project} key={project._id} ></Projects>)
            }

        </div>
    );
};

export default AllProject;