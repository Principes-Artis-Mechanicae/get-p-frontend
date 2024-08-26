import { useDispatch } from "react-redux";

import { Button, DatePicker, Label } from "principes-getp";

import { Paragraph } from "@/components/__common__/typography/Paragraph";
import { Title } from "@/components/__common__/typography/Title";

import { ProjectRequestPageWrapper } from "@/pages/project/ProjectRequestPage.style";

import { ProjectRequestStep } from "../ProjectRequestStep/ProjectRequestStep";
import { ProjectRequestDateSectionContainer } from "./ProjectRequestDateSection.style";
import { projectAction } from "@/store/slice/project.slice";
import { RootDispatch } from "@/store/store";

export const ProjectRequestDateSection = () => {
    const dispatch: RootDispatch = useDispatch();

    return (
        <ProjectRequestPageWrapper>
            <Title>프로젝트 의뢰</Title>

            <ProjectRequestStep width="100%" total={3} current={2} />

            <Paragraph size="l">마감일자를 선택해주세요</Paragraph>

            <ProjectRequestDateSectionContainer>
                <Label>지원자 모집 시작일</Label>
                <DatePicker width="100%" height="54px" />
            </ProjectRequestDateSectionContainer>

            <ProjectRequestDateSectionContainer>
                <Label>지원자 모집 마감일</Label>
                <DatePicker width="100%" height="54px" />
            </ProjectRequestDateSectionContainer>

            <ProjectRequestDateSectionContainer>
                <Label>예상 작업 시작일</Label>
                <DatePicker width="100%" height="54px" />
            </ProjectRequestDateSectionContainer>

            <ProjectRequestDateSectionContainer>
                <Label>예상 작업 마감일</Label>
                <DatePicker width="100%" height="54px" />
            </ProjectRequestDateSectionContainer>

            <ProjectRequestDateSectionContainer>
                <Button variant="primary" width="100%" height="54px" onClick={() => dispatch(projectAction.nextStep())}>
                    다음
                </Button>
            </ProjectRequestDateSectionContainer>
        </ProjectRequestPageWrapper>
    );
};
