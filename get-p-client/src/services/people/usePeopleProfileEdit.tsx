import { useCallback, useRef, useState } from "react";

import { useHashTag } from "@/hooks/people/useHashTag";
import { useTechStack } from "@/hooks/people/useTechStack";

import { peopleService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const usePeopleProfileEdit = () => {
    const schoolRef = useRef<HTMLInputElement | null>(null);
    const majorRef = useRef<HTMLInputElement | null>(null);
    const activityAreaRef = useRef<HTMLInputElement | null>(null);
    const introductionRef = useRef<HTMLTextAreaElement | null>(null);

    const [attachmentFiles, setAttachmentFiles] = useState<
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
                portfolios: attachmentFiles,
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

    return { schoolRef, majorRef, activityAreaRef, introductionRef, setAttachmentFiles, handleEditBtnClicked };
};
