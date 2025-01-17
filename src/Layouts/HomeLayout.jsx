import React from 'react';
import Banner from '../Components/Pages/Home/Banner';
import AllPosts from '../Components/Pages/Home/AllPosts';

const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <AllPosts></AllPosts>
        </div>
    );
};

export default HomeLayout;