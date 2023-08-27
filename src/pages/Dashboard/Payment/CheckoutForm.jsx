import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCarderror] = useState('');
    const {user} = useAuth();
    const [clinetSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if(price > 0){
            axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('error', error)
            setCarderror(error.message)
        }
        else {
            setCarderror('')
            // console.log('Payment Method', paymentMethod)
        }
        setProcessing(true)

        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clinetSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if(confirmError){
            console.log(confirmError)
        }
        console.log('payment intent',paymentIntent)
        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id)
            // save payment info to the server
            const payment = {
                email: user?.email, 
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart?.length,
                cartItems: cart?.map(item => item._id),
                menuItems: cart?.map(item => item.menuItemId),
                status: 'Service Pending',
                itemName: cart?.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data)
                if(res.data.insertResult.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Payment Confirm',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }

    }

    return (
        <div className="mx-4 md:mx-0">
            <form className="w-full md:mx-auto md:mt-[150px] md:max-w-xl" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-warning btn-sm mt-8" type="submit" disabled={!stripe || !clinetSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500 md:ms-48 mt-[40px]">{cardError}</p>}
            {transactionId && <p className="text-green-500 md:ms-48 mt-[40px]">Transaction Complete with TransactionId: {transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;