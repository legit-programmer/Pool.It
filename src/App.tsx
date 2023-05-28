import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import Home from "./components/Home";
import Cart from "./components/Cart";
import EndPage from "./components/EndPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductMain from "./components/ProductMain";
import AddProduct from "./components/AddProduct";
import Loading from "./components/Loading";

function App() {
    useEffect(() => {
        
        products[0]['name']===''?setLoading(true):setLoading(false);
        axios
            .get("http://127.0.0.1:8000/get/") // FIX THIS REQUEST THING!!!!!!
            .then((res) => {
                console.log(products);
                setProducts(res.data);
                
            })
            .catch((err) => {
                console.log(err);
                
            });
    });

    // console.log(products);

    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([
        {
            name: "",
            price: "",
            img_url: "",
            pid: "",
            desc: "",
            admin: "",
            mail: "",
        },
    ]);

    const [cartItems, setCartItems] = useState(Array<string>);
    // const [prodDetails, setProdDetails] = useState({
    //     name: "",
    //     price: "",
    //     img_url: "",
    //     pid: "",
    // });

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
                                loading ? (
                                    <Loading />
                                ) : (
                                    <ProductMain
                                        products={products}
                                        setCartItems={setCartItems}
                                        search={search}
                                        cartItems={cartItems}
                                        count={count}
                                        setCount={setCount}
                                    />
                                )
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
                                />
                            }
                        />
                        <Route
                            path={"/product/:id"} //// do this!!!
                            element={<EndPage products={products} />}
                        />
                        <Route path={"/add"} element={<AddProduct />} />
                        <Route path={"/load"} Component={Loading} />
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
