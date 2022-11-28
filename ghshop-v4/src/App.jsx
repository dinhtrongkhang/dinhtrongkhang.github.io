import { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { ToastContainer } from "react-toastify";
import { productData } from "./productData";

import "swiper/css";
import "swiper/css/navigation";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { productsLoaded } from "./store/features/products/products.slice";
import { categoriesLoaded } from "./store/features/categories/categories.slice";
// import { productData } from "./productData";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                dispatch(productsLoaded(data));
            });
    }, []);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => {
                dispatch(categoriesLoaded(data));
            });
    }, []);

    return (
        <div className="app">
            <Header />

            <Outlet />

            <Footer />

            <ToastContainer />
        </div>
    );
}

export default App;
