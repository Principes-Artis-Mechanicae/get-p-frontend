import styled from "@emotion/styled";

export const ProjectListWrapper = styled.section`
    width: min(100%, 1230px);
    margin: 40px auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
`;

export const ProjectListContainer = styled.section`
    width: 100%;
    margin: 40px auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 한 줄에 3개의 아이템을 배치 */
    gap: 12px;
    justify-items: start; /* 아이템을 왼쪽에 정렬 */
`;
