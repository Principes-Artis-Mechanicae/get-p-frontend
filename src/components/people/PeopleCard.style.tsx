import { mobile } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export interface IPeopleCardWrapper {
    width: string;
    height: string;
}

export interface IPeopleCardImg {
    src: string;
}

export const PeopleCardWrapper = styled.div`
    width: 100%;

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

export const PeopleCardImg = styled.img<IPeopleCardImg>`
    src: ${(props) => props.src};
    width: 100px;
    height: 100px;
    object-fit: cover;

    ${mobile} {
        width: 80px;
        height: 80px;
    }
`;

export const PeopleCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 8px;
    text-align: left;
    width: 100%;
    height: 100%;
`;

export const PeopleCardHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    width: 100%;
`;

export const PeopleCardComment = styled.div`
    width: 100%;

    display: -webkit-box;
    -webkit-line-clamp: 2; /* 두 줄로 제한 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;
