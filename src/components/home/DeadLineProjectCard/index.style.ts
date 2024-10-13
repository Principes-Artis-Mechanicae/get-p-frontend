import styled from "@emotion/styled";

export const Skeleton = styled.div`
    width: 100%;
    height: 144px;

    border-radius: 12px;

    animation: skeleton-loading 2s infinite;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    height: 144px;

    border-radius: 12px;
    border: 1px solid #ebedef;

    padding: 20px;

    &:hover {
        cursor: pointer;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    flex-shrink: 0;
    flex-basis: 80px;
    height: 100%;
`;

export const Image = styled.img`
    display: block;

    margin: 0px auto;
    border-radius: 24px;

    width: 66px;
    height: 66px;
`;

export const Body = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    margin: 0px 16px;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h1 {
        display: flex;
    }
`;

export const Right = styled.div`
    p {
        text-align: right;
    }
`;

export const Info = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
