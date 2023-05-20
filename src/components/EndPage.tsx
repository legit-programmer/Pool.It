import React from "react";
import Product from "./Product";

interface props {
   product:{name:string, price:string, img_url:string, pid:string};
}
const EndPage = ({ product }: props) => {
    return (
        <div className="container">
            <section className="product d-flex w-full bg-yellow-500 my-5 text-center justify-around">
                <div className="left  w-[50%]">
                    <img src={product.img_url} alt=""></img>
                </div>
                <div className="right  w-[50%]">right</div>
            </section>
        </div>
    );
};

export default EndPage;
