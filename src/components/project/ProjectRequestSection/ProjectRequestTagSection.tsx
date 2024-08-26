import { useDispatch } from "react-redux";

import { Button, Input, Label } from "principes-getp";

import { Paragraph } from "@/components/__common__/typography/Paragraph";
import { Title } from "@/components/__common__/typography/Title";

import { ProjectRequestPageWrapper } from "@/pages/project/ProjectRequestPage.style";

import { ProjectRequestStep } from "../ProjectRequestStep/ProjectRequestStep";
import { ProjectRequestTagSectionContainer } from "./ProjectRequestTagSection.style";
import { projectAction } from "@/store/slice/project.slice";
import { RootDispatch } from "@/store/store";

export const ProjectRequestTagSection = () => {
    const dispatch: RootDispatch = useDispatch();

    return (
        <ProjectRequestPageWrapper>
            <Title>프로젝트 의뢰</Title>

            <ProjectRequestStep width="100%" total={3} current={3} />

            <Paragraph size="l">프로젝트 태그를 추가해주세요 (최대 8개)</Paragraph>
            <Paragraph size="s">유사한 프로젝트 경험자가 검색하는데 도움이 되어요!</Paragraph>

            <ProjectRequestTagSectionContainer>
                <Label>태그</Label>
                <Input type="text" width="100%" height="54px" placeholder="태그를 입력해주세요"></Input>
            </ProjectRequestTagSectionContainer>

            <ProjectRequestTagSectionContainer>
                <Button variant="outline" width="100%" height="54px">
                    + 추가
                </Button>
            </ProjectRequestTagSectionContainer>

            <ProjectRequestTagSectionContainer>
                <Button variant="primary" width="100%" height="54px" onClick={() => dispatch(projectAction.nextStep())}>
                    등록 신청하기
                </Button>
            </ProjectRequestTagSectionContainer>
        </ProjectRequestPageWrapper>
    );
};
