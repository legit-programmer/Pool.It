import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import Home from "./components/Home";
import Cart from "./components/Cart";
import EndPage from "./components/EndPage";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import ProductMain from "./components/ProductMain";

function App() {
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/get/") // FIX THIS REQUEST THING!!!!!!
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    // console.log(products);

    const [count, setCount] = useState(0);
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([
        { name: "", price: "", img_url: "", pid: "" },
    ]);

    const [cartItems, setCartItems] = useState(Array<string>);
    const [prodDetails, setProdDetails] = useState({
        name: "",
        price: "",
        img_url: "",
        pid: "",
    });

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
                                    count={count}
                                    setCount={setCount}
                                    setProdDetails={setProdDetails}
                                />
                            }
                        />
                        <Route
                            path={"/" + prodDetails.pid} //// do this!!!
                            element={<EndPage product={prodDetails} />}
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
