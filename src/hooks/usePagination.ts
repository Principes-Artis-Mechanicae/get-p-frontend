import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PaginationOptions {
    totalItems: number;
    itemCountPerPage: number;
    pageCount: number;
    currentPage: number;
    basePath: string;
}

interface PaginationResult {
    pageBegin: number;
    noPrev: boolean;
    noNext: boolean;
    totalPages: number;
    gotoPrev: () => void;
    gotoNext: () => void;
    gotoPage: (pageNumber: number) => void;
}

const usePagination = ({
    totalItems,
    itemCountPerPage,
    pageCount,
    currentPage,
    basePath,
}: PaginationOptions): PaginationResult => {
    const totalPages = Math.ceil(totalItems / itemCountPerPage);
    const [pageBegin, setPageBegin] = useState(1);
    const noPrev = pageBegin === 1;
    const noNext = pageBegin + pageCount - 1 >= totalPages;
    const navigate = useNavigate();

    useEffect(() => {
        if (currentPage === pageBegin + pageCount) setPageBegin((prev) => prev + pageCount);
        if (currentPage < pageBegin) setPageBegin((prev) => prev - pageCount);
    }, [currentPage, pageCount, pageBegin]);

    const gotoPrev = () => {
        if (!noPrev) {
            navigate(`${basePath}?page=${pageBegin - 1}`);
        }
    };

    const gotoNext = () => {
        if (!noNext) {
            navigate(`${basePath}?page=${pageBegin + pageCount}`);
        }
    };

    const gotoPage = (pageNumber: number) => {
        navigate(`${basePath}?page=${pageNumber}`);
    };

    return { pageBegin, noPrev, noNext, totalPages, gotoPrev, gotoNext, gotoPage };
};

export default usePagination;
