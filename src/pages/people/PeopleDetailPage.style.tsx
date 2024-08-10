import { mobile } from "@/styles/breakpoint";
import { place_center, vertical_center } from "@/styles/utils";

import styled from "@emotion/styled";

interface ITextbox {
    width: string;
}

export const PeopleDetailWrapper = styled.section`
    width: min(100%, 1100px);

    display: flex;
    align-items: flex-start;

    margin: 40px auto;

    gap: 30px;

    ${mobile} {
        flex-direction: column;
        align-items: center;
    }
`;

export const ProfileContainer = styled.div`
    width: 30%;

    ${vertical_center}

    gap: 30px;
    margin-top: 64px;

    ${mobile} {
        width: 100%;
        display: flex;
        flex-direction: column;

        margin-top: 0px;
    }
`;

export const HashtagWrapper = styled.div`
    width: 100%;

    ${vertical_center}
    align-items: center;

    gap: 14px;
    padding: 20px;

    border-radius: 12px;

    background-color: #f9fafa;
    color: #676f7c;

    ${mobile} {
        gap: 24px;
    }
`;

export const HashtagContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-start;

    gap: 8px;

    flex-wrap: wrap;
`;

export const HashtagCard = styled.div`
    width: auto;

    ${place_center}

    padding: 6px 12px;

    border-radius: 12px;

    background-color: #ecf0fe;
    color: #476ff1;

    white-space: nowrap;
`;

export const InfoContainer = styled.div`
    width: 70%;

    ${vertical_center}
    align-items: flex-start;

    gap: 36px;

    ${mobile} {
        width: 100%;
    }
`;

export const TextboxContainer = styled.div`
    width: 100%;

    ${vertical_center}
    align-items: flex-start;

    gap: 20px;
`;

export const Textbox = styled.p<ITextbox>`
    width: ${(props) => props.width};

    ${vertical_center}

    padding-bottom: 12px;

    border: 0;
    border-bottom: 1px solid #ebedef;

    font-size: 16px;

    &:focus {
        outline: none;
        border-bottom: return "1.5px solid #476ff1";
    }
`;

export const BadgeContainer = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 8px;
`;

export const PortfolioCard = styled.button`
    width: 100%;
    height: 54px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding-left: 10px;

    background-color: #f8f6f8;

    font-size: 14px;
    font-weight: bold;
    text-decoration: underline;
`;

export const PortfolioContainer = styled.div`
    width: 100%;

    ${vertical_center}

    gap: 12px;
`;

export const ResponsivePCHeading = styled.h1`
    display: flex;

    ${mobile} {
        display: none;
    }
`;

export const ResponsiveMobileHeading = styled.h1`
    display: none;

    ${mobile} {
        display: block;
    }
`;
