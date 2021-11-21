import React from 'react';
import {useCopyDiscountCode} from "../../../lib/useCopyDiscountCode";
import {useStateValue} from "../../../context/Context";

const DiscountCoupon = () => {
    const [initialState] = useStateValue();
    const {discountCode} = initialState;
    const [isCopied,copyDiscountCode] = useCopyDiscountCode({
        resetInterval: 2000
    });
    return (
        <div className="discount-coupon">
            <h4>BLACK FRIDAY WEEK</h4>
            <h2>10% OFF EVERYTHING!</h2>
            <div className="coupon-code">
                <h2>{discountCode}</h2>
                <button
                    onClick={() => copyDiscountCode(discountCode)}
                    type="button"
                    className="copy-coupon-button">{!isCopied ? "Copy" : "Copied"}</button>
            </div>
        </div>
    );
}

export default DiscountCoupon;