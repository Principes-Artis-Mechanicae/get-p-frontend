import { Text } from "get-p-design";

import notFoundImage from "@getp/assets/home/not_found.svg";

import * as Styles from "./PeopleNotSelectedFallback.style";

export const PeopleNotSelectedFallback = () => {
    return (
        <Styles.Wrapper>
            <Styles.Image src={notFoundImage} />

            <Styles.Title>
                <Text size="m" weight="bold">
                    아직 지원자가 선택되지 않았습니다.
                </Text>
            </Styles.Title>

            <Styles.Description>
                <Text size="s">지원서를 조회하기 위해 “지원자 리스트”에서 조회하고 싶은 지원자를 선택해주세요.</Text>
            </Styles.Description>
        </Styles.Wrapper>
    );
};
