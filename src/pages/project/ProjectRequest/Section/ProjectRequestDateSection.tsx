import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { Button, DatePicker, Label } from "principes-getp";

import { Paragraph } from "@/common/components/typography/Paragraph/Paragraph";
import { Title } from "@/common/components/typography/Title/Title";

import { ProjectRequestStep } from "@/components/project/ProjectRequestStep";

import { ProjectRequestPageWrapper } from "@/pages/project/ProjectRequest/ProjectRequestPage.style";

import { useProjectRequest } from "@/services/project/useProjectRequest";

import { projectAction } from "@/store/slice/project.slice";
import { RootDispatch } from "@/store/store";

import { ProjectRequestDateSectionContainer } from "./ProjectRequestDateSection.style";

export const ProjectRequestDateSection = () => {
    const dispatch: RootDispatch = useDispatch();

    const {
        isProjectDurationValid,
        handleApplicationStartDateChange,
        handleApplicationEndDateChange,
        handleEstimatedEndDateChange,
        handleEstimatedStartDateChange,
    } = useProjectRequest();

    const handleNextBtnClick = useCallback(() => {
        const isValid = isProjectDurationValid();

        if (typeof isValid === "string") toast.error(isValid);
        else dispatch(projectAction.nextStep());
    }, [dispatch, isProjectDurationValid]);

    return (
        <ProjectRequestPageWrapper>
            <Title>프로젝트 의뢰</Title>

            <ProjectRequestStep width="100%" total={3} current={2} />

            <Paragraph size="l">마감일자를 선택해주세요</Paragraph>

            <ProjectRequestDateSectionContainer>
                <Label>지원자 모집 시작일</Label>
                <DatePicker onChange={handleApplicationStartDateChange} width="100%" height="54px" />
            </ProjectRequestDateSectionContainer>

            <ProjectRequestDateSectionContainer>
                <Label>지원자 모집 마감일</Label>
                <DatePicker onChange={handleApplicationEndDateChange} width="100%" height="54px" />
            </ProjectRequestDateSectionContainer>

            <ProjectRequestDateSectionContainer>
                <Label>예상 작업 시작일</Label>
                <DatePicker onChange={handleEstimatedStartDateChange} width="100%" height="54px" />
            </ProjectRequestDateSectionContainer>

            <ProjectRequestDateSectionContainer>
                <Label>예상 작업 마감일</Label>
                <DatePicker onChange={handleEstimatedEndDateChange} width="100%" height="54px" />
            </ProjectRequestDateSectionContainer>

            <ProjectRequestDateSectionContainer>
                <Button
                    variant={isProjectDurationValid() ? "primary" : "disabled"}
                    width="100%"
                    height="54px"
                    onClick={handleNextBtnClick}
                >
                    다음
                </Button>
            </ProjectRequestDateSectionContainer>
        </ProjectRequestPageWrapper>
    );
};
