import styled from "@emotion/styled";

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
    border-radius: 37px;

    width: 100px;
    height: 100px;
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
    span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;

export const SkeletonImage = styled.div`
    width: 66px;
    height: 66px;
    border-radius: 24px;
    margin: 0 auto;

    animation: skeleton-loading 2s infinite;
`;

export const SkeletonInfo = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 8px;
`;

export const SkeletonText = styled.div<{ width: string }>`
    width: ${(props) => props.width};
    height: 16px;

    animation: skeleton-loading 2s infinite;
`;

export const SkeletonHashtags = styled.div`
    display: flex;
    gap: 8px;
`;

export const SkeletonHashtag = styled.div<{ width: string }>`
    width: ${(props) => props.width};
    height: 16px;

    animation: skeleton-loading 2s infinite;
`;
