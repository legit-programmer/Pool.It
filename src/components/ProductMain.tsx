import React from "react";
import Product from "./Product";
import { Dispatch } from "react";
import { SetStateAction } from "react";

interface props {
    products: { name: string, price: string, img_url: string, pid: string}[];
    search: string;
    cartItems: Array<string>;
    setCartItems: React.Dispatch<React.SetStateAction<Array<string>>>;
    setCount: Dispatch<SetStateAction<number>>;
    count: number;
}

const ProductMain = ({
    products,
    search,
    cartItems,
    setCartItems,
    count,
    setCount,
}: props) => {
    
    return (
        <div className="row">
            {products.map(
                (product) =>
                    product.name
                        .toLowerCase()
                        .includes(search.toLowerCase()) && (
                        <div key={product.pid} className="col">
                            <Product
                                pid={product.pid}
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                                name={product.name}
                                price={product.price}
                                imgUrl={product.img_url}
                                count={count}
                                setCount={setCount}
                            ></Product>
                        </div>
                    )
            )}
        </div>
    );
};

export default ProductMain;
