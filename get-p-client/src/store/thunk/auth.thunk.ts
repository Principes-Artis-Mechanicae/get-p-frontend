import { NavigateFunction } from "react-router-dom";

import { AxiosResponse } from "axios";

import { authService } from "@/services/auth/service";
import { MemberType, SignInResponseBody } from "@/services/auth/types";
import { clientService } from "@/services/client/service";
import { memberService } from "@/services/member/service";
import { peopleService } from "@/services/people/service";

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

        let isRegistered = false;

        if (memberType === MemberType.ROLE_PEOPLE)
            isRegistered = (await peopleService.checkInfoRegistered()) as boolean;

        if (memberType === MemberType.ROLE_CLIENT)
            isRegistered = (await clientService.checkInfoRegistered()) as boolean;

        dispatch(
            authAction.signIn({
                email,
                nickname,
                memberType,
                accessToken,
                refreshToken,
                profileImageUri,
                isRegistered,
                isRegisteredModalOpened: true,
                closeRegisterInfoModalForever: false,
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
