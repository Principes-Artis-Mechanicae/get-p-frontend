import { mobile, tablet } from "@/styles/breakpoint";

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
