import { useState } from "react";

import { Text } from "get-p-design";

import down from "@getp/assets/common/dropdown.svg";
import up from "@getp/assets/common/rollup.svg";

import { DropdownWrapper, DropdownHeader, DropdownContainer, Option } from "./DropdownButton.style";

const DropdownButton = ({
    list,
    selectedItem,
    setSelectedItem,
    defaultValue,
}: {
    list: string[];
    selectedItem: string | null;
    setSelectedItem: (item: string) => void;
    defaultValue: string;
}) => {
    const [openDropdown, setOpenDropdown] = useState<boolean>(false);

    const onClickOption = (item: string) => () => {
        setSelectedItem(item);
        setOpenDropdown(false);
    };

    return (
        <DropdownWrapper onBlur={() => setOpenDropdown(false)}>
            <DropdownHeader type="button" onClick={() => setOpenDropdown(!openDropdown)}>
                <Text color={selectedItem ? "primary" : "placeholder"} size={selectedItem ? "m" : "s"}>
                    {selectedItem ?? defaultValue}
                </Text>
                {openDropdown && <img src={up} alt="up" />}
                {!openDropdown && <img src={down} alt="down" />}
            </DropdownHeader>
            {openDropdown && (
                <DropdownContainer>
                    {list.map((item, i) => (
                        <Option key={i + 1} onMouseDown={onClickOption(item)}>
                            {item}
                        </Option>
                    ))}
                </DropdownContainer>
            )}
        </DropdownWrapper>
    );
};

export default DropdownButton;
