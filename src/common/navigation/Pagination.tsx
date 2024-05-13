import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageButton, PaginationWrapper } from "./Pagination.style";

export interface IPagination {
    totalItems: number;
    itemCountPerPage: number;
    pageCount: number;
    currentPage: number;
}

export const Pagination: React.FC<IPagination> = ({ totalItems, itemCountPerPage, pageCount, currentPage }) => {
    const totalPages = Math.ceil(totalItems / itemCountPerPage);
    // const [page, setPage] = useState<number>(currentPage);
    const [pageBegin, setPageBegin] = useState<number>(1);
    const noPrev = pageBegin === 1;
    const noNext = pageBegin + pageCount - 1 >= totalPages;
    const navigate = useNavigate();

    useEffect(() => {
        if (currentPage === pageBegin + pageCount) setPageBegin((prev) => prev + pageCount);
        if (currentPage < pageBegin) setPageBegin((prev) => prev - pageCount);
        // console.log(`pageBegin = ${pageBegin}`);
    }, [currentPage, pageCount, pageBegin]);

    return (
        <PaginationWrapper>
            {!noPrev && (
                <PageButton onClick={() => navigate(`/peopleList?page=${pageBegin - 1}`)} active={false}>
                    {"<"}
                </PageButton>
            )}
            {Array.from({ length: pageCount }, (_, i) => pageBegin + i).map((value, index) => {
                return (
                    <>
                        {value <= totalPages && (
                            <PageButton
                                key={pageBegin + index}
                                onClick={() => navigate(`/peopleList?page=${value}`)}
                                active={currentPage === pageBegin + index}
                            >
                                {pageBegin + index}
                            </PageButton>
                        )}
                    </>
                );
            })}
            {!noNext && (
                <PageButton onClick={() => navigate(`/peopleList?page=${pageBegin + pageCount}`)} active={false}>
                    {">"}
                </PageButton>
            )}
        </PaginationWrapper>
    );
};
