import { createSlice } from "@reduxjs/toolkit";

export interface IUserInterfaceState {
    isNavAsideOpened: boolean;
    isModalOpened: boolean;
}

const initialState: IUserInterfaceState = {
    isNavAsideOpened: false,
    isModalOpened: false,
};

export const uiSlice = createSlice({
    name: "getp/user-interface",

    initialState,

    reducers: {
        toggleNavAside: (state) => {
            if (state.isNavAsideOpened) state.isNavAsideOpened = false;
            else state.isNavAsideOpened = true;
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
