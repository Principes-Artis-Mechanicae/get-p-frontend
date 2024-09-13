import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Input, Label } from "principes-getp";

import { Paragraph } from "@/components/__common__/typography/Paragraph";
import { Title } from "@/components/__common__/typography/Title";
import { ProjectRequestStep } from "@/components/project/ProjectRequestStep/ProjectRequestStep";
import { ProjectTag, ProjectTagContainer } from "@/components/project/ProjectTag/ProjectTag.style";

import { ProjectRequestPageWrapper } from "@/pages/project/ProjectRequest/ProjectRequestPage.style";

import { useProjectRequest } from "@/services/project/useProjectRequest";

import { ProjectRequestTagSectionContainer } from "./ProjectRequestTagSection.style";
import { projectAction } from "@/store/slice/project.slice";
import { RootDispatch, RootState } from "@/store/store";

export const ProjectRequestTagSection = () => {
    const dispatch: RootDispatch = useDispatch();
    const { hashtags } = useSelector((state: RootState) => state.project);

    const { mutate } = useProjectRequest();

    const hashTagRef = useRef<HTMLInputElement>(null);

    const handleTagAddBtnClick = useCallback(() => {
        if (!hashTagRef.current) throw new Error("hashTagRef is not defined!");

        dispatch(projectAction.addHashTag(hashTagRef.current.value));
        hashTagRef.current.value = "";
    }, [dispatch]);

    const handleRegisterProjectBtnClick = useCallback(() => {
        dispatch(projectAction.nextStep());
        dispatch(projectAction.initializeState());
        mutate();
    }, [dispatch, mutate]);

    return (
        <ProjectRequestPageWrapper>
            <Title>프로젝트 의뢰</Title>

            <ProjectRequestStep width="100%" total={3} current={3} />

            <Paragraph size="l">프로젝트 태그를 추가해주세요 (최대 8개)</Paragraph>
            <Paragraph size="s">유사한 프로젝트 경험자가 검색하는데 도움이 되어요!</Paragraph>

            <ProjectRequestTagSectionContainer>
                <Label>태그</Label>
                <Input
                    ref={hashTagRef}
                    type="text"
                    width="100%"
                    height="54px"
                    placeholder="태그를 입력해주세요"
                ></Input>
                <ProjectTagContainer>
                    {hashtags.map((hashtag, index) => {
                        return (
                            <ProjectTag
                                key={`${index}:hashtag:${hashtag}`}
                                onClick={() => dispatch(projectAction.removeHashTag(hashtag))}
                            >
                                {hashtag}
                            </ProjectTag>
                        );
                    })}
                </ProjectTagContainer>
            </ProjectRequestTagSectionContainer>

            <ProjectRequestTagSectionContainer>
                <Button variant="outline" width="100%" height="54px" onClick={handleTagAddBtnClick}>
                    + 추가
                </Button>
            </ProjectRequestTagSectionContainer>

            <ProjectRequestTagSectionContainer>
                <Button variant="primary" width="100%" height="54px" onClick={handleRegisterProjectBtnClick}>
                    등록 신청하기
                </Button>
            </ProjectRequestTagSectionContainer>
        </ProjectRequestPageWrapper>
    );
};
