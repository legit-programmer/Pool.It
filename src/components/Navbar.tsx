import React from "react";
import Search from "./Search";
import CartIco from "./CartIco";
interface props {
  setSearch:  React.Dispatch<React.SetStateAction<string>>;
  count: number;
}
const Navbar = ({setSearch, count}:props) => {
  return (
    <nav className="navbar bg-body-tertiary">
      
        <a className="navbar-brand" href="#">
          React Builds A Store
        </a>
        <Search setSearch={setSearch}/>
        <CartIco count={count}/>
      
    </nav>
  );
};

export default Navbar;
