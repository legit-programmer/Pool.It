import { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

const products = [
  {
    title: "Tomato",
    price: "$12",
    img: "https://th.bing.com/th/id/OIP.8cNWwvfJsvMkZzAbNLC58AHaGK?pid=ImgDet&rs=1",
  },
  {
    title: "Carrot",
    price: "$15",
    img: "https://th.bing.com/th/id/R.36372c2d98d45a9028131399f5c02a7d?rik=SfK7P5DVJ%2b5QSw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Ts5VLwGa5uc%2fUO1J3Xn_mtI%2fAAAAAAAAAGk%2fAhX3IrwFCxU%2fs1600%2fcarrot.jpg&ehk=7a%2bk7qY7DFpplvgzunR76ElyVtuxbcR9xF3wRk4hNmM%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "onion",
    price: "$9",
    img: "https://th.bing.com/th/id/R.3e7cdb2e1d99cb2ae261260e6c6a160e?rik=O65oSR6nGOb66Q&riu=http%3a%2f%2fwww.justysproduce.com%2fimages%2fred_20onion.jpg&ehk=oiNwGTBCSn07MZr0tbCBsTiV6na4qVLeSwolSdkW0no%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "Potato",
    price: "$5",
    img: "https://th.bing.com/th/id/R.1746905e79820c611a75f362be285401?rik=EeC5X1LCYqT9PQ&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fpotato%2fpotato-11.jpg&ehk=fDq3cSrGTqDIyEi2RqF3nDjc4F2gTV8kXJjd44y8%2f%2f8%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "Beetroot",
    price: "$25",
    img: "https://th.bing.com/th/id/OIP.orTWDkgY0-FFuGP1J8P6oQHaHa?pid=ImgDet&rs=1",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="container">
        <Navbar setSearch={setSearch} count={count} />
        <div className="row">
          {products.map(
            (product) =>
              product.title.toLowerCase().includes(search.toLowerCase()) && (
                <div key={product.img} className="col">
                  <Product
                    name={product.title}
                    price={product.price}
                    imgUrl={product.img}
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

export default App;
