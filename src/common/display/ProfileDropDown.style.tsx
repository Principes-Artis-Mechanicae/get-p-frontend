import { place_center, vertical_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const ProfileDropDownWrapper = styled.div`
    width: 260px;

    padding: 20px;
    border-radius: 15px;

    box-shadow: 4px 4px 10px 0px #0000001f;
`;

export const ProfileContainer = styled.div`
    display: flex;

    width: 100%;
    height: 80px;
`;

export const ProfileImgContainer = styled.div`
    position: relative;
    flex-basis: 60px;
    flex-shrink: 0;
    height: 100%;
`;

export const ProfileInfoContainer = styled.div`
    ${vertical_center}
    width: auto;
    padding: 0px 20px;

    p {
        margin: 3px 0px;
    }
`;

export const ProfileImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

export const ProfileTag = styled.span`
    position: absolute;
    bottom: -10px;
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
    margin-top: 40px;
    margin-bottom: 20px;
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
    height: 40px;

    &:last-child {
        color: #676f7c;
    }
    &:hover {
        cursor: pointer;
    }
`;
