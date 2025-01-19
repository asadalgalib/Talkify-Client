import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../Custom/Hooks/useAxiosPublic';
import { BiDislike, BiLike } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import useAuth from '../../../Custom/Hooks/useAuth';
import useAxiosSecure from '../../../Custom/Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const PostDetails = () => {
    const [hide, setHide] = useState(true)
    console.log(hide);
    const { id } = useParams();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // -----------------------------------------------------------------------------------------

    const { data: post, isLoading, refetch, error } = useQuery({
        queryKey: ['post', id],
        queryFn: async () => {
            const res = await axiosPublic(`/post/${id}`);
            return res.data;
        }
    });

    // ------------------------------------------------------------------------------------

    const handleUpvote = (id) => {
        if (!user) {
            return toast.error('Please Login first');
        }
        const { email } = user;

        if (post?.upVoteEmail) {
            if (post?.upVoteEmail.includes(email)) {
                return toast.warning('You have already UP voted')
            }
        }

        axiosSecure.put(`/upVote/post?id=${id}`, { email })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    console.log(res.data);
                    toast.success('Thanks for UP Vote')
                    refetch();
                }
            })
            .catch(err => {
                toast.error(err.code);
            });
    };

    const handleDownvote = (id) => {
        if (!user) {
            return toast.error('Please Login first');
        }
        const { email } = user;
        if (post?.downVote) {
            if (post?.downVoteEmail.includes(email)) {
                return toast.warning('You have already Down voted');
            }
        }

        axiosSecure.put(`/downVote/post?id=${id}`, { email })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    console.log(res.data);
                    toast.success('Down vote submited');
                    refetch();
                }
            })
            .catch(err => {
                toast.error(err.code);
            });
    };

    // ------------------------------------------------------------------------------------

    const { data: comment, refetch : commentRefech} = useQuery({
        queryKey: ['comment',post?._id],
        queryFn : async ()=>{
            const res = await axiosPublic(`/comment/${post?._id}`);
            return res.data;
        }
    });
    console.log(comment);

    // -------------------------------------------------------------------------------------

    const onSubmit = (data) => {
        if (!user) {
            return toast.error('Please Login first');
        }
        const { email, displayName: name, photoURL: photo } = user;
        const comment = data.comment;
        const postId = post?._id
        console.log({ email, name, photo, comment, postId });

        axiosSecure.post('/comment', { email, name, photo, comment, postId })
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Comment Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    commentRefech();
                    reset();
                }
            })
            .catch(err => {
                toast.error(err.code);
            })
    }

    // -------------------------------------------------------------------------

   

    // -------------------------------------------------------------------------

    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner text-accent"></span></div>
    }
    return (
        <div className='max-w-2xl lg:mx-auto md:md:mx-8 mx-4 lg:my-14 my-8 p-4 bg-base-100 rounded-md shadow'>
            <div className="mt-5">
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
                            {post?.upVote} Like
                        </span>
                        <span className='text-xs font-semibold badge-secondary px-2 py-1 rounded-md text-white'>
                            {post?.downVote} Dislike
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
                <div className="divider my-[2px] px-2"></div>
                <div className='px-5 pb-1 flex items-center justify-between gap-2'>
                    <div onClick={() => handleUpvote(post?._id)} className='w-full flex items-center justify-center py-2 rounded hover:bg-slate-200'>
                        <button className='flex items-center lg:text-3xl text-2xl'>
                            <BiLike />
                        </button>
                    </div>
                    <div onClick={() => handleDownvote(post?._id)} className='w-full flex items-center justify-center py-2 rounded hover:bg-slate-200'>
                        <button className='flex items-center lg:text-3xl text-2xl'>
                            <BiDislike />
                        </button>
                    </div>
                    <div className='w-full flex items-center justify-center py-2 rounded hover:bg-slate-200'>
                        <button className='flex items-center lg:text-3xl text-2xl'>
                            <FaRegComment />
                        </button>
                    </div>
                    <div className='w-full flex items-center justify-center py-2 rounded hover:bg-slate-200'>
                        <button className='flex items-center lg:text-3xl text-2xl'>
                            <FaRegShareFromSquare />
                        </button>
                    </div>
                </div>
                <div className={`mt-2}`}>
                    <div className="divider my-[2px] px-2"></div>
                    <div className='mt-2'>
                        <h1 className='lg:text-2xl text-xl  font-semibold text-neutral text-center'>Make a Comment</h1>
                    </div>
                    <form className='max-w-xl mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="input input-bordered  flex items-center gap-2">
                                <input type="text" {...register('comment', {
                                    required: 'Comment is required', minLength: { value: 2 }
                                })}
                                    className="grow bg-base-100" placeholder="comment" />
                            </label>
                        </div>
                        <div className="form-control mt-5">
                            <button className="bg-secondary font-semibold w-full py-3 text-white text-lg rounded-md">Post</button>
                        </div>
                        <div className='my-1'>
                            {errors.comment && <span className='flex text-red-500'>Tag is required</span>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;