import { createSlice } from "@reduxjs/toolkit";

export interface IPage {
    page: number;
}

export const initialState: IPage = {
    page: 1,
};

export const pageSlice = createSlice({
    name: "getp/page",
    initialState: initialState,

    reducers: {
        nextPage: (state) => {
            state.page++;
        },
        prevPage: (state) => {
            state.page--;
        },
    },
});

export const pageActions = pageSlice.actions;
