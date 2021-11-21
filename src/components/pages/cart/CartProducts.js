import React from 'react';
import FlipMove from "react-flip-move";
import CartProduct from "./CartProduct";
import {useStateValue} from "../../../context/Context";


const CartProducts = () =>  {
    const [initialState] = useStateValue();
    const {cart} = initialState;
    /*Functional components have no reference,
    I wrapped the CartProduct component with a div for
    FlipMove to work*/
    return (
        <div>
            <h1 className="cart-title">Your shopping basket</h1>
            <div className="cart-products">
                <FlipMove>
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
                </FlipMove>
            </div>
        </div>
    );
}

export default CartProducts;