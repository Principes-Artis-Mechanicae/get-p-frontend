import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Pagination } from "@/common/navigation/Pagination";

import { PeopleCard } from "@/components/people/PeopleCard";
import { PeopleSearch } from "@/components/people/PeopleSearch";

import { peopleService } from "@/services/people/people.service";
import { PeopleData } from "@/services/people/people.types";

import { PeopleListContainer, PeopleListWrapper } from "./PeopleListPage.style";

export default function PeopleListPage() {
    const [totalItems] = useState(100);
    const [people, setPeople] = useState<PeopleData[] | null>(null);
    const [searchParams] = useSearchParams();
    const itemCountPerPage = 6;
    const pageCount = 10;
    const page = parseInt(searchParams.get("page") ?? "0");

    useEffect(() => {
        // window.scrollTo(0, 0); // 페이지 이동 시 스크롤 위치 맨 위로 초기화
        /* api 호출 및 데이터(totalItems, people) 저장 */

        // setPeople(PeopleInfos.slice(0, itemCountPerPage));
        peopleService.readPeople(page, pageCount).then((value) => {
            setPeople(value.content);
            console.log(value.content);
        });
    }, [page]);

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
                                // introduction={person.profile.introduction}
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
                totalItems={totalItems}
                itemCountPerPage={itemCountPerPage}
                pageCount={pageCount}
                currentPage={page && page > 0 ? page : 1}
                basePath="/people"
            />
        </PeopleListWrapper>
    );
}
