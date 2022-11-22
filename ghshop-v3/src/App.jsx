import { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { ToastContainer } from "react-toastify";

import "swiper/css";
import "swiper/css/navigation";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const { products, categories } = useLoaderData();
    const [cart, setCart] = useState([{ productId: 1, quantity: 1 }]);

    const addToCart = (productId, quantity = 1) => {
        const itemIndex = cart.findIndex(
            (item) => item.productId === productId
        );

        if (itemIndex !== -1) {
            const newItem = { ...cart[itemIndex] };
            newItem.quantity += quantity;

            const newCart = [...cart];
            newCart[itemIndex] = newItem;

            setCart(newCart);
        } else {
            setCart([...cart, { productId, quantity }]);
        }
    };

    const increment = (productId) => {
        const index = cart.findIndex((item) => item.productId === productId);

        if (index !== -1) {
            const newCart = [...cart];

            const newItem = { ...newCart[index] };
            newItem.quantity += 1;

            newCart[index] = newItem;

            setCart(newCart);
        }
    };

    const decrement = (productId) => {
        const index = cart.findIndex((item) => item.productId === productId);

        if (index !== -1 && cart[index].quantity > 1) {
            const newCart = [...cart];

            const newItem = { ...newCart[index] };
            newItem.quantity -= 1;

            newCart[index] = newItem;

            setCart(newCart);
        }
    };

    return (
        <div className="app">
            <Header cartLength={cart.length} />

            <Outlet
                context={{
                    products,
                    categories,
                    cart,
                    addToCart,
                    increment,
                    decrement,
                }}
            />

            <Footer />

            <ToastContainer />
        </div>
    );
}

App.loader = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();

        const cateResponse = await fetch(
            "https://fakestoreapi.com/products/categories"
        );
        const categories = await cateResponse.json();

        return { products, categories };
    } catch (err) {
        throw new Error("Không lấy được danh sách sản phẩm");
    }
};

export default App;
