import React from 'react';

const Banner = () => {

   
    return (
        <div className='lg:min-h-[75vh] bg-custom-hero bg-fixed bg-cover md:min-h-[70vh] min-h-[60vh] xl:px-28 lg:px-20 px-4 bg-accent flex flex-col
         items-center justify-center'>
            <div className='text-center'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-semibold text-white'>Welcome to Talkify</h1>
                <p className='lg:text-2xl text-xl md:mt-1 text-white'><i>The most popular forum on the internet!</i></p>
                <div className='mt-4'>
                    <label className="input flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Banner;