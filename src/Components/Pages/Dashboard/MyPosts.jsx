import React from 'react';
import useUserAllPosts from '../../../Custom/Hooks/useUserAllPosts';
import { BiDislike, BiLike } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { FaRegComment } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Custom/Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import DataNotFound from '../../Shared/DataNotFound';

const MyPosts = () => {
    const [userAllPost, isPostLoading, error, refetch] = useUserAllPosts();
    const axiosSecure = useAxiosSecure();
    console.log(userAllPost);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/userpost/delete?id=${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        toast.error(err.code);
                    })
                console.log(id);
            }
        });
    }



    if (isPostLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner text-accent"></span></div>
    }
    if(userAllPost.length <= 0){
        return <DataNotFound></DataNotFound>
    }
    return (
        <div className='my-10 lg:my-16 min-h-screen lg:mx-14 md:mx-8 mx-4 mb-10'>
            <div className='mb-5 bg-base-100 h-24 shadow rounded-md flex items-center justify-center'>
                <h1 className='lg:text-3xl text-2xl font-semibold text-neutral'>My All Posts</h1>
            </div>
            <div className='bg-base-100 rounded-md shadow overflow-x-auto'>
                <table className="table min-w-full">
                    {/* head */}
                    <thead>
                        <tr className='bg-secondary rounded text-white'>
                            <th className=' text-base'>#</th>
                            <th className=' text-base'>Title</th>
                            <th className=' text-base'>Vote</th>
                            <th className=' text-base'>Delete</th>
                            <th className=' text-base'>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userAllPost?.map((post, index) =>
                                <tr key={post._id} className='hover'>
                                    <th className='text-neutral'>{index + 1}</th>
                                    <td className='text-neutral'>{post.title}</td>
                                    <td>
                                        <div className='flex flex-col gap-2'>
                                            <span
                                                className='text-center flex gap-1 text-lg items-center font-semibold text-neutral'>
                                                {post?.upVote} <BiLike></BiLike>
                                            </span>
                                            <span
                                                className='text-center flex gap-1 text-lg items-center font-semibold text-neutral'>
                                                {post?.downVote} <BiDislike></BiDislike>
                                            </span>
                                        </div>
                                    </td>
                                    <td className='text-neutral'>
                                        <div className='grid grid-cols-1 items-center gap-2'>

                                            <button onClick={() => handleDelete(post._id)} className='font-semibold text-3xl text-red-600'><MdDeleteForever></MdDeleteForever></button>
                                        </div>
                                    </td>
                                    <td className='text-neutral'>
                                        <div className='grid grid-cols-1 items-start gap-2'>
                                            <button className='font-semibold text-2xl'><FaRegComment /></button>
                                        </div>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPosts;