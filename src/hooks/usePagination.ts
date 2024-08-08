import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export interface PaginationOptions {
    totalPages: number;
    pageGroupSize: number;
}

/**
 * @param {Number} totalPages 전체 페이지 수 (pageInfo.totalPages)
 * @param {Number} pageGroupSize 페이지당 페이지 인덱스 수
 * @returns
 */
export const usePagination = (options: PaginationOptions) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const currentPage = parseInt(searchParams.get("page") ?? "1");
    const [currentGroupIndex, setCurrentGroupIndex] = useState<number>(
        Math.floor((currentPage - 1) / options.pageGroupSize),
    );
    const pageBegin = currentGroupIndex * options.pageGroupSize;

    const handlePage = (page: number) => {
        let newSearchParam = "?";
        for (const key of searchParams.keys()) {
            if (key === "page") newSearchParam += `page=${page}&`;
            else newSearchParam += `${key}=${searchParams.get(key) as string}&`;
        }
        navigate(location.pathname + newSearchParam);
        setCurrentGroupIndex(Math.floor((page - 1) / options.pageGroupSize));
    };

    const handleNextPageBtnClick = () => {
        const pageParam = searchParams.get("page");
        if (!pageParam) throw new Error("URL SearchParams 에 page 가 없습니다");
        const nextPage = parseInt(pageParam) + 1;
        handlePage(nextPage);
    };

    const handlePrevPageBtnClick = () => {
        const pageParam = searchParams.get("page");
        if (!pageParam) throw new Error("URL SearchParams 에 page 가 없습니다");
        const prevPage = parseInt(pageParam) - 1;
        handlePage(prevPage);
    };

    return {
        handlePrevPageBtnClick,
        handleNextPageBtnClick,
        handlePage,
        pageBegin,
        currentGroupIndex,
        currentPage,
    };
};
