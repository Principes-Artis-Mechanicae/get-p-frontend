import styled from "@emotion/styled";

export const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: relative;

    width: 100%;
`;

export const DropdownHeader = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 50px;

    padding: 15px 20px 15px 15px;

    border-radius: 12px;
    background-color: #f9fafa;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`;

export const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5px;

    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1;

    width: 100%;
    box-sizing: border-box;

    padding: 7.5px 10px;

    border-radius: 12px;
    border: 1px solid #dfdfdf;
    background-color: #fff;

    max-height: 300px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
`;

export const Option = styled.option`
    width: 100%;
    padding: 5px;
    border-radius: 8px;
    font-size: 16px;
    white-space: wrap;
    word-break: break-all;
    flex-shrink: 0;
    background-color: transparent;

    &:hover {
        border: none;
        outline: none;
        background-color: #dfdfdf;
        cursor: pointer;
    }
`;
