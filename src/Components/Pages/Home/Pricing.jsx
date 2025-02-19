import React from 'react';
import { CgDollar } from 'react-icons/cg';
import safe from '../../../assets/icons8-safety-50.png'
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className='xl:mx-28 lg:mx-20 md:mx-12 mx-4 my-8 lg:my-16'>
            <div className='bg-base-100 py-5 rounded-md'>
                <h1 className='text-center lg:text-3xl text-2xl font-semibold text-neutral '>Pricing</h1>
            </div>
            <div className='grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-3 mt-5 text-neutral'>

                <div className="bg-base-100 w-full p-2 lg:p-4 rounded-md h-fit">
                    <div className='text-center text-xl md:text-2xl mt-2'>
                        <h1 className=' font-semibold text-neutral'>1 Month Plan</h1>
                        <p className='flex items-center justify-center text-center gap-2 mt-2 text-neutral'><CgDollar></CgDollar> <span className='text-5xl font-bold'>1.99</span></p>
                        <p>per month</p>
                        <Link to={'/membership'}><button className='px-8 py-3 rounded bg-secondary font-semibold text-white mt-3'>Get The Deal</button></Link>
                        <div className='flex items-center justify-center gap-1 mt-2'>
                            <img src={safe} className='w-8' alt="" />
                            <p className='text-neutral'>30-days money-back guarantee</p>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 w-full p-2 lg:p-4 rounded-md h-fit">
                    <div className='text-center text-xl md:text-2xl mt-2'>
                        <h1 className=' font-semibold'>12 Month Plan</h1>
                        <p className='flex items-center justify-center text-center gap-2 mt-2'><CgDollar></CgDollar> <span className='text-5xl font-bold'>1.25</span></p>
                        <p>per month</p>
                        <p className='px-5 py-2 bg-blue-200 max-w-40 mx-auto font-bold text-blue-600 rounded-full my-3'>Save 68%</p>
                        <p><span className='line-through font-semibold'>$286.80</span> $89.00 for the first 2 years</p>
                        <Link to={'/membership'}><button className='px-8 py-3 rounded bg-secondary font-semibold text-white mt-3'>Get The Deal</button></Link>
                        <div className='flex items-center justify-center gap-1 mt-2'>
                            <img src={safe} className='w-8' alt="" />
                            <p>30-days money-back guarantee</p>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 w-full p-2 lg:p-4 rounded-md h-fit">
                <div className='text-center text-xl md:text-2xl mt-2'>
                        <h1 className=' font-semibold'>6 Month Plan</h1>
                        <p className='flex items-center justify-center text-center gap-2 mt-2'><CgDollar></CgDollar> <span className='text-5xl font-bold'>1.67</span></p>
                        <p>per month</p>
                        <Link to={'/membership'}><button className='px-8 py-3 rounded bg-secondary font-semibold text-white mt-3'>Get The Deal</button></Link>
                        <div className='flex items-center justify-center gap-1 mt-2'>
                            <img src={safe} className='w-8' alt="" />
                            <p>30-days money-back guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;