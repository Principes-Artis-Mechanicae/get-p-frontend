import { useCallback, useRef, useState } from "react";

import { useHashTag } from "@/hooks/useHashTag";
import { useTechStack } from "@/hooks/useTechStack";

// import { queryClient } from "@/config/query";
import { peopleService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const usePeopleProfileEdit = () => {
    const schoolRef = useRef<HTMLInputElement | null>(null);
    const majorRef = useRef<HTMLInputElement | null>(null);
    const activityAreaRef = useRef<HTMLInputElement | null>(null);
    const introductionRef = useRef<HTMLTextAreaElement | null>(null);

    const [portfolio, setPortFolio] = useState<
        {
            description: string;
            url: string;
        }[]
    >([]);

    const { state } = useTechStack();
    const { hashtag } = useHashTag();

    const mutation = useMutation({
        mutationFn: () =>
            peopleService.registerPeopleProfile({
                education: {
                    school: schoolRef.current?.value as string,
                    major: majorRef.current?.value as string,
                },
                activityArea: activityAreaRef.current?.value as string,
                introduction: introductionRef.current?.value as string,
                techStacks: state.selected.map((selectedItem) => selectedItem.value),
                portfolios: portfolio,
                hashtags: hashtag,
            }),
        onSuccess: () => {
            // TODO: 피플 프로필 관련 Query Key Invalidation
            // queryClient.invalidateQueries();
        },
    });

    const handleEditBtnClicked = useCallback(() => {
        mutation.mutate();
    }, [mutation]);

    const handleAddPortfolio = useCallback(() => {
        // TODO: 포트폴리오 파일 업로드 API 구현 완료시 수정 필요
        const description = window.prompt("포트폴리오 내용을 입력해주세요") as string;
        const url = window.prompt("포트폴리오 URL 을 입력해주세요") as string;

        setPortFolio((portfolio) => [...portfolio, { description: description, url: url }]);
    }, []);

    return { schoolRef, majorRef, activityAreaRef, introductionRef, handleAddPortfolio, handleEditBtnClicked };
};
