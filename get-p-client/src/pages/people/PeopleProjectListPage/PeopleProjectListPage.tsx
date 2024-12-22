import { Text } from "get-p-design";

import { ProjectCard } from "@getp/components/project/ProjectCard";

import { useAppliedProjects } from "@getp/services/project/useAppliedProjects";

import * as Styles from "./PeopleProjectListPage.style";

export default function PeopleProjectListPage() {
    const { isPending, data } = useAppliedProjects();

    if (isPending) return <>loading...</>;

    return (
        <Styles.Wrapper>
            <Styles.Header>
                <Text size="xl" weight="bold" style={{ margin: "75px 0px 75px" }}>
                    피플 {"유지훈"}님의 지원 내역 리스트
                </Text>
            </Styles.Header>

            <Styles.Body>
                {data &&
                    data.content.map((project) => {
                        return (
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
                        );
                    })}
            </Styles.Body>
        </Styles.Wrapper>
    );
}
