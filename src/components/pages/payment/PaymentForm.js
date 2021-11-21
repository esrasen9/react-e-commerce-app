import React, {useState} from 'react';
import {CardElement} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../../../context/Context";

const PaymentForm = () => {
    const [initialState] = useStateValue();
    const {subtotal} = initialState;
    const [error,setError] = useState(null);

    const handleSubmit = async  (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setError(e.error ? e.error.message : "");
    }
    return (
        <div className="payment-form-container">
            <form className="payment-form" onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment-price">
                    <CurrencyFormat
                        value={subtotal}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        renderText={value => <div>Order Total: {value}</div>} />
                    <button className="button payment-button" disabled={error}>
                        <span>Pay Now</span>
                    </button>
                </div>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
}

export default PaymentForm;