import { Text } from "@getp/common/components/typography/Text";

import {
    FooterContainerHead,
    FooterContainerBody,
    FooterWrapper,
    FooterItems,
    FooterIcon,
    FooterContainer,
} from "./index.style";

export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterIcon src="/logo.svg" />

                <FooterContainerHead>
                    <p>
                        <Text size="s" color="#676F7C">
                            상호명:(주)겟피 · 대표이사:KIM BLABLA · 개인정보책임관리자:김태우 · 주소:서울특별시 강남구
                            테헤란로 415, L7 강남타워 5층
                        </Text>
                    </p>
                    <p>
                        <Text size="s" color="#676F7C">
                            사업자등록번호:000-00-00000 · 통신판매업신고증:제 0000-서울강남-00000 호 · 직업정보제공사업
                            신고번호:대구청 제 0000-00호
                        </Text>
                    </p>
                    <p>
                        <Text size="s" color="#C4C7CC">
                            Copyright ©Getp Inc. All Rights Reserved.
                        </Text>
                    </p>
                </FooterContainerHead>

                <FooterContainerBody>
                    <p>
                        <Text size="s" weight="bold" color="#676F7C">
                            상담시간
                        </Text>
                    </p>

                    <FooterItems>
                        <p>
                            <Text size="s" color="#676F7C">
                                평일 09:00~18:00
                            </Text>
                        </p>
                        <p>
                            <Text size="s" color="#676F7C">
                                점심 12:00~13:30
                            </Text>
                        </p>
                        <p>
                            <Text size="s" color="#676F7C">
                                (주말 공휴일은 제외)
                            </Text>
                        </p>
                    </FooterItems>
                </FooterContainerBody>

                <FooterContainerBody>
                    <p>
                        <Text size="s" weight="bold" color="#676F7C">
                            Contact
                        </Text>
                    </p>

                    <FooterItems>
                        <p>
                            <Text size="s" color="#676F7C">
                                1599-0000
                            </Text>
                        </p>
                        <p>
                            <Text size="s" color="#676F7C">
                                support@getp.com
                            </Text>
                        </p>
                    </FooterItems>
                </FooterContainerBody>
            </FooterContainer>
        </FooterWrapper>
    );
};
