import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleAchievment from './SingleAchievment';

const Achievement = () => {

    //fetch 
    const { data: achievments = [] } = useQuery({
        queryKey: ['achievments'],
        queryFn: async () => {
            const res = await fetch('https://server-salimalsazu.vercel.app/homeachievment');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='grid grid-cols-1 mt-10' >

            {
                achievments.map(achievment => <SingleAchievment achievment={achievment} key={achievments._id} ></SingleAchievment>)
            }

        </div>
    );
};

export default Achievement;