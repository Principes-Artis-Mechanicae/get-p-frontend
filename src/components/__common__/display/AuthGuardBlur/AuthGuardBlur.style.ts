import { place_center } from "@/styles/utils";

import { AuthGuardBlurProps } from "./AuthGuardBlur";
import styled from "@emotion/styled";

export const AuthGuardBlurWrapper = styled.div<Pick<AuthGuardBlurProps, "width" | "height">>`
    position: relative;

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    ${place_center}
    flex-direction: column;
    gap: 36px;
`;

export const AuthGuardBlurFilter = styled.div`
    z-index: 100;
    position: absolute;
    left: 0;
    top: 0;

    ${place_center};

    width: 100%;
    height: 100%;

    /* filter: blur(4px); */
    backdrop-filter: blur(5px);
`;
