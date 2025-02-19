import { mobile, tablet } from "@getp/apps/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    padding: 20px;
`;

export const Container = styled.div`
    display: flex;
    width: min(100%, 1200px);
    margin: 0px auto;

    ${tablet} {
        flex-direction: column;
    }
    ${mobile} {
        flex-direction: column;
    }
`;

export const Header = styled.h1`
    text-align: center;
    font-size: 24px;

    margin: 30px 0px;
`;

export const Aside = styled.aside`
    display: block;
    margin: 18px;
    width: 340px;
    flex-shrink: 0;

    ${tablet} {
        width: 100%;
    }
    ${mobile} {
        width: 100%;
    }
`;

export const Main = styled.article`
    display: block;
    width: 100%;
    margin: 18px;
`;

export const DateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 14px;
`;

export const DateInfo = styled.div`
    width: 100%;
`;

export const Label = styled.label`
    color: #676f7c;
`;

export const Contents = styled.div`
    height: 200px;
    overflow-y: scroll;
`;

export const ContentContainer = styled.div`
    margin: 10px 0px;
    border-bottom: 1px solid #e0e0e0;
`;

export const AttachmentFile = styled.div`
    display: flex;
    padding: 16px 0px;

    color: black;
    border-bottom: 1px solid #e0e0e0;

    a {
        color: black;
    }
`;

export const AttachmentFiles = styled.div`
    margin: 10px 0px;
`;

export const TeamContainer = styled.div`
    margin: 10px 0px;
`;

export const TeamWrapper = styled.div``;
