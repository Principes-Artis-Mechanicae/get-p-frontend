import { Pagination } from "get-p-design";
import { Text } from "get-p-design";

import { PeopleSearchBar } from "@getp/components/people/PeopleSearchBar";
import { ProjectCard } from "@getp/components/project/ProjectCard";

import { ProjectListWrapper } from "@getp/pages/project/ProjectListPage/ProjectListPage.style";

import { useClientProjectList } from "@getp/services/client/useClientProjectList";

import { ClientProjectListContainer, ClientProjectListWrapper, TotalProjectCount } from "./ClientProjectListPage.style";

export default function ClientProjectListPage() {
    const { isPending, data } = useClientProjectList();

    if (isPending) return <>loading...</>;

    return (
        <ProjectListWrapper>
            <Text size="xl" weight="bold" style={{ margin: "75px 0px 75px" }}>
                유지훈 의뢰자님의 의뢰중인 프로젝트 목록
            </Text>
            <ClientProjectListWrapper>
                <PeopleSearchBar width="100%" height="auto" />
                <TotalProjectCount>총 {data?.pageInfo.totalElements}개</TotalProjectCount>

                <ClientProjectListContainer>
                    {data && (
                        <>
                            {data.content.map((project) => (
                                <ProjectCard
                                    key={project.projectId}
                                    title={project.title}
                                    payment={project.payment}
                                    applicantsCount={project.applicantsCount}
                                    estimatedDays={project.estimatedDays}
                                    applicationDuration={{
                                        startDate: project.applicationDuration.startDate,
                                        endDate: project.applicationDuration.endDate,
                                    }}
                                    hashtags={project.hashtags}
                                    description={project.description}
                                    status={project.status}
                                />
                            ))}
                        </>
                    )}
                </ClientProjectListContainer>
            </ClientProjectListWrapper>
            <Pagination totalPages={data?.pageInfo.totalPages as number} pageGroupSize={5} />
        </ProjectListWrapper>
    );
}
