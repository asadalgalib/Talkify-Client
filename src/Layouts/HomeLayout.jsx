import React from 'react';
import Banner from '../Components/Pages/Home/Banner';
import AllPosts from '../Components/Pages/Home/AllPosts';
import Tags from '../Components/Pages/Home/Tags';
import ShowAnnounce from '../Components/Pages/Home/ShowAnnounce';
import useAllPost from '../Custom/Hooks/useAllPost';
import { Helmet } from 'react-helmet';
import Join from '../Components/Pages/Home/Join';
import Pricing from '../Components/Pages/Home/Pricing';

const HomeLayout = () => {
    const [allPost, isAllPostLoading, refetch, setPostQuery] = useAllPost();

    const handleOnChange = e => {
        e.preventDefault();
        const data = e.target.find.value;;
        setPostQuery(data);
        refetch();
    };

    const handleSort = () => {
        setPostQuery('sort');
        refetch();
    }

    return (
        <div>
            <Helmet>
                <title>Talkify - Home</title>
            </Helmet>
            <Banner handleOnChange={handleOnChange}></Banner>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-start justify-center xl:px-28 lg:px-20 md:px-12 px-4 py-8 lg:py-16 min-h-screen'>
                <div className='lg:sticky lg:top-20'>
                    <Tags></Tags>
                    <ShowAnnounce></ShowAnnounce>
                </div>
                <div className='overflow-y-scroll max-h-screen rounded-md  flex-grow'>
                    <AllPosts
                        allPost={allPost}
                        isAllPostLoading={isAllPostLoading}
                        refetch={refetch}
                        handleSort={handleSort}
                    >
                    </AllPosts>
                </div>
            </div>
            <Join></Join>
            <Pricing></Pricing>
        </div>
    );
};

export default HomeLayout;