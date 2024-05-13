import { useCallback, useEffect, useState } from "react";

import { PageButton, PaginationWrapper } from "./Pagination.style";

export interface IPagination {
    totalItems: number;
    itemCountPerPage: number;
    pageCount: number;
    currentPage: number;
}

export const Pagination: React.FC<IPagination> = ({ totalItems, itemCountPerPage, pageCount, currentPage }) => {
    const totalPages = Math.ceil(totalItems / itemCountPerPage);
    const [page, setPage] = useState<number>(currentPage);
    const [pageBegin, setPageBegin] = useState<number>(1);
    const [pageState, setPageState] = useState({
        noPrev: pageBegin === 1,
        noNext: pageBegin + pageCount - 1 >= totalPages,
    });

    useEffect(() => {
        const newPageState = {
            noPrev: pageBegin === 1,
            noNext: pageBegin + pageCount - 1 >= totalPages,
        };
        setPageState(() => newPageState);
    }, [pageBegin, pageCount, totalPages]);

    useEffect(() => {
        const newPageBegin = Math.floor((page - 1) / pageCount) * pageCount + 1;
        setPageBegin(() => newPageBegin);
        console.log(`currentpage = ${page}`);
    }, [page, pageCount]);

    const handlePageBtnClick = useCallback((pageNum: number) => {
        setPage(pageNum);
    }, []);

    return (
        <PaginationWrapper>
            {!pageState.noPrev && (
                <PageButton onClick={() => handlePageBtnClick(pageBegin - 1)} active={false}>
                    {"<"}
                </PageButton>
            )}
            {Array.from({ length: pageCount }, (_, i) => pageBegin + i).map((value, index) => {
                return (
                    <>
                        {value <= totalPages && (
                            <PageButton
                                key={pageBegin + index}
                                onClick={() => handlePageBtnClick(value)}
                                active={page === pageBegin + index}
                            >
                                {pageBegin + index}
                            </PageButton>
                        )}
                    </>
                );
            })}
            {!pageState.noNext && (
                <PageButton onClick={() => handlePageBtnClick(pageBegin + pageCount)} active={false}>
                    {">"}
                </PageButton>
            )}
        </PaginationWrapper>
    );
};
