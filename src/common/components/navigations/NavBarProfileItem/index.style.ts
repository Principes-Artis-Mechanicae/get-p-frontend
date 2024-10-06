import styled from "@emotion/styled";

export const Container = styled.div`
    width: 40px;
    height: 40px;

    border-radius: 50%;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }
`;

export const Image = styled.img`
    display: block;
    width: 40px;
    height: 40px;
    object-fit: cover;
`;
