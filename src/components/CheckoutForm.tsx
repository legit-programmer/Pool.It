import { useState } from "react";

const CheckoutForm = () => {
    const [checkoutDetails, setCheckoutDetails] = useState(Object);

    const setupVal = (type: string, e: React.ChangeEvent<HTMLInputElement>) => {
        let temp = checkoutDetails;
        temp[type] = e.target.value;
        setCheckoutDetails(temp);
    };

    return (
        <>
            <div className="mb-3">
                <label className="form-label" htmlFor="name">
                    Name
                </label>

                <input
                    onChange={(e) => setupVal("name", e)}
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="John Smith"
                />

                <label htmlFor="email" className="form-label">
                    Email address
                </label>
                <input
                    onChange={(e) => setupVal("email", e)}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="address" className="form-label">
                    Address
                </label>
                <textarea
                    onChange={(e) => {
                        let temp = checkoutDetails;
                        temp["adddress"] = e.target.value;
                        setCheckoutDetails(checkoutDetails);
                    }}
                    className="form-control"
                    id="address"
                    rows={3}
                ></textarea>

                <label className="form-label" htmlFor="transaction-id">
                    Transaction ID of your payment
                </label>

                <input
                    onChange={(e) => setupVal("trancsid", e)}
                    type="text"
                    id="transaction-id"
                    className="form-control"
                    placeholder="3246421384"
                />
                <button className="btn btn-outline-success float-right my-3" onClick={()=>console.log(checkoutDetails)}>
                    Place the order
                </button>
            </div>
        </>
    );
};

export default CheckoutForm;
