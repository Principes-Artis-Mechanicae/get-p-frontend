import styled from "@emotion/styled";

export interface IModal {
    padding: string;
    gap: string;
}

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ModalContainer = styled.div<IModal>`
    display: flex;
    padding: ${(props) => props.padding};
    flex-direction: column;
    align-items: center;
    gap: ${(props) => props.gap};
    border-radius: 0.75rem;
    background-color: #fff;
`;

export const ModalItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    flex-shrink: 0;
`;
