import React from 'react';
import useAllPost from '../../../Custom/Hooks/useAllPost';
import PostCard from '../../Shared/PostCard';

const AllPosts = () => {
    const [allPost, isAllPostLoading, refetch] = useAllPost();

    if (isAllPostLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner text-accent"></span></div>
    }
    return (
        <div className='xl:px-28 lg:px-20 md:px-12 px-4 py-5 lg:py-10'>
            <div className='max-w-2xl mx-auto flex items-center justify-between bg-base-100 mb-5 lg:my-10 lg:py-10 py-5 lg:px-12 px-5 shadow rounded-md'>
                <div>
                    <h1 className='lg:text-3xl text-2xl font-semibold text-neutral'>All Posts</h1>
                </div>
                <div>
                    <button className='bg-secondary px-4 py-2 rounded-md font-semibold text-white'>Sort</button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                {
                    allPost?.map(post => <PostCard key={post._id} refetch={refetch} post={post}></PostCard>)
                }
            </div>
        </div>
    );
};

export default AllPosts;