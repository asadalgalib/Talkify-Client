import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import useAxiosSecure from '../../../Custom/Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet';

// ad key
const stripePromise = loadStripe(import.meta.env.VITE_payment_key);

const Member = () => {
    const [amount, setAmount] = useState("");
    const axiosSecure = useAxiosSecure();
    const [secret, setSecret] = useState('');

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: amount })
            .then(res => {
                setSecret(res.data.clientSecret)
            })
    }, [axiosSecure, amount])

    const handleAmount = e => {

        const form = e.target;
        const pack = form.value;

        if (pack === 'one') {
            setAmount(1.99);
        }
        if (pack === 'six') {
            setAmount(9.99);
        }
        if (pack === 'year') {
            setAmount(14.99);
        }
    }

    return (
        <div className="xl:mx-28 lg:mx-20 mx-4  my-4 md:my-8 lg:my-14 min-h-[60vh]">
            <Helmet>
                <title>Talkify - Membership</title>
            </Helmet>
            <div className='py-6 bg-base-100 max-w-lg mx-auto rounded-md shadow'>
                <h1 className='text-center lg:text-3xl text-2xl font-semibold text-neutral'>Get Membership</h1>
                {
                    secret ?
                        <p className='text-center'><i>Enter Your Details</i></p>
                        :
                        <p className='text-center'><i>Select a Pack First</i></p>
                }
            </div>
            <div className='max-w-lg mx-auto mt-3 bg-base-100 rounded-md p-2'>
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <span className="label-text font-medium">1 Month pack $1.99</span>
                        <input type="radio" name="option" value='one' onChange={handleAmount} className="radio" />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <label className="cursor-pointer label">
                        <span className="label-text font-medium">6 Months pack $9.99</span>
                        <input type="radio" name="option" value='six' onChange={handleAmount} className="radio" />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <label className="cursor-pointer label">
                        <span className="label-text font-medium">1 Year pack $14.99</span>
                        <input type="radio" name="option" value='year' onChange={handleAmount} className="radio" />
                    </label>
                </div>
            </div>
            {/* {
                secret && */}
            <div className='max-w-lg mx-auto bg-base-100 mt-5 p-4 rounded-md shadow'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm secret={secret}></CheckoutForm>
                </Elements>
            </div>
            {/* } */}
        </div>
    );
};

export default Member;