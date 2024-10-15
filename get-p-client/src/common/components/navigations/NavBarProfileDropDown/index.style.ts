import { place_center, vertical_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const DropDownWrapper = styled.div`
    position: fixed;
    top: 20px;
    right: 0px;

    width: 265px;

    padding: 20px;
    border-radius: 15px;

    box-shadow: 4px 4px 10px 0px #0000001f;

    background-color: #fff;
`;

export const Container = styled.div`
    display: flex;

    width: 100%;
    height: 80px;
`;

export const ImageContainer = styled.div`
    position: relative;
    flex-basis: 60px;
    flex-shrink: 0;
    height: 100%;
`;

export const InfoContainer = styled.div`
    ${vertical_center}
    width: 135px;
    padding-left: 10px;

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const Image = styled.img`
    display: block;
    width: 100%;
    aspect-ratio: 1/1;

    border-radius: 50%;
    object-fit: cover;
`;

export const EditBtn = styled.button`
    ${vertical_center};

    width: 35px;
    height: 100%;

    background: none;

    &:hover {
        cursor: pointer;
    }
`;

export const EditImgContainer = styled.div`
    ${place_center};
    width: 30px;
    height: 30px;

    border-radius: 50%;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.12);
`;

export const EditImage = styled.img`
    width: 15px;
    height: 15px;

    object-fit: cover;
`;

export const Tag = styled.span`
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);

    ${place_center}
    box-sizing: border-box;

    width: 100%;
    height: 25px;

    margin: 0px auto;
    padding: 5px 10px;
    border-radius: 5px;

    color: #fff;
    background-color: #000;
`;

export const Div = styled.hr`
    margin: 10px 0px;
    border: 1px solid #c4c7cc;
`;

export const MenuContainer = styled.ul`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;

    margin: 0;
    padding: 0;

    list-style: none;
`;

export const MenuItem = styled.li`
    ${vertical_center}
    height: 30px;

    &:last-child {
        color: #676f7c;
    }
    &:hover {
        cursor: pointer;
    }
`;
