import { Pagination } from "principes-getp";

import { PeopleSearch } from "@/components/people/PeopleSearch";
import { ProjectCard } from "@/components/project/ProjectCard";

import { useProjectList } from "@/services/project/useProjectList";

import { ProjectListContainer, ProjectListWrapper } from "./ProjectListPage.style";

export default function ProjectListPage() {
    const { isPending, data } = useProjectList();

    if (isPending) return <>loading...</>;

    return (
        <ProjectListWrapper>
            <PeopleSearch width="100%" height="auto" />
            <ProjectListContainer>
                {data && (
                    <>
                        {data.content.map((project) => (
                            <ProjectCard
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
            </ProjectListContainer>

            <Pagination totalPages={data?.pageInfo.totalPages as number} pageGroupSize={5} />
        </ProjectListWrapper>
    );
}
