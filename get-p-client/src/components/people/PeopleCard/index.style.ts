import { mobile } from "@getp/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    height: 170px;

    padding: 24px;

    border-radius: 12px;
    border: 1px solid #ebedef;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    &:hover {
        cursor: pointer;
    }
`;

export const Image = styled.img`
    display: block;
    width: 100px;
    height: 100px;

    border-radius: 37px;

    object-fit: cover;

    ${mobile} {
        width: 80px;
        height: 80px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 8px;
    text-align: left;
    width: 100%;
    height: 100%;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    width: 100%;
`;

export const Comment = styled.div`
    width: 100%;

    display: -webkit-box;
    -webkit-line-clamp: 2; /* 두 줄로 제한 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SkeletonImage = styled.div`
    width: 100px;
    aspect-ratio: 1/1;
    border-radius: 37px;
    animation: skeleton-loading 1.5s infinite;
`;

export const SkeletonText = styled.div<{ width: string }>`
    width: ${(props) => props.width};
    height: 16px;
    border-radius: 4px;
    animation: skeleton-loading 1.5s infinite;
`;

export const SkeletonComment = styled.div`
    width: 100%;
    height: 32px;
    border-radius: 4px;
    animation: skeleton-loading 1.5s infinite;
`;
