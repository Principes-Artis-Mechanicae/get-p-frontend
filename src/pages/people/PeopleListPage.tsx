import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Pagination } from "@/common/navigation/Pagination";

import { PeopleCard } from "@/components/people/PeopleCard";
import { PeopleSearch } from "@/components/people/PeopleSearch";

import { IPeopleInfo, PeopleInfos } from "@/constants/peopleInfo";

import { PeopleListContainer, PeopleListWrapper } from "./PeopleListPage.style";

export default function PeopleListPage() {
    const [totalItems] = useState(100);
    const [people, setPeople] = useState<IPeopleInfo[] | null>(null);
    const [searchParams] = useSearchParams();
    const itemCountPerPage = 6;
    const pageCount = 10;
    const page = searchParams.get("page");

    useEffect(() => {
        // window.scrollTo(0, 0); // 페이지 이동 시 스크롤 위치 맨 위로 초기화
        /* api 호출 및 데이터(totalItems, people) 저장 */
        setPeople(PeopleInfos.slice(0, itemCountPerPage));
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
                                comment={person.comment}
                                activityArea={person.activityArea}
                                hashtags={person.hashtags}
                                completeProjectsCount={person.completeProjectsCount}
                            />
                        ))}
                    </>
                )}
            </PeopleListContainer>
            <Pagination
                totalItems={totalItems}
                itemCountPerPage={itemCountPerPage}
                pageCount={pageCount}
                currentPage={page && parseInt(page) > 0 ? parseInt(page) : 1}
                basePath="/people"
            />
        </PeopleListWrapper>
    );
}
