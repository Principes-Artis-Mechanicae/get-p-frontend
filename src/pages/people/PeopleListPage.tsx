import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { IPagination, Pagination } from "@/common/navigation/Pagination";

import { PeopleCard } from "@/components/people/PeopleCard";
import { PeopleSearch } from "@/components/people/PeopleSearch";

import { peopleService } from "@/services/people/people.service";
import { PeopleData } from "@/services/people/people.types";

import { PeopleListContainer, PeopleListWrapper } from "./PeopleListPage.style";

export default function PeopleListPage() {
    const [people, setPeople] = useState<PeopleData[] | null>(null);

    const [searchParams] = useSearchParams();
    const [pageInfo, setPageInfo] = useState<IPagination>({
        totalItems: 10,
        itemCountPerPage: 10,
        pageCount: 10,
        currentPage: parseInt(searchParams.get("page") ?? "1"),
        basePath: "/people",
    });

    // searchParams가 바뀔 때 마다 새로운 페이지로 api 호출함.
    useEffect(() => {
        const currentPage = parseInt(searchParams.get("page") ?? "1");
        const itemCountPerPage = parseInt(searchParams.get("size") ?? "10");

        peopleService.readPeople(currentPage, itemCountPerPage).then((value) => {
            setPeople(value.content);
            setPageInfo({
                ...pageInfo,
                totalItems: value.pageInfo.totalElements,
                itemCountPerPage: value.pageInfo.size,
                pageCount: 10,
                currentPage: value.pageInfo.number,
                basePath: "/people",
            });
        });
    }, [searchParams]);

    return (
        <PeopleListWrapper>
            <PeopleSearch width="100%" height="auto" />
            <PeopleListContainer>
                {people && (
                    <>
                        {people.map((person) => (
                            <PeopleCard
                                width="auto"
                                height="auto"
                                profileImageUri={person.profileImageUri}
                                nickname={person.nickname}
                                introduction={person.profile.introduction}
                                activityArea={person.profile.activityArea}
                                hashtags={person.profile.hashtags}
                                completeProjectsCount={person.completedProjectsCount}
                            />
                        ))}
                    </>
                )}
            </PeopleListContainer>
            <Pagination
                totalItems={pageInfo.totalItems}
                itemCountPerPage={pageInfo.itemCountPerPage}
                pageCount={pageInfo.pageCount}
                currentPage={pageInfo.currentPage && pageInfo.currentPage > 0 ? pageInfo.currentPage : 1}
                basePath="/people"
            />
        </PeopleListWrapper>
    );
}
