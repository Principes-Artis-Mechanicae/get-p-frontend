import { createSlice } from "@reduxjs/toolkit";

export interface IUserInterfaceState {
    isNavAsideOpened: boolean;
}

const initialState: IUserInterfaceState = {
    isNavAsideOpened: false,
};

export const uiSlice = createSlice({
    name: "getp/user-interface",

    initialState,

    reducers: {
        toggleNavAside: (state) => {
            if (state.isNavAsideOpened) state.isNavAsideOpened = false;
            else state.isNavAsideOpened = true;
        },
    },
});

export const uiActions = uiSlice.actions;
