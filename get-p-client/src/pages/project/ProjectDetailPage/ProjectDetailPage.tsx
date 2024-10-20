import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Text } from "get-p-design";

import { AuthFilter } from "@getp/common/components/guards/AuthFilter";
import { calculateDays } from "@getp/common/utils/calculateDays";

import { AuthGuardBlur } from "@getp/components/auth/AuthGuardBlur";
import { ProjectApply } from "@getp/components/project/ProjectApply";
import { ProjectInfo } from "@getp/components/project/ProjectInfo";
import { ProjectManagement } from "@getp/components/project/ProjectManagement";
import { ProjectPayment } from "@getp/components/project/ProjectPayment";

import { useProjectById } from "@getp/services/project/useProjectById";
import { useProjectLike } from "@getp/services/project/useProjectLike";

import downloadIcon from "@getp/assets/project/download.png";

import {
    ProjectDetailWrapper,
    ProjectDetailSideContainer,
    ProjectDetailContainer,
    ProjectDetailItem,
    Textbox,
    DateContainer,
    DateItem,
    DateBox,
    FileContainer,
    File,
    DownloadIcon,
} from "./ProjectDetailPage.style";

export default function ProjectDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();

    const { isPending, isError, data: project } = useProjectById();
    const { isActive, handleLikeClick } = useProjectLike();

    const extractFileName = (url: string): string => {
        return url.substring(url.lastIndexOf("/") + 1);
    };

    const totalDays = calculateDays(
        project?.estimatedDuration.startDate as string,
        project?.estimatedDuration.endDate as string,
    );

    const remainedDays = calculateDays(
        project?.applicationDuration.startDate as string,
        project?.applicationDuration.endDate as string,
    );

    const navigateToSignIn = useCallback(() => {
        toast.error("로그인 후 이용해주세요");
        navigate("/auth/signin");
    }, [navigate]);

    const navigateToProjectApply = useCallback(() => {
        navigate(`/project/apply/${id as string}`);
    }, [navigate, id]);

    if (isPending) return <>loading...</>;
    if (isError) return <>err..</>;

    return (
        <ProjectDetailWrapper>
            <ProjectDetailSideContainer>
                <ProjectInfo
                    totalDays={totalDays}
                    remainedDays={remainedDays}
                    title={project.title}
                    hashtags={project.hashtags}
                    recruitmentCount={project.recruitmentCount}
                    applicantsCount={project.applicantsCount}
                    applicationDuration={project.applicationDuration}
                />

                <AuthGuardBlur width="100%" height="fit-content" withButton={false}>
                    <ProjectManagement clientAddress={project.client.address} likesCount={project.likesCount} />
                </AuthGuardBlur>

                <ProjectPayment payment={project.payment} />

                <AuthFilter
                    forClient={
                        <ProjectApply
                            isActive={isActive}
                            handleLikeBtnClick={handleLikeClick}
                            handleApplyBtnClick={navigateToProjectApply}
                        />
                    }
                    forPeople={
                        <ProjectApply
                            isActive={isActive}
                            handleLikeBtnClick={handleLikeClick}
                            handleApplyBtnClick={navigateToProjectApply}
                        />
                    }
                    forUnauthorized={
                        <ProjectApply
                            isActive={isActive}
                            handleLikeBtnClick={navigateToSignIn}
                            handleApplyBtnClick={navigateToSignIn}
                        />
                    }
                />
            </ProjectDetailSideContainer>

            <ProjectDetailContainer>
                <ProjectDetailItem>
                    <Text size="m" color="secondary" weight="bold">
                        상세 설명
                    </Text>
                    <AuthGuardBlur width="100%" height="300px">
                        <Textbox>{project?.description}</Textbox>
                    </AuthGuardBlur>
                </ProjectDetailItem>

                <DateContainer>
                    <DateItem>
                        <Text size="m" color="secondary" weight="bold">
                            희망 작업 시작일
                        </Text>
                        <DateBox>{project?.estimatedDuration?.startDate}</DateBox>
                    </DateItem>
                    <DateItem>
                        <Text size="m" color="secondary" weight="bold">
                            희망 작업 마감일
                        </Text>
                        <DateBox>{project?.estimatedDuration?.endDate}</DateBox>
                    </DateItem>
                    <DateItem>
                        <Text size="m" color="secondary" weight="bold">
                            총 작업일 수
                        </Text>
                        <DateBox>{totalDays}일</DateBox>
                    </DateItem>
                </DateContainer>

                <ProjectDetailItem>
                    <Text size="m" color="secondary" weight="bold">
                        첨부파일
                    </Text>

                    <AuthGuardBlur width="100%" height="fit-content" withButton={false}>
                        <FileContainer>
                            {project?.attachmentFiles?.map((fileUrl, index) => (
                                <File key={index}>
                                    <span>{extractFileName(fileUrl)}</span>
                                    <a href={fileUrl} download>
                                        <DownloadIcon src={downloadIcon} />
                                    </a>
                                </File>
                            ))}
                        </FileContainer>
                    </AuthGuardBlur>
                </ProjectDetailItem>
            </ProjectDetailContainer>
        </ProjectDetailWrapper>
    );
}
