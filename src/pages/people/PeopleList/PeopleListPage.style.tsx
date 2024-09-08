import styled from "@emotion/styled";

export const PeopleListWrapper = styled.section`
    width: min(100%, 1080px);
    margin: 40px auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PeopleListContainer = styled.section`
    width: auto;
    margin: 40px auto;

    gap: 24px 0px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
