import { useEffect, useState } from "react";
import { DropDownContainer, DropDownItemsContainer, DropDownItemWrapper, DropDownWrapper } from "./index.style";
import { SelectedItem, useDropDown } from "./DropDownContext";
import { Text } from "../Text";

import chevronDown from "../../assets/chevron_down.svg";

export interface DropDownProps {
    width: string;
    height: string;
    itemContainerHeight: string;

    children?: React.ReactNode;

    placeholder: string;
    onValueChange?: (value: SelectedItem) => void;
}

export interface DropDownItemProps extends SelectedItem {}

export const DropDown = ({
    width,
    height,
    children,
    placeholder,
    itemContainerHeight,
    onValueChange,
    ...rest
}: DropDownProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const { selected } = useDropDown();

    useEffect(() => {
        onValueChange && onValueChange(selected);
    }, [selected]);

    return (
        <DropDownWrapper width={width} {...rest}>
            <DropDownContainer height={height} isOpened={isOpened} onClick={() => setIsOpened((isOpened) => !isOpened)}>
                <Text size="l">{selected.index === -1 ? placeholder : selected.value}</Text>
                <img src={chevronDown} />
            </DropDownContainer>
            <DropDownItemsContainer isOpened={isOpened} maxHeight={itemContainerHeight}>
                {children}
            </DropDownItemsContainer>
        </DropDownWrapper>
    );
};

export const DropDownItem = ({ index, value, ...rest }: DropDownItemProps) => {
    const { selected, setSelected } = useDropDown();
    return (
        <DropDownItemWrapper
            {...rest}
            active={selected.index === index}
            onClick={() => setSelected({ ...selected, index, value })}
        >
            {value}
        </DropDownItemWrapper>
    );
};
