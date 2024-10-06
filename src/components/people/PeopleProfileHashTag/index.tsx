import { useRef } from "react";

import { Text } from "@/common/components/typography/Text";

import { useHashTag } from "@/hooks/useHashTag";

import * as Styles from "./index.style";

export interface PeopleProfileHashTagProps {
    width: SizeProp;
    minHeight: SizeProp;
}

export const PeopleProfileHashTag = ({ width, minHeight }: PeopleProfileHashTagProps) => {
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
        <Styles.Wrapper width={width} minHeight={minHeight}>
            <Text size="s" color="secondary" weight="normal">
                해시태그
            </Text>
            <Styles.Container>
                {hashtag.map((item, index) => (
                    <Styles.Item key={index}>#{item}</Styles.Item>
                ))}
            </Styles.Container>
            <Styles.Input
                type="text"
                ref={inputRef}
                placeholder="해시태그를 입력해주세요."
                onKeyDown={handleKeyDown}
            ></Styles.Input>
        </Styles.Wrapper>
    );
};
