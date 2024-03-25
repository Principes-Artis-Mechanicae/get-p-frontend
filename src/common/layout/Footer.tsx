import { Text } from "../typography/Text";
import logo from "/logo.svg";
import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
    width: 100%;
    height: 12rem;
    padding: 3rem 12rem;
    gap: 7rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FooterContainer = styled.div`
    display: inline-flex;
    align-items: flex-start;
    word-break: keep-all;
    gap: 1rem;
`;

export const FooterItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    user-select: none;
    gap: 0.4rem;
`;

export const Footer: React.FC = () => {
    return (
        <>
            <FooterWrapper>
                <img src={logo} alt="logo" />
                <FooterItem>
                    <Text size="s" color="secondary" weight="normal">
                        상호명(주)겟피 대표이사:KIM BLABLA 개인정보책임관리자:김태우 주소:서울특별시 강남구 테헤란로 415, L7 강남타워 5층
                    </Text>
                    <Text size="s" color="secondary" weight="normal">
                        사업자등록번호:000-00-00000 통신판매업신고증:제 0000-서울강남-00000 호 직업정보제공사업
                        신고번호:대구청 제 0000--00호
                    </Text>
                    <Text size="s" color="placeholder" weight="normal">
                        Copyright ©Getp Inc. All Rights Reserved.
                    </Text>
                </FooterItem>
                <FooterContainer>
                    <Text size="s" color="placeholder" weight="normal">
                        상담시간
                    </Text>
                    <FooterItem>
                        <Text size="s" color="secondary" weight="normal">
                            평일 09:00~18:00
                        </Text>
                        <Text size="s" color="secondary" weight="normal">
                            점심 12:00~13:00
                        </Text>
                        <Text size="s" color="secondary" weight="normal">
                            (주말, 공휴일은 제외)
                        </Text>
                    </FooterItem>
                </FooterContainer>
                <FooterContainer>
                    <Text size="s" color="placeholder" weight="normal">
                        Contact
                    </Text>
                    <FooterItem>
                        <Text size="s" color="secondary" weight="normal">
                            1599-0000
                        </Text>
                        <Text size="s" color="secondary" weight="normal">
                            support@getp.com
                        </Text>
                    </FooterItem>
                </FooterContainer>
            </FooterWrapper>
        </>
    );
};
