import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
    nickname: string | null;
    accessToken: string | null;
    refreshToken: string | null;
}

const initialState: IAuthState = {
    nickname: null,
    accessToken: null,
    refreshToken: null,
};

export const authSlice = createSlice({
    name: "getp/auth",
    initialState,

    reducers: {
        signIn: (state, action: PayloadAction<IAuthState>) => {
            state.nickname = action.payload.nickname;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        signOut: (state) => {
            state.nickname = null;
            state.accessToken = null;
            state.refreshToken = null;
        },
    },
});

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;
