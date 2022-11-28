import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import store from "./store";
import App from "./App";
import Cart from "./pages/cart/Cart";
import ProductDetail from "./pages/detail/ProductDetail";
import Home from "./pages/home/Home";
import ProductList from "./pages/products/ProductList";

const routes = createRoutesFromElements(
    <Route
        element={<App />}
    >
        <Route index element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404 | Page Not Found</div>} />
    </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
