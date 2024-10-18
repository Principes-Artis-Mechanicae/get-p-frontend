import { ModalProps } from "@getp/common/components/overlays/Modal";

import styled from "@emotion/styled";

export const BackDrop = styled.div`
    position: fixed;
    inset: 0;

    z-index: var(--z-modal-backdrop);

    width: 100%;
    height: 100vh;

    background-color: #000;
    opacity: 0.5;
`;

export const Controller = styled.button<{ width: string }>`
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

export const Container = styled.div`
    box-sizing: border-box;

    z-index: var(--z-modal-container);

    width: 100%;

    border-radius: 12px;
    padding: 20px;

    background-color: #fff;
`;

export const Wrapper = styled.div<Pick<ModalProps, "width">>`
    position: fixed;

    z-index: var(--z-modal-wrapper);

    width: ${(props) => props.width};

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
