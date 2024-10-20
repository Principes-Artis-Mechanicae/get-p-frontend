import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Pagination } from "get-p-design";
import { Text } from "get-p-design";

import { PeopleCard, PeopleCardSkeleton } from "@getp/components/people/PeopleCard";
import { PeopleSearchBar } from "@getp/components/people/PeopleSearchBar";

import { ISortOption } from "@getp/pages/project/ProjectListPage/ProjectListPage";

import { usePeopleList } from "@getp/services/people/usePeopleList";

import { PeopleListContainer, PeopleListWrapper } from "./PeopleListPage.style";

export default function PeopleListPage() {
    const navigate = useNavigate();
    const { isPending, data } = usePeopleList();

    const [sortOrder, setSortOrder] = useState<ISortOption>({ key: "default", title: "기본 정렬" });

    const sortOptions: ISortOption[] = [
        { key: "default", title: "기본 정렬" },
        { key: "likes", title: "좋아요 순" },
    ];

    const handleSortOrder = (order: ISortOption) => {
        setSortOrder(order);
    };

    return (
        <PeopleListWrapper>
            <PeopleSearchBar
                width="100%"
                height="auto"
                options={sortOptions}
                order={sortOrder}
                onSortChange={handleSortOrder}
            />
            <PeopleListContainer>
                {isPending
                    ? Array.from({ length: 10 }).map((_, index) => <PeopleCardSkeleton key={index} />)
                    : data && (
                          <>
                              {data.content.map((people) => (
                                  <PeopleCard
                                      key={people.peopleId}
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
                {data && data.content.length === 0 && <Text>해당하는 데이터가 존재하지 않습니다.</Text>}
            </PeopleListContainer>

            <Pagination totalPages={data?.pageInfo.totalPages as number} pageGroupSize={5} />
        </PeopleListWrapper>
    );
}
