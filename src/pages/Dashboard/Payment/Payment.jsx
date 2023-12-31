import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from './CheckoutForm';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price , 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="h-full w-full md:ms-16">
            <Helmet>
                <title>FlavourFly | Manage Item</title>
            </Helmet>

            <SectionTitle
                subHeading={"Proceed to Checkout"}
                heading={'Payment Now'}
            ></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;