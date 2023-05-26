import React from "react";
import { useState } from "react";


const AddProduct = () => {
    const [newProd, setNewProd] = useState(Object);

    const setupVal = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        let temp = newProd;
        temp[type] = e.target.value;
        setNewProd(temp);
    };

    //         name: "",
    //         price: "",
    //         img_url: "",
    //         pid: "",
    //         desc: "",
    //         admin: "",
    //         mail: "",

    const NameElement = () => {
        console.log("ures");
        return (
            <div className="container ">
                <div className="data my-16 bg-slate-400 d-flex rounded-md w-[100%] h-[100%] ">
                    <div className="font-modern">
                        <h1 className="text-6xl font-semibold w-[75%]">
                            Enter product's name
                        </h1>
                        <p className="text-3xl">
                            name should be a bit descriptive.
                        </p>
                        <input
                            className=" my-24 w-[75%] text-4xl rounded-sm ring-2 ring-[#39D0BB]"
                            type="text"
                            name="name"
                            onChange={(e) => {
                                setupVal(e, "name");
                            }}
                        />
                        <div className="but flex justify-end w-[75%]">
                            <button
                                onClick={() => setCurrent(1)}
                                className="btn btn-primary w-[25%]"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    // React.ChangeEvent<HTMLInputElement>
    const imageElement = () => {
        return (
            <>
                <p>enter image url</p>
                <input onChange={(e)=>setupVal(e, "img_url")} type="text" className="imgurl" />
                <button onClick={() => setCurrent(2)}>next</button>
            </>
        );
    };

    const priceElement = () => {
        return (
            <>
                <p>enter price</p>
                <input onChange={(e)=>setupVal(e, "price")} type="text" className="imgurl" />
                <button onClick={() => setCurrent(3)}>next</button>
            </>
        );
    };
    const descElement = () => {
        return (
            <>
                <p>enter desc</p>
                <input type="text" onChange={(e)=>setupVal(e, "desc")} className="imgurl" />
                <button onClick={() => setCurrent(4)}>next</button>
            </>
        );
    };

    const adminElement = () => {
        return (
            <>
                <p>enter admin</p>
                <input type="text" className="imgurl" onChange={(e)=>setupVal(e, "admin")}/>
                <button onClick={() => setCurrent(5)}>next</button>
            </>
        );
    };

    const mailElement = () => {
        return (
            <>
                <p>enter maill</p>
                <input type="text" className="imgurl" onChange={(e)=>setupVal(e, "mail")}/>
                <button onClick={() => console.log(newProd)}>
                    Publish to pool
                </button>
            </>
        );
    };

    const [current, setCurrent] = useState(0);

    switch (current) {
        case 0:
            return NameElement();
            break;
        case 1:
            return imageElement();
            break;
        case 2:
            return priceElement();
            break;
        case 3:
            return descElement();
            break;
        case 4:
            return adminElement();
            break;

        case 5:
            return mailElement();
            break;
        default:
            break;
    }

    return <></>;
};

export default AddProduct;
