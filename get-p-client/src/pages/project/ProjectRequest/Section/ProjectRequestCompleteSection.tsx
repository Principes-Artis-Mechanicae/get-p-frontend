import { useNavigate } from "react-router-dom";

import { Button } from "principes-getp";

import { Paragraph } from "@getp/common/components/typography/Paragraph/Paragraph";
import { Title } from "@getp/common/components/typography/Title/Title";

import { ProjectRequestPageWrapper } from "@getp/pages/project/ProjectRequest/ProjectRequestPage.style";

import congratsImage from "@getp/assets/auth/congrats1.png";

import { ProjectRequestCompleteContainer, ProjectRequestCompleteImg } from "./ProjectReqeustCompleteSection.style";

export const ProjectReqeustCompleteSection = () => {
    const navigate = useNavigate();

    return (
        <ProjectRequestPageWrapper>
            <Title>프로젝트 의뢰</Title>

            <ProjectRequestCompleteImg src={congratsImage}></ProjectRequestCompleteImg>

            <ProjectRequestCompleteContainer>
                <Paragraph size="l">의뢰자님의 프로젝트가 등록 신청 되었어요!</Paragraph>
            </ProjectRequestCompleteContainer>

            <ProjectRequestCompleteContainer>
                <Button variant="primary" width="100%" height="54px" onClick={() => navigate("/")}>
                    메인 페이지로
                </Button>
            </ProjectRequestCompleteContainer>
        </ProjectRequestPageWrapper>
    );
};
