import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export interface IMemberTypeCardWrapper {
    variant: "client" | "people";
    width: string;
    height: string;
}

export interface IMemberTypeCardImg {
    src: string;
}

export const MemberTypeCardWrapper = styled.button<IMemberTypeCardWrapper>`
    ${place_center}
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border-radius: 16px;
    border: none;

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

export const MemberTypeCardImg = styled.div<IMemberTypeCardImg>`
    src: ${(props) => props.src};
`;
