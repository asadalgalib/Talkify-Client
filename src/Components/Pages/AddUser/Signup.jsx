import { useState } from 'react';
import signup from '../../../assets/Signup.jpg'
import Google from './Google';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Custom/Hooks/useAuth';
import { useForm } from "react-hook-form"
import axios from 'axios';
import Swal from 'sweetalert2';


const Signup = () => {
    const { user, setUser, createUser, updateUserProfile } = useAuth()
    const navigate = useNavigate()
    const [isPass, serIsPass] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (userData) => {
        console.log(userData)

        const { name, photo, email } = userData;

        if (user) {
            return alert('You are already loged in');
        }

        createUser(userData.email, userData.password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                updateUserProfile({ displayName: name, photoURL: photo });

                axios.post('http://localhost:5000/users', { name, email, photo })
                    .then(res => {
                        if(res.data.insertedId){
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Account created Successfully",
                                showConfirmButton: false,
                                timer: 1500
                              });
                              navigate('/')
                        }
                    })
                    .catch(err => {
                        console.log(err.code);
                    })
            })
            .catch(err => {
                console.log(err.code);
            })
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-[2.5fr_3fr] items-center bg-accent justify-between'>
            <div className='bg-white ' >
                <img src={signup} className='w-full' alt="login" />
            </div>
            <div className='py-20 lg:py-0 px-10 flex flex-col items-center justify-center'>
                <div className='mb-2'>
                    <h1 className='lg:text-3xl text-2xl text-white font-semibold text-center'>Signup & Join Us Now</h1>
                    <p className='text-white mt-2 text-center'>Use your Profile info to Create your account.</p>
                </div>
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className='lg:grid grid-cols-2 gap-4 items-center'>
                            <div className="form-control">
                                <p className='text-white my-2'>Name</p>
                                <label className="input flex items-center gap-2">
                                    <input type="text" {...register('name', {
                                        required: 'Name is required',
                                        required: 'Name is required', minLength: { value: 3 }
                                    })}
                                        className="grow" placeholder="name" />
                                </label>
                            </div>
                            <div className="form-control">
                                <p className='text-white my-2'>Photo URL</p>
                                <label className="input flex items-center gap-2">
                                    <input type="text" {...register('photo', {
                                        required: 'URL is required',
                                        pattern: { value: /^https?:\/\/[\w\d-]+\.[\w\d-.]+.*$/, },
                                    })}
                                        className="grow" placeholder="photo url" />
                                </label>
                            </div>
                        </div>
                        <div className='lg:grid grid-cols-2 gap-4 items-center'>
                            <div className="form-control">
                                <p className='text-white my-2'>Email</p>
                                <label className="input flex items-center">
                                    <input type="text" {...register('email', {
                                        required: 'Email is required',
                                        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ }
                                    })}
                                        className="grow" placeholder="email" />
                                </label>
                            </div>
                            <div className="form-control">
                                <p className='text-white my-2'>Password</p>
                                <label className="input flex items-center">
                                    <input type='password' {...register('password',
                                        {
                                            required: 'Password is required',
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
                                            },
                                        })} className="grow" placeholder="password" />
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-5">
                            <button className="bg-secondary font-semibold w-full py-3 text-white text-lg rounded-md">Signup</button>
                        </div>
                        <div className='my-1'>
                            {errors.name && <span className='flex text-red-500'>Name must be greater than 2 letter</span>}
                            {errors.photo && <span className='flex text-red-500'>Please enter a valid URL</span>}
                            {errors.email && <span className='flex text-red-500'>Please enter a valid Email</span>}
                            {errors.password && <span className='flex text-red-500'>Password must have an uppercase, a lowercase & at least 6 character long</span>}
                        </div>
                        <div className="flex items-center justify-center my-4 text-white">OR</div>
                        <Google></Google>
                        <div className='mt-4'>
                            <p className='text-white text-center'>
                                Already have an account?
                                <Link to={'/joinus/login'}><span className='text-white p-1 underline font-semibold'>Login here</span></Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;