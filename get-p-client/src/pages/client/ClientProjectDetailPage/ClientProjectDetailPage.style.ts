import { mobile, tablet } from "@getp/apps/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    max-width: 1200px;
    gap: 14px;
    margin: 20px auto;

    ${tablet} {
        flex-direction: column;
    }
    ${mobile} {
        flex-direction: column;
    }
`;

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 14px;

    width: 340px;

    ${tablet} {
        width: 100%;
    }
    ${mobile} {
        width: 100%;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 120px;

    width: 70%;

    ${tablet} {
        width: 100%;
    }
    ${mobile} {
        width: 100%;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const SectionTitle = styled.h2`
    color: #476ff1;
    span {
        font-weight: 900;
        color: #476ff1;
    }
`;

export const Item = styled.div`
    margin: 4px 0px;

    border-bottom: 1px solid #ebedef;

    & > label {
        display: block;
        margin: 4px 0px;
        color: #676f7c;
    }
`;

export const TextDisplay = styled.div`
    padding: 8px 0px;
`;

export const TextAreaDisplay = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 8px 0px;

    resize: none;

    font-size: 16px;
`;

export const PortfolioDisplay = styled.a`
    display: flex;
    align-items: center;

    width: 100%;
    height: 46px;

    margin: 8px 0px;
    padding: 0px 14px;
    border-radius: 12px;
    background-color: #f8f6f8;

    text-decoration: underline;

    text-align: left;
`;
