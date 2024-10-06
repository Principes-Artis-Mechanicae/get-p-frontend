import { useState } from "react";

import { Pagination } from "principes-getp";

import { Text } from "@/components/__common__/typography/Text";
import { PeopleSearch } from "@/components/people/PeopleSearch";
import { ProjectCard } from "@/components/project/ProjectCard/ProjectCard";

import { useProjectList } from "@/services/project/useProjectList";

import { ProjectListContainer, ProjectListWrapper } from "./ProjectListPage.style";

export interface ISortOption {
    key: string;
    title: string;
}

export default function ProjectListPage() {
    const [sortOrder, setSortOrder] = useState<ISortOption>({ key: "default", title: "기본 정렬" });
    const { isPending, data } = useProjectList();

    const sortOptions: ISortOption[] = [
        { key: "default", title: "기본 정렬" },
        { key: "latest", title: "최신 등록 순" },
        { key: "closing", title: "마감 임박 순" },
        { key: "successFee", title: "성공 보수 순" },
        { key: "likes", title: "좋아요 순" },
    ];

    const handleSortOrder = (order: ISortOption) => {
        setSortOrder(order);
    };

    if (isPending) return <>loading...</>;
    return (
        <ProjectListWrapper>
            <PeopleSearch
                width="100%"
                height="auto"
                options={sortOptions}
                order={sortOrder}
                onSortChange={handleSortOrder}
                headerText="어떤 프로젝트를 찾으시나요?"
            />
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
