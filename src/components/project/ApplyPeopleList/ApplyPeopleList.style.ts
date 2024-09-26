import { ApplyPeopleListProps } from "./ApplyPeopleList";
import styled from "@emotion/styled";

export const ApplyPeopleListWrapper = styled.div<ApplyPeopleListProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

export const ApplyPeopleListContainer = styled.div`
    width: 100%;
    height: calc(100% - 20px);
    overflow: scroll;
`;
