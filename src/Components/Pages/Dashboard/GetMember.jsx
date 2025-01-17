import React from 'react';

const GetMember = () => {
    return (
        <div className='xl:px-28 lg:px-20 md:px-14 px-8 min-h-screen grid grid-cols-1 items-center justify-center rounded-md bg-base-100 p-4'>
            <div className='h-[600px] w-full bg-custom-member bg-cover bg-center xl:p-32 lg:p-20 md:p-12 p-8'>
                <div className='hero-overlay bg-opacity-10 flex flex-col items-center justify-center rounded-md text-white'>
                    <h1 className=' text-4xl text-center font-semibold'>Please become a Member</h1>
                    <p className='mt-2'><i>Only five you can post as a free user</i></p>
                    <p className='font-semibold text-lg'>You have reached the posting limit.</p>
                    <button className='bg-secondary px-4 py-2 rounded-md text-white font-semibold mt-5'>Get Membership</button>
                </div>
            </div>
        </div>
    );
};

export default GetMember;