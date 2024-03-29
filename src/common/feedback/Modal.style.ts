import styled from "@emotion/styled";

export interface IModalContainer {
    height: string;
}

export interface IModalWrapper {
    width: string;
}

export const ModalBackDrop = styled.div`
    position: fixed;
    z-index: 10000;

    width: 100%;
    height: 100vh;

    background-color: #000;
    opacity: 0.5;
`;

export const ModalController = styled.div<{ width: string }>`
    width: ${(props) => props.width};
    height: 40px;

    img {
        width: 40px;
        height: 40px;
        display: block;

        margin-left: auto;
        margin-right: 0px;
    }
`;

export const ModalContainer = styled.div<IModalContainer>`
    box-sizing: border-box;
    position: fixed;
    z-index: 10001;

    width: 100%;
    height: ${(props) => props.height};

    border-radius: 12px;
    padding: 20px;

    background-color: #fff;
`;

export const ModalWrapper = styled.div<IModalWrapper>`
    position: fixed;
    z-index: 10000;

    width: ${(props) => props.width};

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
