import { useCallback, useRef, useState, useEffect } from "react";

import { useHashTag } from "@getp/hooks/people/useHashTag";
import { useTechStack } from "@getp/hooks/people/useTechStack";

import { peopleService } from "./service";
import { useMutation } from "@tanstack/react-query";

export type MyPeopleProfile = {
    introduction: string;
    activityArea: string;
    education: {
        school: string;
        major: string;
    };
    techStacks: string[];
    hashtags: string[];
    portfolios: { description: string; url: string }[];
};

export const usePeopleProfileEdit = () => {
    const schoolRef = useRef<HTMLInputElement | null>(null);
    const majorRef = useRef<HTMLInputElement | null>(null);
    const activityAreaRef = useRef<HTMLInputElement | null>(null);
    const introductionRef = useRef<HTMLTextAreaElement | null>(null);

    const [initialMyPeopleProfile, setInitialMyPeopleProfile] = useState<MyPeopleProfile | null>(null);
    const [attachmentFiles, setAttachmentFiles] = useState<
        {
            description: string;
            url: string;
        }[]
    >([]);

    const { state } = useTechStack();
    const { hashtag } = useHashTag();

    useEffect(() => {
        async function fetchInitialMyPeopleProfile() {
            const response = await peopleService.readPeopleProfile();
            if (response) {
                setInitialMyPeopleProfile(response);
            } else if (response === false) {
                setInitialMyPeopleProfile(null);
            }
        }

        fetchInitialMyPeopleProfile();
    }, []);

    const { mutate } = useMutation({
        mutationFn: async () => {
            const profileData = {
                education: {
                    school: schoolRef.current?.value as string,
                    major: majorRef.current?.value as string,
                },
                activityArea: activityAreaRef.current?.value as string,
                introduction: introductionRef.current?.value as string,
                techStacks: state.selected.map((selectedItem) => selectedItem.value),
                portfolios: attachmentFiles,
                hashtags: hashtag,
            };

            if (!initialMyPeopleProfile) {
                return await peopleService.registerPeopleProfile(profileData);
            } else {
                return await peopleService.editPeopleProfile(profileData);
            }
        },
        onSuccess: () => {
            // TODO: 피플 프로필 관련 Query Key Invalidation
            // queryClient.invalidateQueries();
        },
    });

    const handleEditBtnClicked = useCallback(() => {
        mutate();
    }, [mutate]);

    return {
        schoolRef,
        majorRef,
        activityAreaRef,
        introductionRef,
        setAttachmentFiles,
        handleEditBtnClicked,
        initialMyPeopleProfile,
    };
};
