import { useSelector } from "react-redux";

import { AuthGuardPopUp } from "@/components/auth/AuthGuardPopUp";

import { RootState } from "@/store/store";

import * as Styles from "./index.style";

export interface AuthGuardBlurProps {
    width: SizeProp;
    height: SizeProp;

    withButton?: boolean;
    children: React.ReactNode;
}

export const AuthGuardBlur = ({ withButton = true, width, height, children }: AuthGuardBlurProps) => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    return (
        <Styles.Wrapper width={width} height={height}>
            {children}
            {!isAuthenticated && <Styles.BlurFilter>{withButton && <AuthGuardPopUp />}</Styles.BlurFilter>}
        </Styles.Wrapper>
    );
};
