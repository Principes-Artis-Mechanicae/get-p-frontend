import { useState } from "react";

import { Pagination } from "principes-getp";

import { Text } from "@/components/__common__/typography/Text";
import { PeopleSearch } from "@/components/people/PeopleSearch";
import { ProjectCard } from "@/components/project/ProjectCard";

import { useProjectList } from "@/services/project/useProjectList";

import { ProjectListContainer, ProjectListWrapper } from "./ProjectListPage.style";

export type ISortOrder = "default" | "latest" | "closing" | "successFee" | "likes";

export default function ProjectListPage() {
    const [sortOrder, setSortOrder] = useState<ISortOrder>("default");
    const { isPending, data } = useProjectList();

    const handleSortOrder = (order: ISortOrder) => {
        setSortOrder(order);
    };

    if (isPending) return <>loading...</>;
    return (
        <ProjectListWrapper>
            <PeopleSearch width="100%" height="auto" order={sortOrder} onSortChange={handleSortOrder} />
            <ProjectListContainer>
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
                {data && data.content.length === 0 && <Text>해당하는 데이터가 존재하지 않습니다.</Text>}
            </ProjectListContainer>

            <Pagination totalPages={data?.pageInfo.totalPages as number} pageGroupSize={5} />
        </ProjectListWrapper>
    );
}
