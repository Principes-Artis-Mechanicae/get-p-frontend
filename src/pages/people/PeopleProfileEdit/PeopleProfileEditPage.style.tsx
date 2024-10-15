import { mobile, tablet } from "@/styles/breakpoint";
import { vertical_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const PeopleProfileEditPageWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 20px;

    margin: 100px auto;

    ${tablet} {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
    ${mobile} {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

export const PeopleProfileEditPageAside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 30%;
    max-width: 260px;

    ${tablet} {
        width: 100%;
        max-width: 500px;
        flex-direction: row;
    }
    ${mobile} {
        width: 100%;
        max-width: 500px;
    }
`;

export const PeopleProfileEditPageContainer = styled.div`
    width: 60%;
    max-width: 1200px;

    ${tablet} {
        max-width: 500px;
    }
    ${mobile} {
        width: 100%;
    }
`;

export const PeopleProfileEditForm = styled.div`
    margin: 20px 0px;
`;

export const PeopleProfileEditFormItem = styled.div`
    margin: 20px 0px;
`;

export const FileInput = styled.input`
    display: none;
`;

export const PortfolioContainer = styled.div`
    width: 100%;

    ${vertical_center}

    gap: 12px;
`;

export const PortfolioCard = styled.li`
    width: 100%;
    height: 54px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px 20px;
    border-radius: 12px;
    box-sizing: border-box;

    background-color: #f9fafa;

    font-size: 14px;
    font-weight: normal;
    text-decoration: none;

    cursor: pointer;
`;

export const NameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const DeleteButton = styled.button`
    background-color: transparent;
    &:hover {
        transform: scale(1.15);
        cursor: pointer;
    }
`;

export const OpenButton = styled.a`
    color: #476ff1;
    font-weight: bold;
    text-decoration: none;
`;
