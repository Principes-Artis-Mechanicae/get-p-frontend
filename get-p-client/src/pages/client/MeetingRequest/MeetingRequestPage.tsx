import { Button } from "principes-getp";
import { Label } from "principes-getp";
import { TextArea } from "principes-getp";

import { Text } from "@getp/common/components/typography/Text";
import { Title } from "@getp/common/components/typography/Title/Title";

import { DateInput } from "@getp/pages/project/ProjectApplyPage/ProjectApplyPage.style";

import { useRequestMeeting } from "@getp/services/client/useRequestMeeting";

import {
    MeetingRequestWrapper,
    MeetingRequestHeader,
    MeetingRequestContainer,
    MeetingRequestItem,
    DateContainer,
    TimeInput,
} from "./MeetingRequestPage.style";
import { css } from "@emotion/react";

export default function FindPasswordPage() {
    const {
        setMeetingDate,
        setStartTime,
        setEndTime,
        projectNameRef,
        locationRef,
        phoneNumberRef,
        requestRef,
        handleTransmissionBtnClicked,
    } = useRequestMeeting();

    const selectMeetingDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value;
        setMeetingDate(date);
    };

    const selectStartTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = e.target.value;
        setStartTime(time);
    };

    const selectEndTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = e.target.value;
        setEndTime(time);
    };

    return (
        <MeetingRequestWrapper>
            <MeetingRequestHeader>
                <Title>사전 미팅 신청서</Title>
                <br />
                <Text color="secondary" size="s">
                    프로젝트 지원자와 원하시는 미팅 장소, 미팅 일정, 요구사항을 입력해주세요.
                </Text>
                <br />
                <Text color="secondary" size="s">
                    GET-P의 PM이 의뢰자 님과 지원자 님 간의 대화방을 개설하여 사전 미팅을 조율해드립니다.
                </Text>
            </MeetingRequestHeader>

            <MeetingRequestContainer>
                <MeetingRequestItem>
                    <Label>의뢰하신 프로젝트명</Label>
                    <TextArea
                        ref={projectNameRef}
                        variant="secondary"
                        width="100%"
                        height="fit-content"
                        placeholder="프로젝트명을 입력해주세요."
                    ></TextArea>
                </MeetingRequestItem>

                <MeetingRequestItem>
                    <Label>미팅 장소</Label>
                    <TextArea
                        ref={locationRef}
                        variant="secondary"
                        width="100%"
                        height="fit-content"
                        placeholder="원하시는 미팅 장소를 입력해주세요.
(예시: (오프라인) 경북대학교 IT융복합관 304호, (온라인) ZOOM 미팅) "
                    ></TextArea>
                </MeetingRequestItem>

                <MeetingRequestItem>
                    <Label>미팅 일정</Label>
                    <DateContainer>
                        <DateInput
                            onChange={selectMeetingDate}
                            type="date"
                            css={css`
                                width: 50%;
                            `}
                        ></DateInput>
                        <TimeInput type="time" onChange={selectStartTime}></TimeInput>
                        <TimeInput type="time" onChange={selectEndTime}></TimeInput>
                    </DateContainer>
                </MeetingRequestItem>

                <MeetingRequestItem>
                    <Label>연락처</Label>
                    <TextArea
                        ref={phoneNumberRef}
                        variant="secondary"
                        width="100%"
                        height="fit-content"
                        placeholder="전화번호를 입력해 주세요. (예시: 010-1234-5678, 02) 000-0000)"
                    ></TextArea>
                </MeetingRequestItem>

                <MeetingRequestItem>
                    <Label>요구사항</Label>
                    <TextArea
                        ref={requestRef}
                        variant="secondary"
                        width="100%"
                        height="200px"
                        placeholder="미팅 및 프로젝트 진행과 관련된 요구사항들을 입력해 주세요."
                    ></TextArea>
                </MeetingRequestItem>

                <MeetingRequestItem>
                    <Button variant="primary" width="100%" height="54px" onClick={handleTransmissionBtnClicked}>
                        전달
                    </Button>
                </MeetingRequestItem>
            </MeetingRequestContainer>
        </MeetingRequestWrapper>
    );
}
