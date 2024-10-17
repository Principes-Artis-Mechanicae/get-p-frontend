import { MemberType } from "@/services/auth/types";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ISignUpState {
    signUpSectionIndex: number;
    signUpMemberType: string | null;
    signUpEmailValue: string | null;
    signUpPasswordValue: string | null;
    signUpVerificationCode: string | null;
    signUpAgreementValue: boolean;
}

const initialState: ISignUpState = {
    signUpSectionIndex: 1,
    signUpMemberType: null,
    signUpEmailValue: null,
    signUpPasswordValue: null,
    signUpVerificationCode: null,
    signUpAgreementValue: false,
};

const signUpSlice = createSlice({
    name: "getp/signup",
    initialState,

    reducers: {
        initalizeState: (state) => {
            state.signUpMemberType = null;
            state.signUpEmailValue = null;
            state.signUpPasswordValue = null;
            state.signUpAgreementValue = false;
            state.signUpVerificationCode = null;
        },

        initializeSection: (state) => {
            state.signUpSectionIndex = 1;
        },
        nextSignUpSection: (state) => {
            state.signUpSectionIndex++;
        },
        prevSignUpSection: (state) => {
            state.signUpSectionIndex--;
        },

        setSignUpMemberType: (state, action: PayloadAction<MemberType>) => {
            state.signUpMemberType = action.payload;
        },
        setSignUpEmailValue: (state, action: PayloadAction<string>) => {
            state.signUpEmailValue = action.payload;
        },
        setSignUpPasswordValue: (state, action: PayloadAction<string>) => {
            state.signUpPasswordValue = action.payload;
        },
        setSignUpAgreementValue: (state, action: PayloadAction<boolean>) => {
            state.signUpAgreementValue = action.payload;
        },
        setVerificationCode: (state, action: PayloadAction<string>) => {
            state.signUpVerificationCode = action.payload;
        },
    },
});

export const signUpAction = signUpSlice.actions;
export const signUpReducer = signUpSlice.reducer;
