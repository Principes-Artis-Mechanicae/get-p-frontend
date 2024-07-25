import { NavigateFunction } from "react-router-dom";

import { authService } from "@/services/auth/auth.service";
import { memberService } from "@/services/member/member.service";

import { authAction } from "../slice/auth.slice";
import { RootDispatch } from "../store";

export const signInThunkAction = (email: string, password: string, navigate: NavigateFunction) => {
    return async (dispatch: RootDispatch) => {
        const authResponse = await authService.signIn({
            email,
            password,
        });
        const { accessToken, refreshToken } = authResponse.data.data;

        dispatch(
            authAction.reissueToken({
                accessToken,
                refreshToken,
            }),
        );

        const memberResponse = await memberService.readMemberProfile();
        const { nickname, memberType, profileImageUri } = memberResponse.data.data;

        dispatch(
            authAction.signIn({
                email,
                nickname,
                memberType,
                accessToken,
                refreshToken,
                profileImageUri,
            }),
        );

        navigate("/");
    };
};
