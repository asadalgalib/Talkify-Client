import React from 'react';

const Banner = () => {

    const handleSearch = (e) => {
        e.preventDefault()
    }
    return (
        <div className='lg:min-h-[75vh] md:min-h-[70vh] min-h-[60vh] xl:px-28 lg:px-20 px-4 bg-accent flex flex-col
         items-center justify-center'>
            <div className='text-center'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-semibold text-white'>Welcome to <span>Talkify</span> Forum</h1>
                <p className='lg:text-2xl text-xl md:mt-1 text-white'><i>The most popular forum on the internet!</i></p>
                <form onClick={handleSearch}>
                    <div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input py-[10px] border-none lg:rounded-l-md lg:rounded-r-none w-full max-w-md mt-4"
                        />
                        <button
                            className='bg-secondary mt-2 lg:mt-0 pl-6 pr-6 lg:pl-2 lg:pr-8 py-2 md:py-[10px] rounded-md lg:rounded-l-none
                            font-semibold text-neutral'
                        >Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Banner;