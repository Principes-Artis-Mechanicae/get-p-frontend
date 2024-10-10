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

    isRegistered: boolean | null;
    isRegisteredModalOpened: boolean;
    closeRegisterInfoModalForever: boolean;
}

const initialState: IAuthState = {
    isAuthenticated: false,

    accessToken: null,
    refreshToken: null,

    email: null,
    nickname: null,
    memberType: null,

    profileImageUri: null,

    isRegistered: null,
    isRegisteredModalOpened: false,
    closeRegisterInfoModalForever: false,
};

const authSlice = createSlice({
    name: "getp/auth",
    initialState,

    reducers: {
        signIn: (state, action: PayloadAction<Omit<IAuthState, "isAuthenticated" | "isRegisteredModalVisible">>) => {
            state.isAuthenticated = true;

            state.email = action.payload.email;
            state.nickname = action.payload.nickname;
            state.memberType = action.payload.memberType;

            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.profileImageUri = action.payload.profileImageUri;

            state.isRegistered = action.payload.isRegistered;
            state.isRegisteredModalOpened = action.payload.isRegisteredModalOpened;
        },
        signOut: (state) => {
            state.isAuthenticated = false;

            state.accessToken = null;
            state.refreshToken = null;
            state.memberType = null;
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
        registerInfo: (state) => {
            state.isRegistered = true;
        },
        openRegisterInfoModal: (state) => {
            if (state.isAuthenticated && !state.isRegistered && !state.closeRegisterInfoModalForever)
                state.isRegisteredModalOpened = true;
        },
        closeRegisterInfoModal: (state) => {
            state.isRegisteredModalOpened = false;
        },
        closeRegisterInfoModalForever: (state) => {
            state.isRegisteredModalOpened = false;
            state.closeRegisterInfoModalForever = true;
        },
    },
});

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;
