import { Z_MODAL_BACKDROP, Z_MODAL_CONTAINER, Z_MODAL_WRAPPER } from "@/styles/zindex";

import styled from "@emotion/styled";

// export interface IModalContainer {
//
// }

export interface IModalWrapper {
    width: string;
}

export const ModalBackDrop = styled.div`
    position: fixed;
    inset: 0;
    z-index: ${Z_MODAL_BACKDROP};

    width: 100%;
    height: 100vh;

    background-color: #000;
    opacity: 0.5;
`;

export const ModalController = styled.button<{ width: string }>`
    display: block;
    width: ${(props) => props.width};
    height: 40px;

    background-color: transparent;

    img {
        width: 40px;
        height: 40px;
        display: block;

        margin-left: auto;
        margin-right: 0px;

        &:hover {
            cursor: pointer;
        }
    }
`;

export const ModalContainer = styled.div`
    box-sizing: border-box;

    z-index: ${Z_MODAL_CONTAINER};

    width: 100%;

    border-radius: 12px;
    padding: 20px;

    background-color: #fff;
`;

export const ModalWrapper = styled.div<IModalWrapper>`
    position: fixed;

    z-index: ${Z_MODAL_WRAPPER};

    width: ${(props) => props.width};

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
