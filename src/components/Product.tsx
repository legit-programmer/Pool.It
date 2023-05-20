import { useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";

interface props {
    name: string;
    price: string;
    imgUrl: string;
    setCount: Dispatch<SetStateAction<number>>;
    count: number;
    setCartItems: React.Dispatch<React.SetStateAction<Array<string>>>;
    cartItems: Array<string>;
    pid: string;
}

const Product = ({
    name,
    price,
    imgUrl,
    pid,
    setCount,
    count,
    setCartItems,
    cartItems,
}: props) => {
    const [pCount, setPcount] = useState(0);

    const handleCLick = () => {
        // setCartItems(cartItems.push(pid));
        let tempCart = cartItems;
        tempCart.push(pid);
        setCartItems(tempCart);
        setCount(count + 1);
        setPcount(pCount + 1);
    };

    const handlePcount = () => {
        // console.log(count);
        return (
            <>
                <p className="card-text">Qty:-{pCount}</p>
                <button
                    className="btn btn-outline-dark m-2"
                    onClick={() => {
                        setPcount(pCount - 1);
                        setCount(count - 1);
                        let tempCart = cartItems;
                        tempCart.splice(tempCart.indexOf(pid), 1);
                        setCartItems(tempCart);
                    }}
                >
                    -
                </button>
                <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                        setPcount(pCount + 1);
                        setCount(count + 1);
                        let tempCart = cartItems;
                        tempCart.push(pid);
                        setCartItems(tempCart);
                    }}
                >
                    +
                </button>
            </>
        );
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price:-{price}</p>
                {pCount === 0 ? (
                    <button className="btn btn-dark" onClick={handleCLick}>
                        Add to Cart
                    </button>
                ) : (
                    handlePcount()
                )}
            </div>
        </div>
    );
};

export default Product;
