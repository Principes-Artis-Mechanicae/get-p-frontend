import { TextArea, Button } from "principes-getp";

import { CheckButton } from "@/common/components/forms/CheckButton";
import { Text } from "@/common/components/typography/Text";
import useFileUpload from "@/common/hooks/useFileUpload";

import { ProjectOutline } from "@/components/project/ProjectOutline";

import { PeopleType } from "@/services/people/types";
import { useProjectApply } from "@/services/project/useProjectApply";
import { useProjectById } from "@/services/project/useProjectById";

import deleteIcon from "@/assets/people/close.svg";

import { calculateDays } from "@/utils/calculateDays";

import {
    PeopleDetailWrapper,
    ProfileContainer,
    InfoContainer,
    TextboxContainer,
    PortfolioContainer,
    PortfolioCard,
    ResponsiveMobileHeading,
    ResponsivePCHeading,
    NameContainer,
    OpenButton,
    DeleteButton,
    ButtonBox,
} from "../../people/PeopleDetail/PeopleDetailPage.style";
import { DateInput, FileInput } from "./ProjectApplyPage.style";

const ProjectApplyPage = () => {
    const {
        setStartDate,
        setEndDate,
        descriptionRef,
        handleApplyBtnClicked,
        handlePeopleType,
        peopleType,
        setAttachmentFiles,
    } = useProjectApply();
    const { isPending, isError, data: project } = useProjectById();

    const { fileInputRef, portfolios, handleFileChange, handleDelete, handleButtonClick } =
        useFileUpload(setAttachmentFiles);

    const selectStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value;
        setStartDate(date);
    };

    const selectEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value;
        setEndDate(date);
    };

    const totalDays = calculateDays(
        project?.estimatedDuration.startDate as string,
        project?.estimatedDuration.endDate as string,
    );

    const remainedDays = calculateDays(new Date().toString(), project?.applicationDuration.startDate as string);

    if (isPending) return <>loading...</>;
    if (isError) return <>err..</>;

    return (
        <PeopleDetailWrapper>
            <ResponsiveMobileHeading>
                <Text size="22px" color="point" weight="bold">
                    프로젝트 지원하기
                </Text>
            </ResponsiveMobileHeading>
            <ProfileContainer>
                <ProjectOutline
                    totalDays={totalDays}
                    remainedDays={remainedDays}
                    title={project.title}
                    hashtags={project.hashtags}
                    clientAddress={project.client.address}
                    likesCount={project.likesCount}
                    payment={project.payment}
                    description={project.description}
                    applicationDuration={project.applicationDuration}
                ></ProjectOutline>
            </ProfileContainer>
            <InfoContainer>
                <ResponsivePCHeading>
                    <Text size="22px" color="point" weight="bold">
                        프로젝트 지원하기
                    </Text>
                </ResponsivePCHeading>

                <ButtonBox>
                    <CheckButton
                        width="50%"
                        height="50px"
                        isChecked={peopleType === PeopleType.INDIVIDUAL}
                        onClick={() => handlePeopleType(PeopleType.INDIVIDUAL)}
                    >
                        개인으로 지원하기
                    </CheckButton>
                    <CheckButton
                        width="50%"
                        height="50px"
                        isChecked={peopleType === PeopleType.TEAM}
                        onClick={() => handlePeopleType(PeopleType.TEAM)}
                    >
                        팀으로 지원하기
                    </CheckButton>
                </ButtonBox>

                <TextboxContainer>
                    <Text size="m" color="secondary" weight="bold">
                        희망 작업 시작일
                    </Text>
                    <DateInput
                        type="date"
                        placeholder="희망하는 작업 시작일을 선택해 주세요."
                        onChange={selectStartDate}
                    />
                </TextboxContainer>

                <TextboxContainer>
                    <Text size="m" color="secondary" weight="bold">
                        희망 작업 마감일
                    </Text>
                    <DateInput
                        type="date"
                        placeholder="희망하는 작업 시작일을 선택해 주세요."
                        onChange={selectEndDate}
                    />
                </TextboxContainer>

                <TextboxContainer>
                    <Text size="m" color="secondary" weight="bold">
                        지원 내용
                    </Text>
                    <TextArea
                        ref={descriptionRef}
                        variant="secondary"
                        width="100%"
                        height="261px"
                        placeholder="프로젝트 요청사항에 대한 답변, 서비스 진행 방식, 자신만의 강점이나 특징 등을 작성해주세요."
                    ></TextArea>
                </TextboxContainer>

                <TextboxContainer>
                    <Text size="m" color="secondary" weight="bold">
                        포트폴리오
                    </Text>
                    {portfolios.length > 0 && (
                        <PortfolioContainer>
                            {portfolios.map((portfolio, index) => (
                                <PortfolioCard key={index}>
                                    <NameContainer>
                                        <DeleteButton onClick={() => handleDelete(portfolio.url)}>
                                            <img src={deleteIcon} alt="delete" />
                                        </DeleteButton>
                                        {portfolio.description}
                                    </NameContainer>
                                    <OpenButton href={portfolio.url} target="_blank" rel="noopener noreferrer">
                                        파일 열기
                                    </OpenButton>
                                </PortfolioCard>
                            ))}
                        </PortfolioContainer>
                    )}
                </TextboxContainer>

                <TextboxContainer>
                    <FileInput
                        placeholder="포트폴리오"
                        type="file"
                        accept=".pdf,.png"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />
                    <Button onClick={handleButtonClick} variant="outline" width="100%" height="50px">
                        + 포트폴리오 파일 첨부하기
                    </Button>
                    <Button onClick={handleApplyBtnClicked} variant="primary" width="100%" height="50px">
                        프로젝트 지원하기
                    </Button>
                </TextboxContainer>
            </InfoContainer>
        </PeopleDetailWrapper>
    );
};

export default ProjectApplyPage;
