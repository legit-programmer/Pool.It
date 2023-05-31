import React from "react";
import Search from "./Search";
import CartIco from "./CartIco";
import { Link } from "react-router-dom";

interface props {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    count: number;
}
const Navbar = ({ setSearch, count }: props) => {
    return (
        <nav className="navbar bg-body-tertiary">
            <Link className="navbar-brand" to="/pool">
                <img
                    className=" mr-0"
                    style={{ width: "50%" }}
                    src="https://i.ibb.co/ZYvC9XN/logo.png "
                    alt=""
                />
            </Link>
            <Search setSearch={setSearch} />
            <div className="add ml-[2.25rem] my-2 w-[5%]">
                <Link to={"/add"}>
                    <button className="btn btn-outline-primary">
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
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </Link>
            </div>
            <CartIco count={count} />
        </nav>
    );
};

export default Navbar;
