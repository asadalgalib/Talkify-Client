import React from 'react';
import Banner from '../Components/Pages/Home/Banner';
import AllPosts from '../Components/Pages/Home/AllPosts';
import Tags from '../Components/Pages/Home/Tags';

const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-start justify-center xl:px-28 lg:px-20 md:px-12 px-4 py-8 lg:py-16 min-h-screen'>
                <div className='lg:sticky lg:top-20'>
                    <Tags></Tags>
                </div>
                <div className='overflow-y-auto flex-grow'>
                    <AllPosts></AllPosts>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;