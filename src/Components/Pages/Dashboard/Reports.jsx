import React, { useState } from 'react';
import useAxiosPublic from '../../../Custom/Hooks/useAxiosPublic';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ReactReadMoreReadLess from "react-read-more-read-less";
import useAuth from '../../../Custom/Hooks/useAuth';
import useAxiosSecure from '../../../Custom/Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Reports = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const { user } = useAuth()
    const [feedback, setFeedback] = useState({});
    const [disabledId, setDisabledId] = useState({});
    const axiosSecure = useAxiosSecure();

    const { data: postComment, refetch: commentRefech } = useQuery({
        queryKey: ['comment', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/comment/${id}`);
            return res.data;
        }
    });

    const handleFeedBack = (input, id) => {
        const feed = input.target.value;
        setFeedback(prev => ({ ...prev, [id]: feed }));
        setDisabledId(prev => ({ ...prev, [id]: false }));
    };

    // setDisabledId(prev => ({ ...prev, [id]: true }));
    const handleReport = (id,Id) => {
        const FeedBackText = feedback[id];
        const userName = user.displayName;
        const userEmail = user.email;
        const commentId = id;
        const PostId = Id;
        const report = { FeedBackText, userName, userEmail, commentId,PostId }

        axiosSecure.post('/report', report)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Reported Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setDisabledId(prev => ({ ...prev, [id]: true }));
                }
            })
            .catch(err => {
                toast.error(err.code);
            })
    };

    return (
        <div className='my-10 lg:my-16 min-h-screen lg:mx-14 md:mx-8 mx-4 mb-10'>
            <div className='mb-5 bg-base-100 h-24 shadow rounded-md flex items-center justify-center'>
                <h1 className='lg:text-3xl text-2xl font-semibold text-neutral'>All Comments</h1>
            </div>
            <div className='bg-base-100 rounded-md shadow overflow-x-auto'>
                <table className="table min-w-full">
                    <thead>
                        <tr className='bg-secondary rounded text-white'>
                            <th className=' text-base'>#</th>
                            <th className=' text-base'>People</th>
                            <th className=' text-base'>Comment</th>
                            <th className=' text-base'>FeedBack</th>
                            <th className=' text-base'>Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            postComment?.map((comment, index) =>
                                <tr key={comment?._id}>
                                    <th className='text-neutral'>{index + 1}</th>
                                    <td className='text-neutral'>
                                        <div className='flex items-center justify-start'>
                                            <div className="">
                                                <div>
                                                    <img className="rounded-full h-12 w-12"
                                                        src={comment.photo}
                                                        alt="Avatar" />
                                                </div>
                                                <div>
                                                    <h1 className='font-medium mt-1'>{comment?.name}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>
                                            <ReactReadMoreReadLess
                                                charLimit={20}

                                                readMoreText="See more..."
                                                readLessText="See less..."
                                            >
                                                {comment?.comment}
                                            </ReactReadMoreReadLess>
                                        </p>
                                    </td>
                                    <td className='text-neutral'>
                                        <form onChange={(input) => handleFeedBack(input, comment?._id)}>
                                            <select defaultValue='Feedback' className="select select-bordered w-full max-w-40">
                                                <option disabled>Feedback</option>
                                                <option value='Harassment'>Harassment</option>
                                                <option value='Hate speech'>Hate speech</option>
                                                <option value='Threat'>Threat</option>
                                            </select>
                                        </form>
                                    </td>
                                    <td>
                                        <button
                                            disabled={disabledId[comment?._id] === undefined ? true : disabledId[comment?._id]}
                                            onClick={() => handleReport(comment?._id,comment?.postId)}
                                            className={`font-semibold flex text-lf items-center justify-center gap-2 ${disabledId[comment?._id] === undefined ? 'bg-base-200' : disabledId[comment?._id] ? 'bg-base-200' : 'bg-secondary'} text-white py-2 px-4 rounded`}
                                        >
                                            Report
                                        </button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reports;
