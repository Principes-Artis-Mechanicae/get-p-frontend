import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ISignUpState {
    signUpSectionIndex: number;
    signUpMemberType: string | null;
    signUpEmailValue: string | null;
    signUpPasswordValue: string | null;
    signUpPasswordVerifyValue: string | null;
    signUpAgreementValue: boolean;
}

const initialState: ISignUpState = {
    signUpSectionIndex: 1,
    signUpMemberType: null,
    signUpEmailValue: null,
    signUpPasswordValue: null,
    signUpPasswordVerifyValue: null,
    signUpAgreementValue: false,
};

export const signUpSlice = createSlice({
    name: "getp/signup",
    initialState,

    reducers: {
        initalizeState: (state) => {
            state.signUpSectionIndex = 1;
            state.signUpMemberType = null;
            state.signUpEmailValue = null;
            state.signUpPasswordValue = null;
            state.signUpPasswordVerifyValue = null;
            state.signUpAgreementValue = false;
        },

        nextSignUpSection: (state) => {
            state.signUpSectionIndex++;
        },
        prevSignUpSection: (state) => {
            state.signUpSectionIndex--;
        },

        setSignUpMemberType: (state, action: PayloadAction<"ROLE_PEOPLE" | "ROLE_CLIENT">) => {
            state.signUpMemberType = action.payload;
        },
        setSignUpEmailValue: (state, action: PayloadAction<string>) => {
            state.signUpEmailValue = action.payload;
        },
        setSignUpPasswordValue: (state, action: PayloadAction<string>) => {
            state.signUpPasswordValue = action.payload;
        },
        setSignUpPasswordVerifyValue: (state, action: PayloadAction<string>) => {
            state.signUpPasswordVerifyValue = action.payload;
        },
        setSignUpAgreementValue: (state, action: PayloadAction<boolean>) => {
            state.signUpAgreementValue = action.payload;
        },
    },
});

export const signUpAction = signUpSlice.actions;
