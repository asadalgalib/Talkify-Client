import React from 'react';
import imgameOne from '../../../assets/positive-charming-friendly-man-with-moustache-beard-stylish-round-glasses-pointing-upper-right-corner-with-finger-gun-gestures-smiling-joyfully-being-great-mood.png';
import { Link } from 'react-router-dom';

const Join = () => {
    return (
        <div className='xl:px-28 lg:px-20 md:px-12 px-4 '>
            <div className='lg:flex flex-row-reverse justify-center bg-base-100'>
                <div className='flex flex-col items-start justify-center lg:w-1/2 bg-rose-600 px-2 py-4 lg:px-6 '>
                    <h1 className='text-2xl lg:text-4xl font-semibold text-white'>Join US Today!</h1>
                    <p className='text-white mt-5'>Talk about anything that's on your mind and see what others think. As a guest to our forum you are only able to view posts. When you register with the Talkify forum you can join in with topics, start new topics and generally be a part of the first level of our community.</p>
                    <div className='flex items-center justify-end lg:justify-start '>
                        <Link to={'/joinus/login'} className='text-white border-none mt-10 rounded-md px-4 py-2 bg-secondary font-semibold'>Join Now</Link>
                    </div>
                </div>
                <div className='mt-10 lg:mt-0 h-full lg:w-1/2 flex items-center justify-center'>
                    <img src={imgameOne} className='min-w-[320px] lg:w-full' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Join;