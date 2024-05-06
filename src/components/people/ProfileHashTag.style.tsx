import styled from "@emotion/styled";

export interface IProfileHashTagWrapper {
    width: string;
    minHeight: string;
}

export const ProfileHashTagWrapper = styled.div<IProfileHashTagWrapper>`
    width: ${(props) => props.width};
    min-height: ${(props) => props.minHeight};

    background-color: #f9fafa;

    border-radius: 12px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
`;

export const ProfileHashTagContainer = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const ProfileHashTagItem = styled.div`
    background-color: #ecf0fe;
    color: #476ff1;

    font-size: 16px;
    font-weight: bold;

    padding: 6px 12px;
    border-radius: 12px;
`;

export const ProfileHashTagInput = styled.input`
    width: 90%;
    height: 40px;

    color: #676f7c;

    border: 1px solid #ecf0fe;
    border-radius: 12px;

    padding-left: 10px;
    margin-top: auto;

    &:focus {
        outline: none;
        border-color: #ecf0fe;
    }
`;
