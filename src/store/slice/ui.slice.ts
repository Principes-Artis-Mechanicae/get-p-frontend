import { createSlice } from "@reduxjs/toolkit";

export interface IUserInterfaceState {
    isNavAsideOpened: boolean;
    isModalOpened: boolean;
}

const initialState: IUserInterfaceState = {
    isNavAsideOpened: false,
    isModalOpened: false,
};

const uiSlice = createSlice({
    name: "getp/user-interface",

    initialState,

    reducers: {
        toggleNavAside: (state) => {
            if (state.isNavAsideOpened) state.isNavAsideOpened = false;
            else state.isNavAsideOpened = true;
        },
        closeNavAside: (state) => {
            state.isNavAsideOpened = false;
        },
        showModal: (state) => {
            state.isModalOpened = true;
        },
        hideModal: (state) => {
            state.isModalOpened = false;
        },
    },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
