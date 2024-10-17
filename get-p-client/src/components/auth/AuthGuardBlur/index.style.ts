import { AuthGuardBlurProps } from "@/components/auth/AuthGuardBlur";

import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const Wrapper = styled.div<Pick<AuthGuardBlurProps, "width" | "height">>`
    position: relative;

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    ${place_center}
    flex-direction: column;
    gap: 36px;
`;

export const BlurFilter = styled.div`
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
