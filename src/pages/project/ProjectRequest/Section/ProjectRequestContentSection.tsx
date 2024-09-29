import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { Button, Input, Label, TextArea } from "principes-getp";

import { Paragraph } from "@/components/__common__/typography/Paragraph";
import { Title } from "@/components/__common__/typography/Title";
import { ProjectRequestStep } from "@/components/project/ProjectRequestStep/ProjectRequestStep";

import { ProjectRequestPageWrapper } from "@/pages/project/ProjectRequest/ProjectRequestPage.style";

import { isValueAssigned } from "@/utils/validation";

import {
    ProjectPayment,
    ProjectPaymentUnit,
    ProjectRequestContentContainer,
} from "./ProjectRequestContentSection.style";
import { projectAction } from "@/store/slice/project.slice";
import { RootDispatch } from "@/store/store";

export const ProjectRequestContentSection = () => {
    const dispatch: RootDispatch = useDispatch();

    const projectTitleRef = useRef<HTMLInputElement>(null);
    const projectNumsOfPeople = useRef<HTMLInputElement>(null);
    const projectDescriptionRef = useRef<HTMLTextAreaElement>(null);
    const projectPaymentRef = useRef<HTMLInputElement>(null);

    const handleNextBtnClick = useCallback(() => {
        const title = projectTitleRef.current?.value as string;
        const description = projectDescriptionRef.current?.value as string;
        const payment = Number(projectPaymentRef.current?.value);

        if (!isValueAssigned([title, description, payment])) {
            toast.error("필수 입력항목을 입력해주세요");
            return;
        }

        dispatch(projectAction.setTitle(title));
        dispatch(projectAction.setDescription(description));
        dispatch(projectAction.setPayment(payment));
        dispatch(projectAction.nextStep());
    }, [dispatch]);

    return (
        <ProjectRequestPageWrapper>
            <Title>프로젝트 의뢰</Title>

            <ProjectRequestStep width="100%" total={3} current={1} />

            <ProjectRequestContentContainer>
                <Paragraph size="l">프로젝트 내용을 작성해주세요</Paragraph>
            </ProjectRequestContentContainer>

            <ProjectRequestContentContainer>
                <Label htmlFor="TITLE">프로젝트 제목</Label>
                <Input
                    id="TITLE"
                    ref={projectTitleRef}
                    type="text"
                    width="100%"
                    height="54px"
                    placeholder="프로젝트 제목을 입력해주세요"
                ></Input>
            </ProjectRequestContentContainer>

            <ProjectRequestContentContainer>
                <Label htmlFor="NUMS_OF_PEOPLE">모집인원</Label>
                <Input
                    id="NUMS_OF_PEOPLE"
                    ref={projectNumsOfPeople}
                    type="number"
                    width="100%"
                    height="54px"
                    placeholder="모집인원을 입력해주세요"
                ></Input>
            </ProjectRequestContentContainer>

            <ProjectRequestContentContainer>
                <Label>상세설명</Label>
                <TextArea
                    ref={projectDescriptionRef}
                    variant="primary"
                    width="100%"
                    height="150px"
                    placeholder="프로젝트 상세 설명을 입력해주세요.
예시) 프로젝트 기간: 0000-00-00 ~ 0000-00-00
필요 기술: ~~"
                />
            </ProjectRequestContentContainer>

            <ProjectRequestContentContainer>
                <Label htmlFor="FILE">첨부파일</Label>
                <Button id="FILE" variant="primary" width="100%" height="54px">
                    + 파일 첨부하기
                </Button>
            </ProjectRequestContentContainer>

            <ProjectRequestContentContainer>
                <Label>프로젝트 보수금</Label>
                <ProjectPayment ref={projectPaymentRef} type="number"></ProjectPayment>
                <ProjectPaymentUnit>원</ProjectPaymentUnit>
            </ProjectRequestContentContainer>

            <ProjectRequestContentContainer>
                <Button variant="primary" width="100%" height="54px" onClick={handleNextBtnClick}>
                    다음
                </Button>
            </ProjectRequestContentContainer>
        </ProjectRequestPageWrapper>
    );
};
