import React from 'react';
import useAllPost from '../../../Custom/Hooks/useAllPost';
import PostCard from '../../Shared/PostCard';

const AllPosts = () => {
    const [allPost,isAllPostLoading] = useAllPost();

    if (isAllPostLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner text-accent"></span></div>
    }
    return (
        <div className='flex flex-col gap-5'>
            {
                allPost?.map(post => <PostCard key={post._id} post={post}></PostCard>)
            }
        </div>
    );
};

export default AllPosts;