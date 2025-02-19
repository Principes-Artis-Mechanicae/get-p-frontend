import { Button, Label, Text } from "get-p-design";

import { TechStackBadge } from "@getp/components/people/TechStackBadge";
import { ApplyPeopleItem } from "@getp/components/project/ApplyPeopleItem";
import { ApplyPeopleList } from "@getp/components/project/ApplyPeopleList";
import { ProjectOutline } from "@getp/components/project/ProjectOutline";

import * as Styles from "./ClientProjectDetailPage.style";

export default function ClientProjectDetailPage() {
    return (
        <Styles.Wrapper>
            <Styles.Aside>
                <ProjectOutline
                    totalDays={10}
                    remainedDays={5}
                    title="프로젝트 제목"
                    hashtags={["#해시태그1", "#해시태그2", "#해시태그3"]}
                    nickname="의뢰자 닉네임"
                    clientAddress={{
                        detail: "상세주소",
                        street: "도로명주소",
                    }}
                    likesCount={10}
                    payment={100000}
                    description="프로젝트 설명"
                    applicationDuration={{
                        startDate: "2021-10-01",
                        endDate: "2021-10-10",
                    }}
                />

                <ApplyPeopleList width={"100%"} height={"500px"}>
                    <ApplyPeopleItem id={0} name={"김대건"} school={"경북대학교"} education={"컴퓨터학부"} />
                    <ApplyPeopleItem id={0} name={"김대건"} school={"경북대학교"} education={"컴퓨터학부"} />
                    <ApplyPeopleItem id={0} name={"김대건"} school={"경북대학교"} education={"컴퓨터학부"} />
                    <ApplyPeopleItem id={0} name={"김대건"} school={"경북대학교"} education={"컴퓨터학부"} />
                </ApplyPeopleList>
            </Styles.Aside>

            <Styles.Container>
                {/* <PeopleNotSelectedFallback /> */}

                <Styles.Section>
                    <Styles.SectionTitle>
                        <Text size="m" weight="bolder">
                            김대건님 지원서
                        </Text>
                    </Styles.SectionTitle>

                    <Styles.Item>
                        <Label>닉네임</Label>
                        <Styles.TextDisplay>People01</Styles.TextDisplay>
                    </Styles.Item>

                    <Styles.Item>
                        <Label>기술스택</Label>
                        <TechStackBadge text={"React"} />
                    </Styles.Item>

                    <Styles.Item>
                        <Label>활동지역</Label>
                        <Styles.TextDisplay>대구광역시 북구</Styles.TextDisplay>
                    </Styles.Item>

                    <Styles.Item>
                        <Label>학력</Label>
                        <Styles.TextDisplay>경북대학교 대구캠퍼스</Styles.TextDisplay>
                    </Styles.Item>

                    <Styles.Item>
                        <Label>소개</Label>
                        <Styles.TextAreaDisplay
                            readOnly
                            value={`안녕하세요 의뢰자님 반갑습니다^^ 
경북대학교 경영학과 19학번 김수현 입니다. 다양한 관련 작업을 진행해 왔으며,
많은 경험을 바탕으로 의뢰자님의 서류 가치를 업그레이드 시킬 수 있는 만족스러운 결과물로 보답드리도록 하겠습니다. (*워드파일 원본 제공)
감사합니다. ^^`}
                        />
                    </Styles.Item>

                    <Styles.Item>
                        <Label>포트폴리오</Label>
                        <Styles.PortfolioDisplay href="">asdfasdf</Styles.PortfolioDisplay>
                        <Styles.PortfolioDisplay href="">asdfasdf</Styles.PortfolioDisplay>
                    </Styles.Item>
                </Styles.Section>

                <Styles.Section>
                    <Styles.SectionTitle>
                        <Text size="m" weight="bolder">
                            프로젝트 지원 내용
                        </Text>
                    </Styles.SectionTitle>

                    <Styles.Item>
                        <Label>희망작업 시작일</Label>
                        <Styles.TextDisplay>2024.01.01 ~ 2024.01.02</Styles.TextDisplay>
                    </Styles.Item>

                    <Styles.Item>
                        <Label>희망작업 마감일</Label>
                        <Styles.TextDisplay>2024.01.01 ~ 2024.01.02</Styles.TextDisplay>
                    </Styles.Item>

                    <Styles.Item>
                        <Label>지원내용</Label>
                        <Styles.TextAreaDisplay
                            readOnly
                            value={`안녕하세요 의뢰자님 반갑습니다^^ 
경북대학교 경영학과 19학번 김수현 입니다. 다양한 관련 작업을 진행해 왔으며,
많은 경험을 바탕으로 의뢰자님의 서류 가치를 업그레이드 시킬 수 있는 만족스러운 결과물로 보답드리도록 하겠습니다. (*워드파일 원본 제공)
감사합니다. ^^`}
                        />
                    </Styles.Item>
                </Styles.Section>

                <Button variant="outline" width="100%" height="54px">
                    미팅 신청하기
                </Button>
            </Styles.Container>
        </Styles.Wrapper>
    );
}
