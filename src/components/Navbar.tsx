import React from "react";
import Search from "./Search";
import CartIco from "./CartIco";
import { Link } from "react-router-dom";

interface props {
  setSearch:  React.Dispatch<React.SetStateAction<string>>;
  count: number;
  
}
const Navbar = ({setSearch, count}:props) => {
  return (
    <nav className="navbar bg-body-tertiary">
      
        <Link className="navbar-brand" to="/pool">
          <img className=" mr-0" style={{width:'50%'}} src="https://i.ibb.co/ZYvC9XN/logo.png " alt="" />
        </Link>
        <Search setSearch={setSearch}/>
        <CartIco count={count}/>
      
    </nav>
  );
};

export default Navbar;
