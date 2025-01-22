import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../Custom/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Comment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();


    const { data: reportedComment, refetch: commentRefech } = useQuery({
        queryKey: ['reportedComment', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reported/comment/${id}`);
            return res.data;
        }
    });

    const handleDelete = () => {
        axiosSecure.delete(`/comment?id=${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Remove Admin Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/admin/activities');
                }
            })
            .catch(err => {
                toast.error(err.code);
            });
    }

    return (
        <div className=' lg:my-14 md:my-8 my-4 min-h-screen lg:mx-14 md:mx-8 mx-4 mb-10 flex items-center justify-center min-w-80'>
            <div className='mb-5 bg-base-100 lg:py-10 py-5 lg:px-12 px-5 shadow rounded-md flex  flex-col enter justify-center'>
                <div>
                    {
                        reportedComment?.length > 0 &&
                        <div>
                            {
                                reportedComment.map(c =>
                                    <div key={c._id} className='my-2'>
                                        <div className='flex items-start gap-3'>
                                            <div className="avatar">
                                                <div className="mask rounded-full w-9">
                                                    <img src={c?.photo} />
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='font-semibold text-sm'>{c?.name}</h1>
                                                <p className='p-1 bg-base-200 mt-2 rounded px-4 text-sm'>{c?.comment}</p>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                    }
                </div>
                <div className="flex items-center justify-center mt-5">
                    <button
                        onClick={handleDelete}
                        className='px-4 py-2 bg-secondary text-white font-semibold rounded'
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Comment;