import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import Home from "./components/Home";
import Cart from "./components/Cart";
import EndPage from "./components/EndPage";
import {  Routes, Route } from "react-router-dom";
import ProductMain from "./components/ProductMain";
import AddProduct from "./components/AddProduct";
import Loading from "./components/Loading";
import Prompt from "./components/Prompt";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
    

    // console.log(products);
    const location = useLocation();
    const [loading, setLoading] = useState(true);
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

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')||'[]'));
    const [count, setCount] = useState(cartItems.length);
    useEffect(() => {
        
        if (location.pathname === "/pool") {
            console.log(location.pathname);
            
            console.log('set the loading false');
            axios
                .get("https://notlegit991.pythonanywhere.com/get/") // FIX THIS REQUEST THING!!!!!!
                .then((res) => {
                    console.log(products);
                    setProducts(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },[location.pathname]);

    useEffect(()=>{
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        setCount(cartItems.length)
        console.log('cartitems updated')
        
    }, [cartItems])


    return (
        <>
            <div className="container">
                
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
                        element={<EndPage products={products} setProducts={setProducts}/>}
                    />
                    <Route path={"/add"} element={<AddProduct setProducts={setProducts}/>} />
                    <Route path={"/load"} Component={Loading} />
                    <Route
                        path={"/prompt"}
                        element={
                            <Prompt
                                text="Important Note! Make sure you trust the person who have listed the product or shared you the link. As there is no 
                    registrations this may lead to various scam!"
                            />
                        }
                    />
                </Routes>
                

                
            </div>
            <Footer/>
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
