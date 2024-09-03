import { useRef } from "react";

import { useHashTag } from "@/hooks/useHashTag";

import { Text } from "../__common__/typography/Text";
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
    const { hashtag, setHashTag } = useHashTag();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // BUG : 한글 입력시 두번 등록되는 버그
        if (e.key === "Enter" && inputRef.current) {
            const value = inputRef.current.value.trim();

            if (value && hashtag.length < 15) {
                setHashTag((hashtag) => [...hashtag, value]);
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
                {hashtag.map((item, index) => (
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
