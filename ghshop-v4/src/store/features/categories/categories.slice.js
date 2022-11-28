import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        categoriesLoaded: (state, action) => {
            return action.payload;
        },
    },
});

export const categoriesReducer = categoriesSlice.reducer;
export const { categoriesLoaded } = categoriesSlice.actions;

export const categoriesSelector = (state) => state.categories;
