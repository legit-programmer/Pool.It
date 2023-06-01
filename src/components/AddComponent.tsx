import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface props {
    setupVal: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
    hero: string;
    sub: string;
    type: string;
    but: string;
    img: string;
    current: number;
    newProd:Object;
}
const AddComponent = ({
    setupVal,
    setCurrent,
    hero,
    sub,
    type,
    but,
    img,
    current,
    newProd
}: props) => {

    const navigate = useNavigate();
    return (
        <div className="container ">
            <div className="data my-16 d-flex rounded-md w-[100%] h-[100%] d-flex ">
                <div className="font-modern w-[55%]">
                    <h1 className="text-6xl font-semibold w-[85%]">{hero}</h1>
                    <p className="text-3xl">{sub}</p>
                    <input
                        id="data"
                        className=" my-24 w-[75%] text-4xl rounded-sm ring-2 ring-[#39D0BB]"
                        type="text"
                        name="name"
                        onChange={(e) => {
                            setupVal(e, `${type}`);
                        }}
                        onFocus={(e) => (e.target.value = "")}
                    />
                    <div className="but flex justify-end w-[75%]">
                        <button
                            onClick={() => {
                                if (current === 5) {
                                    console.log(newProd);
                                    axios
                                        .post(
                                            "http://127.0.0.1:8000/post/",
                                            newProd
                                        )
                                        .then((data) => {
                                            console.log(data);
                                            navigate(`/product/${data.data.id}`);
                                        })
                                        .catch((err) => console.log(err));
                                        
                                }
                                else{
                                    setCurrent(current + 1);
                                }
                            }}
                            className="btn btn-outline-success w-[25%] justify-center d-flex"
                        >
                      
                            {but}
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
                                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <img className="w-[50%] mx-7 rounded-lg" src={img} alt="none" />
            </div>
        </div>
    );
};

export default AddComponent;
