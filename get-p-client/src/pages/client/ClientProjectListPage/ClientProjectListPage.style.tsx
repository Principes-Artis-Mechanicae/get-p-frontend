import { ProjectListContainer } from "@/pages/project/ProjectListPage/ProjectListPage.style";

import { mobile, tablet } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const TotalProjectCount = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 740px;

    color: #838181;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    letter-spacing: -0.4px;
`;

export const ClientProjectListWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    ${tablet} {
        gap: 20px;
    }
    ${mobile} {
        gap: 20px;
    }
`;

export const ClientProjectListContainer = styled(ProjectListContainer)`
    margin: 0px;
`;
