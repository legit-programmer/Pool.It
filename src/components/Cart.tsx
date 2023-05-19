import React from "react";
import Product from "./Product";
import { Dispatch } from "react";
import { SetStateAction } from "react";

interface props {
    cartItems: Array<string>;
    setCartItems: React.Dispatch<React.SetStateAction<Array<string>>>;
    products: Array<object>;
}

const Cart = ({ cartItems, setCartItems, products }: props) => {
    const check = (id: string) => {
        let count = 0;
        cartItems.forEach((v) => v === id && count++);
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
                                <li className="list-group-item d-flex items-center">
                                    {product.name}
                                    <div className="d-flex items-center justify-center absolute left-[75%]">
                                        <button className="btn btn-dark positon-absolute">
                                            -
                                        </button>
                                        <p className="px-[12px]">
                                            {check(product.pid)}
                                        </p>
                                        <button className="btn btn-dark">
                                            +
                                        </button>
                                        <button className="btn btn-danger mx-3">
                                            Delete
                                        </button>
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
