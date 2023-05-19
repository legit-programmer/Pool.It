import { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import axios from "axios";
import Home from "./components/Home";
import Cart from "./components/Cart";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import ProductMain from "./components/ProductMain";

function App() {
    axios
        .get("http://127.0.0.1:8000/get/")
        .then((res) => {
            setProducts(res.data);
        })
        .catch((err) => {
            // console.log(products);
        });
    // console.log(products);

    const [count, setCount] = useState(0);
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([
        { name: "", price: "", img_url: "", pid: "" },
    ]);

    const [cartItems, setCartItems] = useState(Array<string>);

    // console.log(products);

    return (
        <>
            <div className="container">
                
                <Router>
                <Navbar setSearch={setSearch} count={count} />
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route
                            path="/pool"
                            element={
                                <ProductMain
                                    products={products}
                                    setCartItems={setCartItems}
                                    search={search}
                                    cartItems={cartItems}
                                    count={count}
                                    setCount={setCount}
                                />
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <Cart
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}
                                    products={products}
                                />
                            }
                        />
                    </Routes>
                </Router>

                {/* <Cart
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    products={products}
                /> */}
            </div>
        </>

        // <Home/>
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
