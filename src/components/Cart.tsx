import React from "react";

const Cart = () => {
  return (
    <div className="container" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <ul className="list-group" style={{width:'75vw', fontSize:'25px'}}>
        <li className="list-group-item d-flex">An item <div className="d-flex"><button className="btn btn-dark">-</button><p>5</p><button className="btn btn-outlined-dark">-</button></div></li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
};

export default Cart;
