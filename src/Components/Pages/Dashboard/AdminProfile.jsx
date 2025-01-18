import React from 'react';
import useAuth from '../../../Custom/Hooks/useAuth';
import useAllPost from '../../../Custom/Hooks/useAllPost';
import { MdEventNote } from 'react-icons/md';
import useUserData from '../../../Custom/Hooks/useUserData';
import { PiUsersFourFill } from 'react-icons/pi';
import { FaRegComment } from 'react-icons/fa';
import { IoMdWarning } from 'react-icons/io';
import PiChart from './PiChart';
import { FaDiamond } from 'react-icons/fa6';

const AdminProfile = () => {
    const { user } = useAuth();
    const [allPost] = useAllPost()
    const [userData] = useUserData()
    console.log(allPost);
    const data = [{ name: "User", value: userData?.length }, { name: 'Posts', value: allPost?.length },
        { name: 'Reports', value: allPost?.length }, { name: 'Comments', value: allPost?.length }, ]
    return (
        <div className='lg:my-14 md:my-8 my-4 min-h-screen lg:mx-14 md:mx-8 mx-4'>
            <div className='lg:py-10 py-5 lg:px-12 px-5 flex flex-col-reverse gap-5 lg:flex-row items-center justify-between bg-base-100 rounded-md shadow'>
                <div className='text-center lg:text-left text-neutral'>
                    <h1 className='lg:text-3xl text-2xl font-semibold '>Hey! {user?.displayName} Welcome Back</h1>
                    <p className='font-semibold mt-1'>{user?.email}</p>
                </div>
                <div className="avatar flex flex-col items-center justify-center">
                    <div className="lg:w-40  w-32 flex justify-center items-start rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-5 '>
                <div className='bg-gradient-to-r from-sky-700 to-sky-300 rounded-md text-white py-20'>
                    <div className='flex flex-col gap-2 items-center justify-center '>
                        <div className='text-5xl'>
                            <MdEventNote />
                        </div>
                        <div className='font-semibold flex items-center gap-2'>
                            <h1 className='text-3xl'>{allPost?.length}</h1>
                            <p className='mt-1 text-2xl'>Posts</p>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-purple-700 to-purple-300 rounded-md text-white py-20'>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <div className='text-5xl'>
                            <PiUsersFourFill />
                        </div>
                        <div className='font-semibold flex items-center gap-2'>
                            <h1 className='text-3xl'>{userData?.length}</h1>
                            <p className='mt-1 text-2xl'>Users</p>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-orange-700 to-orange-300 rounded-md text-white py-20'>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <div className='text-5xl'>
                            <FaRegComment></FaRegComment>
                        </div>
                        <div className='font-semibold flex items-center gap-2'>
                            <h1 className='text-3xl'>{allPost?.length}</h1>
                            <p className='mt-1 text-2xl'>Comments</p>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-pink-700 to-pink-300 rounded-md text-white py-20'>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <div className='text-5xl'>
                            <IoMdWarning />
                        </div>
                        <div className='font-semibold flex items-center gap-2'>
                            <h1 className='text-3xl'>{allPost?.length}</h1>
                            <p className='mt-1 text-2xl'>Reports</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-base-100 mt-5 rounded-md shadow'>
                <div className='flex items-center justify-center gap-3 pt-5 px-5'>
                    <p className='flex items-center justify-center gap-1 text-neutral font-medium'><span className='text-sky-500'><FaDiamond /></span>Posts</p>
                    <p className='flex items-center justify-center gap-1 text-neutral font-medium'> <span className='text-purple-500'><FaDiamond /></span>Users</p>
                    <p className='flex items-center justify-center gap-1 text-neutral font-medium'><span className='text-pink-500'><FaDiamond /></span>Reports</p>
                    <p className='flex items-center justify-center gap-1 text-neutral font-medium'><span className='text-orange-500'><FaDiamond /></span>Comments</p>
                </div>
                <div>
                <PiChart data={data}></PiChart>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;