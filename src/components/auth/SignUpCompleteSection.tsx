import { Button } from "@/common/form/Button";
import { Text } from "@/common/typography/Text";
import { Title } from "@/common/typography/Title";

import {
    SignUpCompleteContainer,
    SignUpCompleteItem,
    SignUpCompleteSectionHeader,
    SignUpCompleteSectionWrapper,
    SignUpCompleteTextItem,
} from "./SignUpCompleteSection.style";

export default function SignUpCompleteSection() {
    return (
        <SignUpCompleteSectionWrapper>
            <SignUpCompleteSectionHeader>
                <Title>가입완료</Title>
            </SignUpCompleteSectionHeader>

            <SignUpCompleteContainer>
                <SignUpCompleteItem>
                    <img src="/src/assets/auth/congrats2.png" width="312px" height="230px" />
                </SignUpCompleteItem>
                <SignUpCompleteTextItem>
                    <Text size="l" color="point" weight="bold">
                        환영합니다.
                    </Text>
                    <br />
                    <Text size="l" color="primary" weight="bold">
                        가입이 완료되었어요.
                    </Text>
                </SignUpCompleteTextItem>
                <SignUpCompleteItem>
                    <Button
                        variant="secondary"
                        width="100%"
                        height="54px"
                        onClick={() => {
                            //dispatch(pageActions.nextPage());
                        }}
                    >
                        <Text size="s" color="point" weight="bold">
                            로그인하기
                        </Text>
                    </Button>
                </SignUpCompleteItem>
                <SignUpCompleteItem>
                    <Button
                        variant="primary"
                        width="100%"
                        height="54px"
                        onClick={() => {
                            //dispatch(pageActions.nextPage());
                        }}
                    >
                        <Text size="s" color="white" weight="bold">
                            내 정보 등록하러 가기
                        </Text>
                    </Button>
                </SignUpCompleteItem>
            </SignUpCompleteContainer>
        </SignUpCompleteSectionWrapper>
    );
}
