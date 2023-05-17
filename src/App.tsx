import { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import axios from "axios";

function App() {
  axios
    .get("http://127.0.0.1:8000/get/")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {});
  // console.log(products);

  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([
    { name: "", price: "", img_url: "" },
  ]);

  return (
    <>
      <div className="container">
        <Navbar setSearch={setSearch} count={count} />
        
        <div className="row">
          {products.map(
            (product) =>
              product.name.toLowerCase().includes(search.toLowerCase()) && (
                <div key={product.img_url} className="col">
                  <Product
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
        {/* <Cart/> */}
      </div>
    </>
  );
}

// product.title.toLowerCase().includes(search.toLowerCase()) && (
//   <div key={product.img} className="col">
//     <Product
//       name={product.title}
//       price={product.price}
//       imgUrl={product.img}
//       count={count}
//       setCount={setCount}
//     ></Product>
//   </div>

export default App;
