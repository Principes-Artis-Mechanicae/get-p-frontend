import { Button } from "@/common/form/Button";
import { Text } from "@/common/typography/Text";
import { Title } from "@/common/typography/Title";

import {
    SignUpCompleteContainer,
    SignUpCompleteItem,
    SignUpCompletePageHeader,
    SignUpCompletePageWrapper,
    SignUpCompleteTextItem,
} from "./SignUpCompletePage.style";

export default function SignUpCompletePage() {
    return (
        <SignUpCompletePageWrapper>
            <SignUpCompletePageHeader>
                <Title>가입완료</Title>
            </SignUpCompletePageHeader>
            <SignUpCompleteContainer>
                {/* <SignUpCompleteItem>
                    <img src="src\assets\auth\congrats2.png" width="312px" height="230px" />
                </SignUpCompleteItem> */}
                <SignUpCompleteTextItem>
                    <Text size="lx" color="point" weight="bold">
                        환영합니다.
                    </Text>
                    <br />
                    <Text size="lx" color="primary" weight="bold">
                        가입이 완료되었어요.
                    </Text>
                </SignUpCompleteTextItem>
                <SignUpCompleteItem>
                    <Button
                        variant="secondary"
                        width="440px"
                        height="54px"
                        font_weight="700"
                        onClick={() => {
                            //dispatch(pageActions.nextPage());
                        }}
                    >
                        로그인하기
                    </Button>
                </SignUpCompleteItem>
                <SignUpCompleteItem>
                    <Button
                        variant="primary"
                        width="440px"
                        height="54px"
                        font_weight="700"
                        onClick={() => {
                            //dispatch(pageActions.nextPage());
                        }}
                    >
                        내 정보 등록하러 가기
                    </Button>
                </SignUpCompleteItem>
            </SignUpCompleteContainer>
        </SignUpCompletePageWrapper>
    );
}
