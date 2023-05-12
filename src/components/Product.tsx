import { useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";

interface props {
  name: string;
  price: string;
  imgUrl: string;
  setCount: Dispatch<SetStateAction<number>>;
  count: number;
}

const Product = ({ name, price, imgUrl, setCount, count}: props) => {

    const [pCount, setPcount] = useState(0);

    const handleCLick = ()=>{
        console.log(count);
        setCount(count+1);
        setPcount(pCount+1);
        console.log(count);
    }

    const handlePcount = ()=>{
        console.log(count);
        return <>
        <p className="card-text">Qty:-{pCount}</p>
        <button className="btn btn-outline-dark m-2" onClick={()=>{setPcount(pCount-1); setCount(count-1)}}>-</button>
        <button className="btn btn-outline-dark" onClick={()=>{setPcount(pCount+1); setCount(count+1)}}>+</button>
        
        </>
    }
        
    
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price:-{price}</p>
        {pCount===0?<button className="btn btn-dark" onClick={handleCLick}>Add to Cart</button>:handlePcount()}
      </div>
    </div>
  );
};

export default Product;
