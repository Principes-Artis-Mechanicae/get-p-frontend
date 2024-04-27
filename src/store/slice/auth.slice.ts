import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
    accessToken: string | null;
    refreshToken: string | null;
}

const initialState: IAuthState = {
    accessToken: null,
    refreshToken: null,
};

const authSlice = createSlice({
    name: "getp/auth",
    initialState,

    reducers: {
        signIn: (state, action: PayloadAction<IAuthState>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        signOut: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
        },
    },
});

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;
