import { FaCircleQuestion } from "react-icons/fa6";
import { useParams } from "react-router-dom";

import { DatePicker } from "get-p-design";

import { ProjectOutline } from "@getp/components/project/ProjectOutline";
import { ProjectTeamContainer } from "@getp/components/project/ProjectTeamContainer";
import { ProjectTeamItem } from "@getp/components/project/ProjectTeamItem";

import { PeopleType } from "@getp/services/people/types";
import { useAppliedProjectById } from "@getp/services/people/useAppliedProjectById";

import * as Styles from "./AppliedProjectDetailPage.style";

export default function AppliedProjectDetailPage() {
    const { id } = useParams();
    const { isPending, data } = useAppliedProjectById(Number(id));

    if (isPending) return <div>Loading...</div>;

    return (
        <Styles.Wrapper>
            <Styles.Header>나의 지원 내역</Styles.Header>

            <Styles.Container>
                <Styles.Aside>
                    <ProjectOutline
                        totalDays={0}
                        remainedDays={0}
                        title={data?.project.title}
                        hashtags={data?.project.hashtags}
                        nickname={data?.project.client.nickname}
                        clientAddress={data?.project.client.address}
                        likesCount={data?.project.likesCount}
                        payment={data?.project.payment}
                        description={data?.project.description}
                        applicationDuration={data?.project.applicationDuration}
                    />
                </Styles.Aside>

                <Styles.Main>
                    <Styles.DateContainer>
                        <Styles.DateInfo>
                            <Styles.Label>희망 작업 시작일</Styles.Label>
                            <DatePicker width="100%" height="40px" />
                        </Styles.DateInfo>

                        <Styles.DateInfo>
                            <Styles.Label>희망 작업 시작일</Styles.Label>
                            <DatePicker width="100%" height="40px" />
                        </Styles.DateInfo>

                        <Styles.DateInfo>
                            <Styles.Label>희망 작업 시작일</Styles.Label>
                            <DatePicker width="100%" height="40px" />
                        </Styles.DateInfo>
                    </Styles.DateContainer>

                    <Styles.ContentContainer>
                        <Styles.Label>지원 내용</Styles.Label>
                        <Styles.Contents>{data?.description}</Styles.Contents>
                    </Styles.ContentContainer>

                    <Styles.Label>첨부 파일</Styles.Label>
                    <Styles.AttachmentFiles>
                        {data?.project.attachmentFiles.map((attachmentFile, index) => {
                            return (
                                <Styles.AttachmentFile key={index}>
                                    <a href={attachmentFile} target="_blank" rel="noreferrer">
                                        {attachmentFile}
                                    </a>
                                </Styles.AttachmentFile>
                            );
                        })}
                    </Styles.AttachmentFiles>

                    {data?.type === PeopleType.TEAM && (
                        <Styles.TeamWrapper>
                            <Styles.Label>팀원 정보</Styles.Label>
                            <ProjectTeamContainer width="100%" height="auto">
                                {data?.teammates.map((teammate) => (
                                    <ProjectTeamItem
                                        id={teammate.peopleId}
                                        name={teammate.nickname}
                                        // BUG: email, isAccepted 가 API 응답에 없음
                                        email={teammate.nickname}
                                        isAccepted={false}
                                    />
                                ))}
                            </ProjectTeamContainer>
                        </Styles.TeamWrapper>
                    )}
                </Styles.Main>
            </Styles.Container>
        </Styles.Wrapper>
    );
}
