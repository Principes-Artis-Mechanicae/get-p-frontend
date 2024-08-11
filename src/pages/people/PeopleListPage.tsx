import { useNavigate } from "react-router-dom";

import Pagination from "@/common/navigation/Pagination";

import { PeopleCard } from "@/components/people/PeopleCard";
import { PeopleSearch } from "@/components/people/PeopleSearch";

import { usePeopleList } from "@/services/people/usePeopleList";

import { PeopleListContainer, PeopleListWrapper } from "./PeopleListPage.style";

export default function PeopleListPage() {
    const navigate = useNavigate();
    const { isPending, data } = usePeopleList();

    if (isPending) return <>loading...</>;

    return (
        <PeopleListWrapper>
            <PeopleSearch width="100%" height="auto" />
            <PeopleListContainer>
                {data && (
                    <>
                        {data.content.map((people) => (
                            <PeopleCard
                                key={people.peopleId}
                                width="auto"
                                height="auto"
                                profileImageUri={people.profileImageUri}
                                nickname={people.nickname}
                                introduction={people.profile.introduction}
                                activityArea={people.profile.activityArea}
                                hashtags={people.profile.hashtags}
                                completeProjectsCount={people.completedProjectsCount}
                                onClick={() => navigate(`/people/${people.peopleId}`)}
                            />
                        ))}
                    </>
                )}
            </PeopleListContainer>

            <Pagination totalPages={data?.pageInfo.totalPages as number} pageGroupSize={5} />
        </PeopleListWrapper>
    );
}
