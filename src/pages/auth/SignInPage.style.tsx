import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export interface ISeek {
    variant: "seek" | "signup";
}

export const SigninCardBody = styled.div`
    ${place_center}
    display: flex;
    align-items: center;

    border-radius: 12px;
    border: none;
    box-shadow: 10px 20px 40px 0px rgba(0, 0, 0, 0.15);
`;

export const SigninCardWrapper = styled.div`
    width: 430px;
    height: 830px;
    z-index: 1;

    border-radius: 12px;
    border: none;
    box-shadow: 10px 20px 40px 0px rgba(0, 0, 0, 0.15);
    margin-left: -80px;
    margin-top: -40px;

    padding: 45px;

    background-color: #fff;
`;

export const SigninHeader = styled.p`
    margin: 60px 0px;
`;

export const SigninContainer = styled.div`
    width: 100%;
`;

export const SigninItem = styled.div`
    width: 100%;
    margin: 30px 0px;
`;

export const SeekBtn = styled.button<ISeek>`
    width: 100px;
    height: 25px;

    font-weight: bold;
    flex-shrink: 0;

    background-color: transparent;
    color: ${(props) => {
        switch (props.variant) {
            case "seek":
                return "#676f7c";
            case "signup":
                return "#476FF1";
        }
    }};
`;

export const GotoSignup = styled.div`
    ${place_center}

    width: 100%;
    height: 54px;

    margin: 220px 0px;

    border-radius: 12px;

    background-color: #f8f6f8;

    color: #000;

    border: none;
`;
