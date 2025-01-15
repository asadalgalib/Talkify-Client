import { useState } from 'react';
import signup from '../../../assets/Signup.jpg'
import { FaEye } from 'react-icons/fa';
import Google from './Google';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [isPass, serIsPass] = useState(true);
    console.log(isPass);

    const handlepass = () => {
        serIsPass(!isPass);
    }

    const handleform = e => {
        e.preventDefault();
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
                    <form onSubmit={handleform} className="">
                        <div className='lg:grid grid-cols-2 gap-4 items-center'>
                            <div className="form-control">
                                <p className='text-white my-2'>Name</p>
                                <label className="input flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="name" />
                                </label>
                            </div>
                            <div className="form-control">
                                <p className='text-white my-2'>Photo URL</p>
                                <label className="input flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="photo url" />
                                </label>
                            </div>
                        </div>
                        <div className='lg:grid grid-cols-2 gap-4 items-center'>
                            <div className="form-control">
                                <p className='text-white my-2'>Email</p>
                                <label className="input flex items-center">
                                    <input type="text" className="grow" placeholder="Email" />
                                </label>
                            </div>
                            <div className="form-control">
                                <p className='text-white my-2'>Password</p>
                                <label className="input flex items-center">
                                    <input type={`${isPass ? 'password' : 'text'}`} className="grow" placeholder="password" />
                                    <button onClick={handlepass} className='-ml-12 cursor-pointer'><FaEye></FaEye></button>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-5">
                            <button className="bg-secondary font-semibold w-full py-3 text-white text-lg rounded-md">Login</button>
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