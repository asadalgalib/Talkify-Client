import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Custom/Hooks/useAuth';
import useAxiosSecure from '../../../Custom/Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Announce = () => {
    const { user } = useAuth()
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { title, description } = data;
        const { displayName: name, photoURL: photo } = user;
        const announce = { name, photo, title, description }

        axiosSecure.post('/announce', announce)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Announcement Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');
                }
            })
            .catch(err =>{
                toast.error(err.code)
            })
    }

    return (
        <div className='grid grid-cols-1 items-center min-h-screen'>
            <div className='lg:px-14 md:px-8 px-4 lg:mx-14 md:mx-8 mx-4 lg:py-16 md:py-10 py-8 bg-base-100 rounded-md'>
                <div>
                    <h1 className='lg:text-3xl text-2xl font-semibold text-center text-neutral'>Add Announcement</h1>
                </div>
                <div className='max-w-xl bg-base-100 mx-auto mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="form-control">
                            <p className='text-neutral my-2'>Announcement Title</p>
                            <label className="input input-bordered  flex items-center gap-2">
                                <input type="text" {...register('title', {
                                    required: 'Title is required', minLength: { value: 3 }
                                })}
                                    className="grow bg-base-100" placeholder="name" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="form-control">
                                <div className="label">
                                    <p className='text-neutral my-2'>Description</p>
                                </div>
                                <textarea className="textarea textarea-bordered bg-base-100 h-24" {...register('description', {
                                    required: 'Description is required', minLength: { value: 3 }
                                })} placeholder="description"></textarea>
                            </label>
                        </div>
                        <div className="form-control mt-5">
                            <button className="bg-secondary font-semibold w-full py-3 text-white text-lg rounded-md">Post</button>
                        </div>
                        <div className='my-1'>
                            {errors.title && <span className='flex text-red-500'>Title must be greater than 2 letter</span>}
                            {errors.description && <span className='flex text-red-500'>Please add a description</span>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Announce;