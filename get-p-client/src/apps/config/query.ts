import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // 1분 뒤 STALE 상태로 변경
            staleTime: 60 * 1000,
            // 캐시 데이터 5분 뒤 삭제
            gcTime: 60 * 5 * 1000,
        },
    },
});
