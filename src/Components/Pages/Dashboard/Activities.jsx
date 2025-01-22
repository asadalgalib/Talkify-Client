import React from 'react';
import useReport from '../../../Custom/Hooks/useReport';
import { Link, Navigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';

const Activities = () => {
    const [report, reportRefetch, reportLoading] = useReport();
    console.log(report);


    // -------------------------------------------------------------------------

    const openModal = () => {
        document.getElementById('my_modal_1').showModal();
    }

    const closeModal = () => {
        document.getElementById('my_modal_1').close();
    }

    // -------------------------------------------------------------------------


    if (reportLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner text-accent"></span></div>
    }
    return (
        <div className='lg:my-14 md:my-8 my-4 min-h-screen lg:mx-14 md:mx-8 mx-4 mb-10'>
            <div className='mb-5 bg-base-100 lg:py-10 py-5 lg:px-12 px-5 shadow rounded-md flex items-center justify-center'>
                <h1 className='lg:text-3xl text-2xl font-semibold text-neutral'>Total {report?.length} Reports</h1>
            </div>
            <div className='bg-base-100 rounded-md shadow overflow-x-auto'>
                <table className="table min-w-full">
                    {/* head */}
                    <thead>
                        <tr className='bg-secondary rounded text-white'>
                            <th className=' text-base'>#</th>
                            <th className=' text-base'>Reporter</th>
                            <th className=' text-base'>Feedback</th>
                            <th className=' text-base'>View Post</th>
                            <th className=' text-base'>View Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            report?.map((r, index) =>
                                <tr key={r._id} className='hover'>
                                    <th className='text-neutral'>{index + 1}</th>
                                    <td>
                                        <div className="">
                                            <p className='font-semibold text-neutral'>{r.userName}</p>
                                            <p>{r.userEmail}</p>
                                        </div>
                                    </td>
                                    <td className='text-neutral font-semibold'>{r.FeedBackText}</td>
                                    <td >
                                        <Link
                                            className='px-4 py-2 bg-secondary text-white font-semibold rounded'
                                            to={`/details/${r.PostId}`} >
                                            <button>Go to Post</button>
                                        </Link>
                                    </td>
                                    <td className='text-neutral'>
                                        <Link
                                            to={`/dashboard/admin/comment/${r.commentId}`}
                                            className='px-4 py-2 bg-secondary text-white font-semibold rounded'>Open
                                        </Link>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Activities;