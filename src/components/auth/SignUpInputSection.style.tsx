import styled from "@emotion/styled";

export const SignUpSectionWrapper = styled.section`
    width: min(100%, 500px);
    margin: 0px auto;
`;

export const SignUpSectionHeader = styled.p`
    margin: 50px 0px;
    text-align: center;
`;

export const SignUpSectionContainer = styled.div`
    width: 100%;
`;

export const SignUpItem = styled.div`
    width: 100%;
    margin: 30px 0px;
`;

export const CheckBoxContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 12px 0px;
`;

export const DetailBtn = styled.button`
    width: 60px;
    height: 25px;
    font-weight: bold;
    text-decoration: underline;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
`;
