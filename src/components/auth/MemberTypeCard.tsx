import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export interface IMemberTypeCard {
    variant: "client" | "people";
    asset: "";
    width: string;
    height: string;
}

export const MemberTypeCard = styled.div<IMemberTypeCard>`
    ${place_center}

    asset: "";
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
