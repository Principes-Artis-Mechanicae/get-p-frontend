import { ApplyPeopleListProps } from ".";

import styled from "@emotion/styled";

export const ListWrapper = styled.div<ApplyPeopleListProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

export const ListContainer = styled.div`
    width: 100%;
    height: calc(100% - 20px);
    overflow: scroll;
`;
