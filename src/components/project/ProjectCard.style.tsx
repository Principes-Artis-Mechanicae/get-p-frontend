import { mobile, tablet } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const ProjectCardWrapper = styled.div`
    display: flex;
    width: 397px;
    height: 459px;
    padding: 48px 35px 44px 35px;
    align-items: flex-start;
    align-content: flex-start;
    gap: 40px 103px;
    flex-shrink: 0;
    flex-wrap: wrap;
    border-radius: 16px;
    border: 1px solid #ebedef;
    background: #fff;
    box-sizing: border-box;
    position: relative;

    ${tablet} {
        width: 100%;
    }
    ${mobile} {
        width: 100%;
    }
`;

export const ApplicantsCountItem = styled.div`
    position: absolute;
    left: 35px;
    top: 79px;
    color: #878787;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    letter-spacing: -0.64px;
`;

export const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
    flex: 1 0 0;
    height: 100%;
`;

export const ProjectCardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
`;

export const ProjectHeaderItem = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProjectCardItemContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 32px;
    flex: 1 0 0;
`;

export const ProjectCardItemUpper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProjectCarItemLower = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 114px;
    align-self: stretch;
`;

export const ProjectTitle = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 120% */
    letter-spacing: -0.8px;
`;

export const ProjectCardComment = styled.div<{ width: string }>`
    width: 320px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    color: #7d7d7d;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 16.8px */
    letter-spacing: -0.35px;
    margin-top: 16px;
`;

export const ExpectedDuration = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.64px;
    margin-bottom: 4px;
`;

export const ApplicationDate = styled.div`
    display: inline-block;
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.56px;
`;

export const StatusBox = styled.div<{ status: string }>`
    display: flex;
    padding: 8px 20px;
    height: 40px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    background: ${({ status }) =>
        status === "APPLYING"
            ? "#f4f4f4" // 회색
            : status === "ACTIVE"
              ? "#F1FAFF" // 파란색
              : "#E2F9E8"};
    box-sizing: border-box;
`;

export const StatusText = styled.div<{ status: string }>`
    color: ${({ status }) =>
        status === "APPLYING"
            ? "#818181" // 회색
            : status === "ACTIVE"
              ? "#2577C3E5" // 파란색
              : "#69CA7E"};
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 171.429% */
    letter-spacing: -0.56px;
`;

export const HashtagWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 9.6px;
`;

export const HashTagContainer = styled.div`
    display: inline-flex;
    height: 24px;
    padding: 4.8px 7.2px;
    justify-content: center;
    align-items: center;
    gap: 14.4px;
    border-radius: 4.8px;
    background: #ecf0fe;
    flex-shrink: 0; /* 컨테이너가 줄어들지 않도록 설정 */
    box-sizing: border-box;
`;

export const HashTagItem = styled.div`
    color: var(--point, #476ff1);
    font-family: Pretendard;
    font-size: 9.6px;
    font-style: normal;
    font-weight: 600;

    // line-heght: 28.8px; /* 300% *///
    letter-spacing: -0.384px;
`;

export const Price = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 100% */
    letter-spacing: -0.96px;
`;
