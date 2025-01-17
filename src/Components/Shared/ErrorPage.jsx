import React from 'react';
import error from '../../assets/error.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <img src={error} className='h-[70vh]' alt="" />
                <Link to={'/'}><button className='px-6 py-2 bg-accent text-center font-semibold rounded-md text-white'>Go Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;