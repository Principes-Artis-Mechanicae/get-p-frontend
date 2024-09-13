import styled from "@emotion/styled";

export const ProjectRequestContentContainer = styled.div`
    position: relative;

    width: 100%;

    margin: 20px 0px;
`;

export const ProjectPayment = styled.input`
    display: block;

    width: 100%;
    height: 54px;

    border-radius: 12px;

    text-align: center;
    font-weight: bold;

    color: #476ff1;
    background-color: #ebedef;
`;

export const ProjectPaymentUnit = styled.span`
    z-index: 1;
    position: absolute;
    top: 50%;
    right: 20px;

    color: #476ff1;
`;
