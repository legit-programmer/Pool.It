import React from "react";
import { useState } from "react";
import AddComponent from "./AddComponent";

interface props {
    setProducts: React.Dispatch<
        React.SetStateAction<
            {
                name: string;
                price: string;
                img_url: string;
                pid: string;
                desc: string;
                admin: string;
                mail: string;
            }[]
        >
    >;
}

const AddProduct = ({setProducts}:props) => {
    const [newProd, setNewProd] = useState(Object);

    const setupVal = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        let temp = newProd;
        temp[type] = e.target.value;
        setNewProd(temp);
    };

    //         name: "",
    //         price: "",
    //         img_url: "",
    //         pid: "",
    //         desc: "",
    //         admin: "",
    //         mail: "",

    // React.ChangeEvent<HTMLInputElement>

    const [current, setCurrent] = useState(0);

    switch (current) {
        case 0:
            return (
                <AddComponent
                    current={current}
                    setupVal={setupVal}
                    setCurrent={setCurrent}
                    hero="Enter your product's name"
                    sub="name should be a bit descriptive."
                    type="name"
                    but="Next"
                    img="https://static.vecteezy.com/system/resources/previews/001/222/484/non_2x/e-commerce-online-shopping-concept-vector.jpg"
                    newProd={newProd}
                    setProducts={setProducts}
                />
            );
            break;
        case 1:
            return (
                <AddComponent
                    current={current}
                    setupVal={setupVal}
                    setCurrent={setCurrent}
                    hero="Add product's image URL"
                    sub="we currently dont support file uploads, you can host yout image for free ong imagur."
                    type="img_url"
                    but="Next"
                    img="https://th.bing.com/th/id/R.53805e41b5d80114dbb66ca20b348806?rik=79P8ZhWrl%2fts9A&pid=ImgRaw&r=0"
                    newProd={newProd}
                    setProducts={setProducts}
                />
            );
            break;
        case 2:
            return (
                <AddComponent
                    current={current}
                    setupVal={setupVal}
                    setCurrent={setCurrent}
                    hero="Add price"
                    sub="eg: 50, 14 not $15 or $15.32"
                    type="price"
                    but="Next"
                    img="https://static.vecteezy.com/system/resources/previews/001/829/844/non_2x/saving-into-a-piggy-bank-depicts-people-putting-money-into-banking-to-copy-save-and-bank-interest-for-return-on-investment-roi-character-concept-illustration-for-web-landing-page-mobile-apps-free-vector.jpg"
                    newProd={newProd}
                    setProducts={setProducts}
                />
            );
            break;
        case 3:
            return (
                <AddComponent
                    current={current}
                    setupVal={setupVal}
                    setCurrent={setCurrent}
                    hero="Won't you describe your product?"
                    sub="breif description around 50 to 100 words."
                    type="desc"
                    but="Next"
                    img="https://static.vecteezy.com/system/resources/previews/001/829/844/non_2x/saving-into-a-piggy-bank-depicts-people-putting-money-into-banking-to-copy-save-and-bank-interest-for-return-on-investment-roi-character-concept-illustration-for-web-landing-page-mobile-apps-free-vector.jpg"
                    newProd={newProd}
                    setProducts={setProducts}
                />
            );
            break;
        case 4:
            return (
                <AddComponent
                    current={current}
                    setupVal={setupVal}
                    setCurrent={setCurrent}
                    hero="Time for your details"
                    sub="enter your full name."
                    type="admin"
                    but="Next"
                    img="https://static.vecteezy.com/system/resources/previews/022/076/802/non_2x/smiling-woman-send-messages-online-on-cellphone-happy-female-user-chat-on-internet-on-smartphone-virtual-communication-on-gadget-illustration-vector.jpg"
                    newProd={newProd}
                    setProducts={setProducts}
                />
            );
            break;

        case 5:
            return (
                <AddComponent
                    current={current}
                    setupVal={setupVal}
                    setCurrent={setCurrent}
                    hero="Time for your details"
                    sub="your payment email."
                    type="adminMail"
                    but="Publish Pool"
                    img="https://static.vecteezy.com/system/resources/previews/022/076/802/non_2x/smiling-woman-send-messages-online-on-cellphone-happy-female-user-chat-on-internet-on-smartphone-virtual-communication-on-gadget-illustration-vector.jpg"
                    newProd={newProd}
                    setProducts={setProducts}
                />
            );
            break;
        default:
            break;
    }

    return <></>;
};

export default AddProduct;
