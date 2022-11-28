import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart/cart.slice";
import { categoriesReducer } from "./features/categories/categories.slice";
import { productsReducer } from "./features/products/products.slice";

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer,
    },
});

export default store;
