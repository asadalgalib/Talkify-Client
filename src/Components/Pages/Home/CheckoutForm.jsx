import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../../Custom/Hooks/useAuth';
import { toast } from 'react-toastify';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Custom/Hooks/useAxiosSecure';

const CheckoutForm = ({ secret }) => {
    const navigate = useNavigate()
    const [error, setError] = useState('');
    const [transactionId, setTransaction] = useState('');
    const [payed, setPayed] = useState('')
    const axiosSecure = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();


    const handleSubmit = async (e) => {
        e.preventDefault()
        const confirmEmail = e.target.confirmEmail.value;

        if (!user) {
            toast.error('Please Login First');
            navigate('/joinus/login');
            return;
        }

        if (user.email !== confirmEmail) {
            return toast.error('Please confirm your Email');
        }

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setError(error.message);
        }
        else {
            setError(' ');
        }

        // confirm card payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(secret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'Anonymous',
                    email: user?.email || 'anonymouse@email.com'
                }
            }
        })

        if (confirmError) {
            setError(confirmError.message);
        }
        else {
            if (paymentIntent.status === 'succeeded') {

                setError(' ');
                e.target.reset();
                setPayed(paymentIntent.amount / 100);
                setTransaction(paymentIntent.id);

                const payed = paymentIntent.amount / 100;
                axiosSecure.put(`/make/member?email=${user?.email}`, { payed })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Payment Successfull",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })
                    .catch(err => {
                        toast.error(err.code);
                    })
            }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='border rounded-md mt-3'>
                <label className="input  flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" name='confirmEmail' placeholder="confirm your email" />
                </label>
            </div>
            <div className='mt-3 border p-4 rounded-md'>
                <CardElement></CardElement>
            </div>
            <div className='flex items-center justify-center'>
                <button
                    className={`px-4 py-1 text-white font-semibold mt-4 rounded ${!stripe || !elements || !secret ? 'bg-base-200' : "bg-secondary"}`}
                    type="submit"
                    disabled={!stripe || !elements || !secret}>
                    Pay
                </button>
            </div>
            {
                error && <p className='text-red-600 mt-1'>{error}</p>
            }
            {
                payed && <p className='text-green-600 mt-1'>Payment ${payed} Successfull</p>
            }
            {
                transactionId && <p className='text-green-600 mt-1'>Transaction Id : {transactionId}</p>
            }
        </form>
    );
};

export default CheckoutForm;