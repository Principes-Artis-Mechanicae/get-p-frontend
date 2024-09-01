import { NavigateFunction } from "react-router-dom";

import { AxiosResponse } from "axios";

import { authService } from "@/services/auth/service";
import { SignInResponseBody } from "@/services/auth/types";
import { memberService } from "@/services/member/service";

import { authAction } from "../slice/auth.slice";
import { RootDispatch } from "../store";

export const signInThunkAction = (email: string, password: string, navigate: NavigateFunction) => {
    return async (dispatch: RootDispatch) => {
        const authResponse = (await authService.signIn({
            email,
            password,
        })) as AxiosResponse<SignInResponseBody>;

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

export const updateProfileThunkAction = () => {
    return async (dispatch: RootDispatch) => {
        const memberResponse = await memberService.readMemberProfile();
        const { nickname, profileImageUri } = memberResponse.data.data;

        dispatch(authAction.updateProfileImageUri(profileImageUri));
        dispatch(authAction.updateNickName(nickname));
    };
};
