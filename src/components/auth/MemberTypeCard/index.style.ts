import { MemberTypeCardProps } from "@/components/auth/MemberTypeCard";

import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const Wrapper = styled.button<Omit<MemberTypeCardProps, "imgSrc" | "label">>`
    ${place_center}

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border-radius: 16px;
    border: ${(props) => (props.selected ? "2px solid #476ff1" : "0px")}; // (임시) 선택된 스타일

    background-color: ${(props) => {
        switch (props.variant) {
            case "client":
                return "#ECF0FE";
            case "people":
                return "#F9FAFA";
        }
    }};

    color: ${(props) => {
        switch (props.variant) {
            case "client":
                return "#476FF1";
            case "people":
                return "#676F7C";
        }
    }};

    &:hover {
        cursor: pointer;
    }
`;

export const Image = styled.img`
    display: block;
`;
