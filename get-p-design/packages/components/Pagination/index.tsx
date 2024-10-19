import { useEffect } from "react";

import { usePagination } from "./usePagination";

import { PageButton, PaginationWrapper } from "./index.style";

export interface PaginationProps {
    totalPages: number;
    pageGroupSize: number;
}

export const Pagination = ({ totalPages: _totalPages, pageGroupSize: _pageGroupSize }: PaginationProps) => {
    const {
        pageBegin,
        currentGroupIndex,
        currentPage,
        handleNextPageBtnClick,
        handlePrevPageBtnClick,
        handlePage,
        totalPages,
        setTotalPages,
        pageGroupSize,
        setPageGroupSize,
    } = usePagination();

    useEffect(() => {
        setTotalPages(_totalPages);
        setPageGroupSize(_pageGroupSize);
    }, [_pageGroupSize, _totalPages, setPageGroupSize, setTotalPages]);

    if (totalPages > pageBegin + pageGroupSize) {
        // 마지막 페이지 그룹
        // ex. 17페이지, 그룹크기 5 > 16,17
        return (
            <PaginationWrapper>
                {currentGroupIndex !== 0 && (
                    <PageButton active={false} onClick={handlePrevPageBtnClick}>
                        {"<"}
                    </PageButton>
                )}
                {Array.from({ length: pageGroupSize }, (_, i) => pageBegin + i + 1).map((page) => {
                    return (
                        <PageButton key={page} active={currentPage === page} onClick={() => handlePage(page)}>
                            {page}
                        </PageButton>
                    );
                })}
                {currentGroupIndex < Math.floor(totalPages / pageGroupSize) && (
                    <PageButton active={false} onClick={handleNextPageBtnClick}>
                        {">"}
                    </PageButton>
                )}
            </PaginationWrapper>
        );
    } else {
        return (
            <PaginationWrapper>
                {currentGroupIndex !== 0 && (
                    <PageButton active={false} onClick={handlePrevPageBtnClick}>
                        {"<"}
                    </PageButton>
                )}
                {Array.from({ length: totalPages % pageGroupSize }, (_, i) => pageBegin + i + 1).map((page) => {
                    return (
                        <PageButton active={currentPage === page} onClick={() => handlePage(page)}>
                            {page}
                        </PageButton>
                    );
                })}
                {currentGroupIndex < Math.floor(totalPages / pageGroupSize) && (
                    <PageButton active={false}>{">"}</PageButton>
                )}
            </PaginationWrapper>
        );
    }
};
