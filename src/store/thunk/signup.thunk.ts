import { authService } from "@/services/auth/auth.service";
import { MemberType } from "@/services/auth/auth.types";

import { signUpAction } from "../slice/signup.slice";
import { RootDispatch, store } from "../store";

export const signUpThunkAction = () => {
    return async (dispatch: RootDispatch, getState: typeof store.getState) => {
        // 회원가입 POST 요청

        const {
            signUpMemberType,
            signUpEmailValue,
            signUpPasswordValue,
            signUpAgreementValue,
            signUpVerificationCode,
        } = getState().signUp;

        await authService.signUp({
            memberType: signUpMemberType as MemberType,
            email: signUpEmailValue as string,
            password: signUpPasswordValue as string,
            verificationCode: signUpVerificationCode as string,
            serviceTerms: [
                {
                    tag: "GET-P 서비스 약관",
                    agreed: signUpAgreementValue,
                },
            ],
        });

        dispatch(signUpAction.nextSignUpSection());
        dispatch(signUpAction.initalizeState());
    };
};
