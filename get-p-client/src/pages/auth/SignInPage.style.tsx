import { mobile } from "@getp/styles/breakpoint";

import styled from "@emotion/styled";

export interface ISeek {
    variant: "seek" | "signup";
}

export const SignInWrapper = styled.div`
    position: relative;
    width: min(100%, 1060px);

    margin: 50px auto;
    border: none;
    border-radius: 12px;

    background-color: #476ff1;
    box-shadow: 10px 20px 40px 0px #00000026;

    ${mobile} {
        background-color: transparent;
        margin: 30px auto;
    }
`;

export const SignInBackground = styled.div`
    display: flex;

    width: 100%;
    height: 800px;

    border-radius: 12px;

    img {
        display: block;
        width: 60%;

        object-fit: contain;
    }
    ${mobile} {
        img {
            display: none;
        }
    }
`;

export const SignInContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 400px;
    height: 800px;

    border-radius: 12px;
    padding: 40px;

    background-color: #fff;

    img {
        margin-bottom: 50px;
    }

    ${mobile} {
        right: 50%;
        transform: translateX(50%);
        width: 100%;

        padding: 30px;
    }
`;

export const SignInBody = styled.div`
    display: block;
`;

export const SignInItem = styled.div`
    width: 100%;
    margin: 20px 0px;
`;

export const OptionItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
`;

export const SignInFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 54px;

    padding: 10px;
    border-radius: 12px;

    color: #000;
    background-color: #f8f6f8;
`;
