import { useCallback, useState } from "react";

import { PageButton, PaginationWrapper } from "./Pagination.style";

export interface IPagination {
    currentPage: number;
    pageBegin: number;
    pageLength: number;
}

export const Pagination: React.FC<IPagination> = ({ currentPage, pageBegin, pageLength }) => {
    const [page, setPage] = useState<number>(currentPage);

    const handlePageBtnClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        setPage(parseInt(e.currentTarget.innerHTML));
    }, []);

    return (
        <PaginationWrapper>
            {Array.from({ length: pageLength }, (_, i) => pageBegin + i).map((value, index) => {
                return (
                    <PageButton key={index} onClick={handlePageBtnClick} active={page === value}>
                        {value}
                    </PageButton>
                );
            })}
        </PaginationWrapper>
    );
};
