import usePagination from "@/hooks/usePagination";

import { PageButton, PaginationWrapper } from "./Pagination.style";

export interface IPagination {
    totalItems: number;
    itemCountPerPage: number;
    pageCount: number;
    currentPage: number;
    basePath: string;
}

export const Pagination: React.FC<IPagination> = ({
    totalItems,
    itemCountPerPage,
    pageCount,
    currentPage,
    basePath,
}) => {
    const { pageBegin, noPrev, noNext, totalPages, gotoPrev, gotoNext, gotoPage } = usePagination({
        totalItems,
        itemCountPerPage,
        pageCount,
        currentPage,
        basePath,
    });

    return (
        <PaginationWrapper>
            {!noPrev && (
                <PageButton onClick={gotoPrev} active={false}>
                    {"<"}
                </PageButton>
            )}
            {Array.from({ length: pageCount }, (_, i) => pageBegin + i).map((value, index) => {
                return (
                    <>
                        {value <= totalPages && (
                            <PageButton
                                key={pageBegin + index}
                                onClick={() => gotoPage(value)}
                                active={currentPage === pageBegin + index}
                            >
                                {pageBegin + index}
                            </PageButton>
                        )}
                    </>
                );
            })}
            {!noNext && (
                <PageButton onClick={gotoNext} active={false}>
                    {">"}
                </PageButton>
            )}
        </PaginationWrapper>
    );
};

export default Pagination;
