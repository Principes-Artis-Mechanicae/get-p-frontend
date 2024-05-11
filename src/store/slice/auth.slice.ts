import { MemberType } from "@/services/auth/auth.types";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
    accessToken: string | null;
    refreshToken: string | null;

    email: string | null;
    nickname: string | null;
    memberType: MemberType | null;
}

const initialState: IAuthState = {
    accessToken: null,
    refreshToken: null,

    email: null,
    nickname: null,
    memberType: null,
};

const authSlice = createSlice({
    name: "getp/auth",
    initialState,

    reducers: {
        signIn: (state, action: PayloadAction<IAuthState>) => {
            state.email = action.payload.email;
            state.nickname = action.payload.nickname;
            state.memberType = action.payload.memberType;

            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        signOut: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
        },
        reissueToken: (state, action: PayloadAction<Pick<IAuthState, "accessToken" | "refreshToken">>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
    },
});

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;
