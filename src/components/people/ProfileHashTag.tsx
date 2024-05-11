import { useState, useRef } from "react";

import { Text } from "@/common/typography/Text";

import {
    ProfileHashTagWrapper,
    ProfileHashTagContainer,
    ProfileHashTagItem,
    ProfileHashTagInput,
} from "./ProfileHashTag.style";

export interface IProfileHashTag {
    width: string;
    minHeight: string;
}

export const ProfileHashTag: React.FC<IProfileHashTag> = ({ width, minHeight }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [hashTagItems, setHashTagItems] = useState<string[]>([]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputRef.current) {
            const value = inputRef.current.value.trim();

            if (value && hashTagItems.length < 15) {
                setHashTagItems([...hashTagItems, value]);
                inputRef.current.value = "";
            }
        }
    };
    return (
        <ProfileHashTagWrapper width={width} minHeight={minHeight}>
            <Text size="s" color="secondary" weight="normal">
                해시태그
            </Text>
            <ProfileHashTagContainer>
                {hashTagItems.map((item, index) => (
                    <ProfileHashTagItem key={index}>#{item}</ProfileHashTagItem>
                ))}
            </ProfileHashTagContainer>
            <ProfileHashTagInput
                type="text"
                ref={inputRef}
                placeholder="해시태그를 입력해주세요."
                onKeyDown={handleKeyDown}
            ></ProfileHashTagInput>
        </ProfileHashTagWrapper>
    );
};
