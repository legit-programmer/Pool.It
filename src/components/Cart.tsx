import React from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { Link } from "react-router-dom";

interface props {
    cartItems: Array<string>;
    setCartItems: React.Dispatch<React.SetStateAction<Array<string>>>;
    products: { name: string; price: string; img_url: string; pid: string }[];
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    setProdDetails:Dispatch<SetStateAction<{ name: string; price: string; img_url: string; pid: string; }>>;
}

const Cart = ({
    cartItems,
    setCartItems,
    products,
    count,
    setCount,
    setProdDetails
}: props) => {
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
                                <li className="list-group-item d-flex items-center" key={product.pid}>
                                    {product.name}
                                    <div className="d-flex items-center justify-center absolute left-[75%]">
                                        <button
                                            onClick={() => {
                                                let tempCart = cartItems;
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
                                                let tempCart = cartItems;
                                                tempCart.push(product.pid);
                                                setCartItems(tempCart);
                                                setCount(count + 1);
                                            }}
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => setProdDetails({ name: product.name, price: product.price, img_url: product.img_url, pid: product.pid })}
                                            className="btn btn-primary mx-3"
                                        >
                                            <Link className="no-underline text-white" to={'/page'}>Go to page</Link>
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
