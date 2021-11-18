import React from 'react';
import {useStateValue} from "../../../context/Context";
import "./Payment.css";
import Address from "./Address";
import PaymentMethod from "./PaymentMethod";
import CartProduct from "../cart/CartProduct";
const Payment = () =>  {
    const [initialState] = useStateValue();
    const {cart} = initialState;
    return (
        <div className="page payment-page">
            <div>
                <h1>Checkout ({cart.length} items)</h1>
                {
                    cart && cart.map((product,index) =>{
                        return(
                            <div>
                                <CartProduct
                                    id={product.id}
                                    key={index}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="payment-details">
                <Address/>
                <PaymentMethod />
           </div>
        </div>
    );
}

export default Payment;