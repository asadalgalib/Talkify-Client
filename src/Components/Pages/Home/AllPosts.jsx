import React from 'react';;
import ShowPost from '../../Shared/ShowPost';

const AllPosts = ({ allPost,refetch, isAllPostLoading, handleSort}) => {

    if (isAllPostLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner text-accent"></span></div>
    }
    return (
        <div className=''>
            <div className='w-full mx-auto flex items-center justify-between bg-base-100 mb-5 lg:py-10 py-5 lg:px-12 px-5 shadow rounded-md'>
                <div>
                    <h1 className='lg:text-3xl text-2xl font-semibold text-neutral'>All Posts</h1>
                </div>
                <div>
                    <button onClick={handleSort} className='bg-secondary px-4 py-2 rounded-md font-semibold text-white'>Popural</button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                {
                    allPost?.map(post => <ShowPost key={post._id} refetch={refetch} post={post}></ShowPost>)
                }
            </div>
        </div>
    );
};

export default AllPosts;