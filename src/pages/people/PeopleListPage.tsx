import { Pagination } from "@/common/navigation/Pagination";

import { PeopleSearch } from "@/components/people/PeopleSearch";

import { PeopleListWrapper } from "./PeopleListPage.style";

export default function PeopleListPage() {
    return (
        <PeopleListWrapper>
            <PeopleSearch width="100%" height="auto" />
            <Pagination totalItems={200} itemCountPerPage={6} pageCount={10} currentPage={21} />
        </PeopleListWrapper>
    );
}
