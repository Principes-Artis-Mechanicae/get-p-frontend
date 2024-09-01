import { MemberType } from "@/services/auth/types";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
    isAuthenticated: boolean;

    accessToken: string | null;
    refreshToken: string | null;

    email: string | null;
    nickname: string | null;
    memberType: MemberType | null;

    profileImageUri: string | null;
}

const initialState: IAuthState = {
    isAuthenticated: false,

    accessToken: null,
    refreshToken: null,

    email: null,
    nickname: null,
    memberType: null,

    profileImageUri: null,
};

const authSlice = createSlice({
    name: "getp/auth",
    initialState,

    reducers: {
        signIn: (state, action: PayloadAction<Omit<IAuthState, "isAuthenticated">>) => {
            state.isAuthenticated = true;

            state.email = action.payload.email;
            state.nickname = action.payload.nickname;
            state.memberType = action.payload.memberType;

            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.profileImageUri = action.payload.profileImageUri;
        },
        signOut: (state) => {
            state.isAuthenticated = false;

            state.accessToken = null;
            state.refreshToken = null;
        },
        reissueToken: (state, action: PayloadAction<Pick<IAuthState, "accessToken" | "refreshToken">>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        updateProfileImageUri: (state, action: PayloadAction<string>) => {
            state.profileImageUri = action.payload;
        },
        updateNickName: (state, action: PayloadAction<string>) => {
            state.nickname = action.payload;
        },
    },
});

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;
