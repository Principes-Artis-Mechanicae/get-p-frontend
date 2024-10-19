import styled from "@emotion/styled";

export const Wrapper = styled.div<BoxSizing>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 8px;
    text-align: left;
    width: 100%;
    height: 100%;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    width: 100%;
`;

export const Bar = styled.input`
    background-color: #f9fafa;
    background-image: url("searchicon.png");
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding-left: 40px;
    width: 90%;
    /* width: inherit; */
    padding: 13px;
`;

export interface ITotalProjectIcon {
    checked: boolean;
}

export const OptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const CheckBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    cursor: pointer;
`;

export const OptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`;

export const OptionItem = styled.button<{ $selected: boolean }>`
    background-color: transparent;
    outline: none;
    border: none;

    cursor: pointer;

    color: ${({ $selected }) => ($selected ? "#476ff1" : "#000")};
`;
