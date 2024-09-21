import { Pagination } from "principes-getp";

import { Text } from "@/components/__common__/typography/Text";
import { PeopleSearch } from "@/components/people/PeopleSearch";
import { ProjectCard } from "@/components/project/ProjectCard";

import { useClientProjectList } from "@/services/client/useClientProjectList";

import { ProjectListWrapper } from "../../project/ProjectListPage.style";
import { ClientProjectListContainer, ClientProjectListWrapper, TotalProjectCount } from "./ClientProjectListPage.style";

export default function ClientProjectListPage() {
    const { isPending, data } = useClientProjectList();

    if (isPending) return <>loading...</>;
    console.log(data);

    return (
        <ProjectListWrapper>
            <Text size="xl" weight="bold" style={{ margin: "75px 0px 75px" }}>
                유지훈 의뢰자님의 의뢰중인 프로젝트 목록
            </Text>
            <ClientProjectListWrapper>
                <PeopleSearch width="100%" height="auto" />
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
