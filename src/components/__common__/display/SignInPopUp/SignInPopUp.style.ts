import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const SignInPopUpWrapper = styled.div`
    width: min(80%, 300px);

    ${place_center};
    flex-direction: column;
    gap: 10px;

    padding: 20px;

    border-radius: 12px;
    border: 1px solid #ebedef;
`;

export const SignInPopUpContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const SignUpButton = styled.button`
    background-color: transparent;

    font-size: 14px;
    font-weight: bold;
    color: #676f7c;
    text-decoration: underline;

    padding: 0;
    margin: 0;
    border: none;

    cursor: pointer;
`;
