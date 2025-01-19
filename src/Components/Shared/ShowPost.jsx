import React, { useEffect } from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import useAxiosSecure from '../../Custom/Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import useAuth from '../../Custom/Hooks/useAuth';

const ShowPost = ({ post, refetch }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleUpvote = (id) => {
        const { email } = user;
        axiosSecure.put(`/update/post?id=${id}`, { email })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                }
            })
            .catch(err => {
                toast.error(err.code);
            });
    };


    return (
        <div className="rounded-md bg-base-100 max-w-2xl py-4 shadow">
            <div className='px-2'>
                <div className='flex items-end gap-3'>
                    <div className="avatar">
                        <div className="mask mask-squircle w-14">
                            <img src={post?.authorImage} />
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold'>{post?.authorName}</h1>
                        <div className='flex items-center gap-2 mt-1'>
                            <p className='text-sm'>{post?.currentDate}</p>
                            <p className='text-sm'><span>{post.currentTime}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-5 mt-3'>
                <h2 className='font-medium'>{post?.title}</h2>
                <h1 className='mt-1'>{post?.description}</h1>
            </div>
            <div className='px-5 mt-1'>
                {post?.tag && <h1>#{post?.tag}</h1>}
            </div>
            <div className='px-10 my-1'>
                {post?.postImage && (
                    <figure className='w-full'>
                        <img className='w-full rounded-md' src={post?.postImage} alt="photo" />
                    </figure>
                )}
            </div>
            <div className='mt-1 px-5 flex items-center justify-between'>
                <div className='flex gap-2'>
                    <span className='text-xs font-semibold badge-secondary px-2 py-1 rounded-md text-white'>
                        {post?.upVote} Up vote
                    </span>
                    <span className='text-xs font-semibold badge-secondary px-2 py-1 rounded-md text-white'>
                        {post?.downVote} Down vote
                    </span>
                </div>
                <div className='flex gap-2'>
                    {post?.comment && (
                        <span className='text-sm badge-secondary px-2 py-1 rounded-md text-white'>
                            {post?.comment} Upvote
                        </span>
                    )}
                    {post?.share && (
                        <span className='text-sm badge-secondary px-2 py-1 rounded-md text-white'>
                            {post?.share} Upvote
                        </span>
                    )}
                </div>
            </div>
            <div className="divider my-1 px-2"></div>
            <div className='px-5 pb-1 flex items-center justify-between'>
                <div className='flex gap-5'>
                    <button onClick={() => handleUpvote(post?._id)} className='flex items-center text-2xl'>
                        <BiLike />
                    </button>
                </div>
                <button className='flex items-center text-2xl'>
                    <BiDislike />
                </button>
                <button className='flex items-center text-2xl'>
                    <FaRegComment />
                </button>
                <button className='flex items-center text-2xl'>
                    <FaRegShareFromSquare />
                </button>
            </div>
        </div>
    );
};

export default ShowPost;