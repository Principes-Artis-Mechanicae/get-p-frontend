import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;

    width: auto;
    height: 36px;

    margin: 3px;
    border: 1px solid #c4c7cc;
    border-radius: 12px;

    padding: 0px 10px;
`;

export const CloseIcon = styled.img`
    height: 100%;
    width: 15px;

    margin-left: 5px;

    &:hover {
        cursor: pointer;
    }
`;
