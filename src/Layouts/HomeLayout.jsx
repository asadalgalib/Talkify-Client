import React from 'react';
import Banner from '../Components/Pages/Home/Banner';
import AllPosts from '../Components/Pages/Home/AllPosts';

const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='xl:mx-28 lg:mx-20 mx-4 lg:my-10 my-5'>
                <div>
                    <AllPosts></AllPosts>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default HomeLayout;