import { useSelector } from "react-redux";

import { SignInPopUp } from "../SignInPopUp/SignInPopUp";
import { AuthGuardBlurFilter, AuthGuardBlurWrapper } from "./AuthGuardBlur.style";
import { RootState } from "@/store/store";

export interface AuthGuardBlurProps {
    withButton?: boolean;
    width: string;
    height: string;
    children: React.ReactNode;
}

export const AuthGuardBlur = ({ withButton = true, width, height, children }: AuthGuardBlurProps) => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    return (
        <AuthGuardBlurWrapper width={width} height={height}>
            {children}
            {!isAuthenticated && <AuthGuardBlurFilter>{withButton && <SignInPopUp />}</AuthGuardBlurFilter>}
        </AuthGuardBlurWrapper>
    );
};
