import styled from "@emotion/styled";

export const CardTag = styled.div`
    color: #676f7c;
    width: 397px;

    font-size: 15px;
    font-style: normal;
    font-weight: 600;

    line-height: 19px;
    letter-spacing: -0.6px;
    margin: 16px 0px 16px 12px;
`;

export const CardWrapper = styled.div<{ isOpen: boolean }>`
    display: flex;
    align-items: flex-start;
    flex-shrink: 0;
    flex-wrap: wrap;

    width: 397px;

    padding: 48px 35px 44px;
    border-radius: 16px;
    border: 1px solid #ebedef;

    background: #fff;

    position: relative;

    overflow: hidden;
    transition: height 0.4s ease-out;
    height: ${({ isOpen }) => (isOpen ? "635px" : "200px")};
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
`;

export const TopContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
`;

export const DdayBox = styled.div`
    width: 40px;
    height: 20px;
    border-radius: 4px;
    background: var(--point, #476ff1);
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MeetingTypeBox = styled.div`
    color: var(--content, #c4c7cc);
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
`;

export const ApplicantCount = styled.div`
    color: #878787;
    font-size: 16px;
    font-weight: 600;
    margin-top: 4px;
    margin-bottom: 16px;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const HeaderItem = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardBodyContainer = styled.div<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 32px;
    overflow: hidden;
    justify-content: space-between;

    transition:
        max-height 0.4s ease-out,
        opacity 0.4s ease-out;
    max-height: ${({ isOpen }) => (isOpen ? "600px" : "0")};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;

export const CardUpperSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid #ebedef;
`;

export const ProjectInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: end;
    margin-top: 27px;
    margin-bottom: 20px;
    gap: 12px;
`;

export const CardLowerSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 155px;
`;

export const ProjectTitle = styled.div`
    color: #000;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
`;

export const CommentBox = styled.div`
    width: 320px;
    height: 155px;
    display: block;
    overflow-y: auto;
    color: #7d7d7d;
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;
`;

export const DurationBox = styled.div`
    color: #000;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 4px;
    width: 100%;
`;

export const DateBox = styled.div`
    display: inline-block;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
`;

export const StatusContainer = styled.div`
    display: flex;
    padding: 8px 20px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #f4f4f4;
`;

export const StatusText = styled.div`
    color: #818181;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
`;

export const HashtagWrapper = styled.div`
    display: flex;
    gap: 9.6px;
    margin-top: 16px;
`;

export const HashtagContainer = styled.div`
    display: inline-flex;
    height: 24px;
    padding: 4.8px 7.2px;
    justify-content: center;
    align-items: center;
    border-radius: 4.8px;
    background: #ecf0fe;
    flex-shrink: 0;
    box-sizing: border-box;
`;

export const HashtagItem = styled.div`
    color: var(--point, #476ff1);
    font-size: 9.6px;
    font-weight: 600;
`;

export const PaymentBox = styled.div`
    color: #000;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
`;
