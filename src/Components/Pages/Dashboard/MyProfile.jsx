import React from 'react';
import useAuth from '../../../Custom/Hooks/useAuth';
import bronze from '../../../assets/bronze.png'
import gold from '../../../assets/gold.png'

const MyProfile = () => {
    const { user } = useAuth()
    return (
        <div className='relative mb-12'>
            <div className='lg:min-h-60 md:min-h-62 min-h-40 bg-accent'>
                
            </div>
            <div className=''>
                <div className="avatar -mt-20 flex flex-col items-center justify-center">
                    <div className="lg:w-60 md:w-48 w-40 flex justify-center items-start rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <div className=' bg-base-100 mt-5 lg:px-14 md:px-8 px-4 lg:mx-14 md:mx-8 mx-4 lg:py-16 md:py-10 py-8 rounded-md'>
                    <div className='lg:flex text-start gap-5 items-center justify-around '>
                        <div className=''>
                            <h1 className='lg:text-2xl text-xl font-semibold text-center text-neutral'>My Info</h1>
                            <div className="divider"></div>
                            <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold text-center text-neutral'>{user?.displayName}</h2>
                            <p className='text-lg font-medium text-center'>{user?.email}</p>
                        </div>
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
                        <ul className="timeline timeline-vertical xl:timeline-horizontal">
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
    );
};

export default MyProfile;