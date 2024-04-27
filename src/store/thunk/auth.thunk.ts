import { NavigateFunction } from "react-router-dom";

import { authService } from "@/services/auth/auth.service";

import { authAction } from "../slice/auth.slice";
import { GetState, RootDispatch } from "../store";

export const signInThunkAction = (email: string, password: string, navigate: NavigateFunction) => {
    return async (dispatch: RootDispatch) => {
        const response = await authService.signIn({
            email,
            password,
        });

        console.log(response);

        const { accessToken, refreshToken } = response.data.data;

        dispatch(
            authAction.signIn({
                accessToken,
                refreshToken,
            }),
        );
        navigate("/");
    };
};

export const reissueTokenThunkAction = () => {
    return async (dispatch: RootDispatch, getState: GetState) => {
        const { refreshToken } = getState().auth;

        const response = await authService.reissueToken(refreshToken as string);

        const newAccessToken = response.accessToken;
        const newRefreshToken = response.refreshToken;

        dispatch(
            authAction.signIn({
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            }),
        );
    };
};
