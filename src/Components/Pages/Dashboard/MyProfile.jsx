import React from 'react';
import useAuth from '../../../Custom/Hooks/useAuth';
import bronze from '../../../assets/bronze.png'
import gold from '../../../assets/gold.png'
import useRecentPost from '../../../Custom/Hooks/useRecentPost';
import { GrLike } from 'react-icons/gr';
import { BiDislike, BiLike, BiSolidLike } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import PostCard from '../../Shared/PostCard';

const MyProfile = () => {
    const { user } = useAuth()
    const [recentPost, isPostLoading] = useRecentPost();
    console.log(recentPost);

    if (isPostLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner text-accent"></span></div>
    }

    return (
        <div className='mb-8'>
            <div>
                <div className='lg:min-h-40 md:min-h-32 min-h-24 bg-accent'>

                </div>
                <div className=''>
                    <div className="avatar -mt-20 flex flex-col items-center justify-center">
                        <div className="lg:w-60 md:w-48 w-40 flex justify-center items-start rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row items-start justify-center gap-5 lg:gap-10 lg:mx-14 md:mx-8 mx-4 py-8'>
                <div className={` ${ recentPost.length > 0 ? "" : "hidden"}`}>
                    <div className='mb-5 bg-base-100 h-24 shadow rounded-md flex items-center justify-center'>
                        <h1 className='lg:text-3xl text-2xl font-semibold'>My Recent Posts</h1>
                    </div>
                    <div className='flex flex-col gap-5  mx-auto'>
                        {
                            recentPost.map(post => <PostCard key={post._id} post={post}></PostCard>)
                        }
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='mb-5 bg-base-100 h-24 shadow rounded-md flex flex-col items-center justify-center'>
                    <h1 className='lg:text-3xl text-2xl font-semibold'>{user?.displayName}</h1>
                    <p className='font-semibold'>{user?.email}</p>
                    </div>
                    <div className='bg-base-100 md:px-8 px-4 lg:py-8 py-4 rounded-md shadow'>
                        <div className='lg:flex text-start gap-5 items-center justify-center '>
                            <div>
                                <h1 className='lg:text-2xl text-xl font-semibold text-center text-neutral mt-10 lg:mt-0'>Achivment</h1>
                                <div className="divider"></div>
                                <div className='flex items-center justify-center gap-4'>
                                    <img src={bronze} className='w-[80px]' alt="Medel" />
                                    <img src={gold} className='w-[80px]' alt="Medel" />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-10'>
                            <ul className="timeline timeline-vertical">
                                <li>
                                    <hr className='bg-secondary' />
                                    <div className="timeline-start timeline-box bg-accent text-white">Registered user will get Bronze Medal</div>
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <hr className='bg-secondary' />
                                </li>
                                <li>
                                    <hr className='bg-secondary' />
                                    <div className="timeline-end timeline-box bg-accent text-white">Premium user will get Gold Medal</div>
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;