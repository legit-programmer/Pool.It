import { useState } from "react";

import { useParams } from "react-router-dom";
import Prompt from "./Prompt";
import CheckoutForm from "./CheckoutForm";

interface props {
    //    product:{name:string, price:string, img_url:string, pid:string};
    products: {
        name: string;
        price: string;
        img_url: string;
        pid: string;
        desc: string;
        admin: string;
        mail: string;
    }[];
}
const EndPage = ({ products }: props) => {
    const id = useParams()["id"];
    const [qty, setQty] = useState(1);
    const [payClicked, setPayClicked] = useState(false);
    const [success, setSuccess] = useState(false);

    const payDetails = (product: {
        name: string;
        price: string;
        img_url: string;
        pid: string;
        desc: string;
        admin: string;
        mail: string;
    }) => {
        return (
            <>
                <div className=" d-flex admin  border-solid justify-left my-5">
                    <div>
                        <h2 className=" text-4xl">Listed By</h2>
                        <div className="d-flex details">
                            <h5>{product.admin}</h5>
                            <h5 className="mx-3">{product.mail}</h5>
                        </div>
                    </div>
                    <Prompt
                        text="Important Note! Make sure you trust the person who have listed the product or shared you the link. As there is no 
                    registrations this may lead to various scam!"
                    />
                </div>
                {success && (
                    <div
                        className="alert alert-success alert-dismissible fade show"
                        role="alert"
                    >
                        <strong>Order Success!</strong> Your details have been
                        sent to the product holder he will be in touch with you
                        soon.
                        <button
                            onClick={() => setSuccess(false)}
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                        ></button>
                    </div>
                )}
                <CheckoutForm
                    mail={product.mail}
                    pid={product.pid}
                    setSuccess={setSuccess}
                />
            </>
        );
    };

    const payButton = () => {
        return (
            <div className="pay-button">
                <button
                    className="btn btn-primary"
                    onClick={() => setPayClicked(true)}
                >
                    Ready to checkout
                </button>
            </div>
        );
    };

    return (
        <div className="container font-modern font-extralight">
            {products.map(
                (product) =>
                    product.pid.toString() === id && (
                        <div key={product.pid} className="container">
                            <section className="product d-flex w-full my-5 text-center justify-around">
                                <div className="left  w-[50%]">
                                    <img
                                        className=" w-full"
                                        src={product.img_url}
                                        alt=""
                                    ></img>
                                </div>
                                <div className="right mx-5 text-left  w-[50%]">
                                    <h1 className=" text-7xl font-thin">
                                        {product.name}
                                    </h1>
                                    <p className=" my-5 text-2xl">
                                        {product.desc}
                                    </p>
                                    <div className="but d-flex">
                                        <div
                                            className="btn-group"
                                            role="group"
                                            aria-label="Basic example"
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() =>
                                                    qty > 1 && setQty(qty - 1)
                                                }
                                            >
                                                -
                                            </button>
                                            <button className="btn btn-disabled">
                                                {qty}
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-outline-success"
                                                onClick={() => setQty(qty + 1)}
                                            >
                                                +
                                            </button>
                                        </div>

                                        <h4 className="mx-4 text-4xl font-semibold">
                                            $
                                            {qty === 0
                                                ? product.price
                                                : qty * Number(product.price)}
                                        </h4>
                                    </div>
                                    <div className="paydiv my-[10%]">
                                        {payClicked
                                            ? payDetails(product)
                                            : payButton()}
                                    </div>
                                </div>
                            </section>
                        </div>
                    )
            )}
        </div>
    );
};

export default EndPage;
