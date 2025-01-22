import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/notFound.png'

const DataNotFound = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <img src={notFound} className='h-[60vh]' alt="" />
                <h1 className='lg:text-3xl text-2xl font-semibold text-neutral mb-4'>Data Not Found</h1>
                {/* <Link to={'/dashboard/user/addpost'}><button className='px-6 py-2 bg-accent text-center font-semibold rounded-md text-white'>Add First</button></Link> */}
            </div>
        </div>
    );
};

export default DataNotFound;