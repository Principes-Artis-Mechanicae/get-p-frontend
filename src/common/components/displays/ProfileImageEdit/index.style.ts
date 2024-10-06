import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const Container = styled.div`
    ${place_center}
    position: relative;

    width: 124px;
    height: 120px;
`;

export const Image = styled.img`
    width: 120px;
    height: 120px;

    border-radius: 50%;
    object-fit: contain;
`;

export const EditBtn = styled.label`
    ${place_center}
    position: absolute;
    bottom: 0;
    right: 0;

    width: 40px;
    height: 40px;

    background-color: #fff;

    border: none;
    border-radius: 50%;
    box-shadow: 2px 3px 9px rgba(0, 0, 0, 0.15);

    cursor: pointer;
`;

export const PencilIcon = styled.img`
    color: #8c929c;
`;

export const InputFile = styled.input`
    display: none;
`;
