import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    currentPage: 0,
    filter: [],
    displayStyle: "grid",
};

const PAGE_SIZE = 9;

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productsLoaded: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        pageChanged: (state, action) => {
            return { ...state, currentPage: action.payload };
        },
        displayChanged: (state, action) => {
            return {
                ...state,
                displayStyle: action.payload,
            };
        },
        filterChanged: (state, action) => {
            return {
                ...state,
                currentPage: 0,
                filter: action.payload,
            };
        },
    },
});

export const productsReducer = productsSlice.reducer;
export const { productsLoaded, pageChanged, displayChanged, filterChanged } =
    productsSlice.actions;

export const selectAllProducts = (state) => state.products.data;
export const selectProductById = (productId) => (state) =>
    state.products.data.find((product) => product.id == productId);
export const selectProductsList = (state) => {
    const filteredProducts = state.products.data.filter((product) => {
        if (state.products.filter.length === 0) return true;
        else return state.products.filter.includes(product.category);
    });

    const total = filteredProducts.length;
    const totalPage = Math.ceil(total / PAGE_SIZE);

    const productsByPage = filteredProducts.slice(
        state.products.currentPage * PAGE_SIZE,
        (state.products.currentPage + 1) * PAGE_SIZE
    );

    return {
        categories: state.categories,
        products: productsByPage,
        currentPage: state.products.currentPage,
        totalPage,
        displayStyle: state.products.displayStyle,
        pageChanged,
        displayChanged,
        filterChanged,
    };
};
