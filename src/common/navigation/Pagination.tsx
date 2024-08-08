import { PaginationOptions, usePagination } from "@/hooks/usePagination";

import { PageButton, PaginationWrapper } from "./Pagination.style";

export const Pagination = ({ totalPages, pageGroupSize }: PaginationOptions) => {
    const { pageBegin, currentGroupIndex, currentPage, handleNextPageBtnClick, handlePrevPageBtnClick, handlePage } =
        usePagination({
            totalPages,
            pageGroupSize: 5,
        });

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
                {Array.from({ length: pageGroupSize }, (_, i) => pageBegin + i + 1).map((page, _) => {
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
                {Array.from({ length: totalPages % pageGroupSize }, (_, i) => pageBegin + i + 1).map((page, _) => {
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

export default Pagination;
