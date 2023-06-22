import React from "react";

import { Link } from "react-router-dom";

interface props {
    cartItems: any;
    setCartItems: any;
    products: { name: string; price: string; img_url: string; pid: string }[];
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    // setProdDetails:Dispatch<SetStateAction<{ name: string; price: string; img_url: string; pid: string; }>>;
}

const Cart = ({
    cartItems,
    setCartItems,
    products,
    count,
    setCount,
}: props) => {
    const check = (id: string) => {
        let count = 0;
        cartItems.forEach((v:string) => v === id && count++);
        return count;
    };

    return (
        <>
            <h1>Items</h1>
            <div
                className="container"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "75vh",
                }}
            >
                <ul
                    className="list-group"
                    style={{ width: "75vw", fontSize: "25px" }}
                >
                    {products.map(
                        (product) =>
                            cartItems.includes(product.pid) && (
                                <li
                                    className="list-group-item d-flex items-center"
                                    key={product.pid}
                                >
                                    {product.name + ", $" + product.price}
                                    <div className="d-flex items-center justify-center absolute left-[80%]">
                                        <button
                                            onClick={() => {
                                                let tempCart = [...cartItems];
                                                tempCart.splice(
                                                    tempCart.indexOf(
                                                        product.pid
                                                    ),
                                                    1
                                                );
                                                setCartItems(tempCart);
                                                setCount(count - 1);
                                            }}
                                            className="btn btn-outline-danger positon-absolute"
                                        >
                                            -
                                        </button>
                                        <p className="px-[12px]">
                                            {check(product.pid)}
                                        </p>
                                        <button
                                            className="btn btn-outline-success"
                                            onClick={() => {
                                                let tempCart = [...cartItems];
                                                tempCart.push(product.pid);
                                                setCartItems(tempCart);
                                                setCount(count + 1);
                                            }}
                                        >
                                            +
                                        </button>

                                        <Link
                                            className="no-underline text-white mx-3"
                                            to={"/product/" + product.pid}
                                        >
                                            <button className="btn btn-primary">
                                                
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                                    />
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </li>
                            )
                    )}
                </ul>
            </div>
        </>
    );
};

/* <li className="list-group-item d-flex items-center">An item <div className="d-flex items-center justify-center absolute left-[75%]"><button className="btn btn-dark positon-absolute">-</button><p className="px-[12px]">5</p><button className="btn btn-dark">+</button>
        <button className="btn btn-danger mx-3">Delete</button>
        </div></li> */

export default Cart;
