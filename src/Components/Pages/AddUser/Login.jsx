import React, { useState } from 'react';
import login from '../../../assets/Login.jpg'
import { FaEye } from 'react-icons/fa';
import Google from './Google';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import useAuth from '../../../Custom/Hooks/useAuth';
import Swal from 'sweetalert2';
import useIsAdmin from '../../../Custom/Hooks/useIsAdmin';
import useAxiosSecure from '../../../Custom/Hooks/useAxiosSecure';

const Login = () => {
    const { user, logInUser } = useAuth();
    const [isAdmin, adminRefetch, isPending] = useIsAdmin();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (userData) => {
        console.log(userData)

        if (user) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You are already loged in!",
            });
        }

        logInUser(userData.email, userData.password)
            .then(result => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(async () => {
                    const res = await axiosSecure.get(`/check/admin?email=${userData.email}`);
                    adminRefetch();
                    navigate('/')
                }, 1000)

            })
            .catch(err => {
                console.log(err.code);
            })
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-[2.5fr_3fr] items-center bg-accent justify-between'>
            <div className='' >
                <img src={login} className='w-full' alt="login" />
            </div>
            <div className='py-20 lg:py-0 px-10 flex flex-col items-center justify-center'>
                <div className='mb-2'>
                    <h1 className='lg:text-3xl text-2xl text-white font-semibold text-center'>Login & Join Us Now</h1>
                    <p className='text-white mt-2 text-center'>Use your credentials to access your account.</p>
                </div>
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="form-control">
                            <p className='text-white my-2'>Email</p>
                            <label className="input flex items-center gap-2">
                                <input type="text" {...register('email', {
                                    required: 'Email is required',
                                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ }
                                })}
                                    className="grow" placeholder="Email" />
                            </label>
                        </div>
                        <div className="form-control">
                            <p className='text-white my-2'>Password</p>
                            <label className="input flex items-center gap-2">
                                <input type='password' {...register('password',
                                    {
                                        required: 'Password is required',
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
                                        },
                                    })}
                                    className="grow" placeholder="password" />
                            </label>
                        </div>
                        <div className="form-control mt-5">
                            <button className="bg-secondary font-semibold w-full py-3 text-white text-lg rounded-md">Login</button>
                        </div>
                        <div className='my-1'>
                            {errors.email && <span className='flex text-red-500'>Please enter a valid Email</span>}
                            {errors.password && <span className='flex text-red-500'>Password must have an uppercase, a lowercase & at least 6 character long</span>}
                        </div>
                    </form>
                    <div>
                        <div className="flex items-center justify-center my-4 text-white">OR</div>
                        <Google></Google>
                        <div className='mt-4'>
                            <p className='text-white text-center'>
                                Already have an account?
                                <Link to={'/joinus/signup'}><span className='text-white p-1 underline font-semibold'>Signup here</span></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;