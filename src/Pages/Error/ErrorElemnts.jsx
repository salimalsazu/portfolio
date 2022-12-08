import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElemnts = () => {

    let error = useRouteError();
    return (
        <div className='flex flex-col justify-center items-center h-screen text-red-600' >
            <p> {error.statusText || error.message} </p>
        </div>

    );
};

export default ErrorElemnts;