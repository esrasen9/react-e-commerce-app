import React from 'react';

const Address = () =>  {
    return (
        <div className="shipping-address">
            <div className="address-book">
                <div className="title address-title">
                    <img
                        className="a-logo"
                        src="data:image/png;base64,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"
                        alt=""
                    />
                    <h3>Address Book</h3>
                </div>
                <div className="content address-content">
                    <p>
                        419 King's Road
                        <br/>
                        Chelsea,London,SW3 4ND
                        <br/>
                        United Kingdom
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Address;