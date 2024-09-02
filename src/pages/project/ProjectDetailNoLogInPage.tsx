import { Button } from "principes-getp";

import { Text } from "@/components/__common__/typography/Text";
import { LogInPopUp } from "@/components/project/ProjectDetail/LogInPopUp";
import { ProjectInfo } from "@/components/project/ProjectDetail/ProjectInfo";
import { ProjectManagement } from "@/components/project/ProjectDetail/ProjectManagement";
import { ProjectPayment } from "@/components/project/ProjectDetail/ProjectPayment";

import { useLikeClick } from "@/services/project/useLikeClick";
import { useProjectById } from "@/services/project/useProjectById";

import downloadIcon from "@/assets/project/download.png";

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
    ApplyContainer,
    StarButton,
    StarIcon,
    BlurBox,
} from "./ProjectDetailPage.style";

export const ProjectDetailNoLogInPage: React.FC = () => {
    const { data: project } = useProjectById();
    const { likeClick, handleLikeClick } = useLikeClick();

    const calculateDays = (startDate: string, endDate: string) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const timeDifference = Math.abs(end.getTime() - start.getTime());
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
        return Math.round(daysDifference);
    };

    const extractFileName = (url: string): string => {
        return url.substring(url.lastIndexOf("/") + 1);
    };

    const totalDays = project?.estimatedDuration
        ? calculateDays(project.estimatedDuration.startDate, project.estimatedDuration.endDate)
        : 0;

    return (
        <ProjectDetailWrapper>
            <ProjectDetailSideContainer>
                <ProjectInfo />
                <BlurBox>
                    <ProjectManagement />
                </BlurBox>
                <ProjectPayment />
                <ApplyContainer>
                    <Button width="80%" height="54px" variant="outline">
                        지원하기
                    </Button>
                    <StarButton onClick={handleLikeClick}>
                        <StarIcon isClicked={likeClick} />
                    </StarButton>
                </ApplyContainer>
            </ProjectDetailSideContainer>

            <ProjectDetailContainer>
                <ProjectDetailItem>
                    <Text size="m" color="secondary" weight="bold">
                        상세 설명
                    </Text>
                    <BlurBox>
                        {/* <LogInPopUp></LogInPopUp> */}
                        <Textbox>{project?.description}</Textbox>
                    </BlurBox>
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

                    <BlurBox>
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
                    </BlurBox>
                </ProjectDetailItem>
            </ProjectDetailContainer>
        </ProjectDetailWrapper>
    );
};
