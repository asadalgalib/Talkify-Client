import React from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { FaRegShareFromSquare } from 'react-icons/fa6';

const PostCard = ({ post }) => {
    return (
        <div className="rounded-md bg-base-100 max-w-xl py-2 shadow">
            <div className='px-2'>
                <div className='flex items-end gap-3'>
                    <div className="avatar">
                        <div className="mask mask-squircle w-14">
                            <img src={post?.authorImage} />
                        </div>
                    </div>
                    <div>
                        <div><h1 className='font-semibold'>{post?.authorName}</h1></div>
                        <div className='flex items-center gap-2 mt-1'>
                            <p className='text-sm'>{post?.currentDate}</p>
                            <p className='text-sm'>{post?.currentTime}</p>
                        </div>
                    </div>
                </div>
                <div>
                    {/* date */}
                </div>
            </div>
            <div className='px-2 mt-3'>
                <h2 className='font-medium'>{post?.title}</h2>
                {
                    post?.description && <h2 className='text-wrap mt-1'>{post?.description}</h2>
                }
            </div>
            <div className='px-2'>
                {
                    post?.tag && <h1><span className="font-semibold"> Tag :</span> {post?.tag}</h1>
                }
            </div>
            <div>
                {
                    post?.postImage &&
                    <figure className=' w-full'>
                        <img className='w-full'
                            src={post?.postImage}
                            alt="photo" />
                    </figure>
                }
            </div>
            <div className='mt-2 px-2 flex items-center justify-between'>
                <div className='flex gap-2'>
                    <span
                        className='text-sm badge-secondary px-2 py-1 rounded-md text-white'>
                        {post?.upVote} Up vote
                    </span>
                    <span
                        className='text-sm badge-secondary px-2 py-1 rounded-md text-white'>
                        {post?.downVote} Down vote
                    </span>
                </div>
                <div className='flex gap-2'>
                    {
                        post?.comment && <span
                            className='text-sm badge-secondary px-2 py-1 rounded-md text-white'>
                            {post?.upVote} Upvote
                        </span>
                    }
                    {
                        post?.share && <span
                            className='text-sm badge-secondary px-2 py-1 rounded-md text-white'>
                            {post?.share} Upvote
                        </span>
                    }
                </div>
            </div>
            <div className="divider my-1 px-2"></div>
            <div className='px-5 pb-1 flex items-center justify-between'>
                <div className='flex gap-5'>
                    <div >
                        <button className='flex items-center text-2xl'>
                            <BiLike />
                        </button>
                    </div>
                </div>
                <div>
                    <button className='flex items-center text-2xl'>
                        <BiDislike />
                    </button>
                </div>
                <div>
                    <button className='flex items-center text-2xl'>
                        <FaRegComment />
                    </button>
                </div>
                <div>
                    <button className='flex items-center text-2xl'>
                        <FaRegShareFromSquare />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;