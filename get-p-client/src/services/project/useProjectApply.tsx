import { useCallback, useState, useRef } from "react";

import { PeopleType } from "../people/types";
import { projectService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const useProjectApply = () => {
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
    const [attachmentFiles, setAttachmentFiles] = useState<{ description: string; url: string }[]>([]);
    const [peopleType, setPeopleType] = useState<PeopleType | null>(null);

    console.log(attachmentFiles.map((file) => file.url));

    const mutation = useMutation({
        mutationFn: () =>
            projectService.applyProjectById({
                expectedDuration: {
                    startDate: startDate,
                    endDate: endDate,
                },
                description: descriptionRef.current?.value as string,
                attachmentFiles: attachmentFiles.map((file) => file.url),
            }),
    });

    const handleApplyBtnClicked = useCallback(() => {
        mutation.mutate();
    }, [mutation]);

    const handlePeopleType = useCallback(
        (type: PeopleType) => {
            setPeopleType(peopleType === type ? null : type);
        },
        [peopleType],
    );

    return {
        setStartDate,
        setEndDate,
        descriptionRef,
        setAttachmentFiles,
        handleApplyBtnClicked,
        handlePeopleType,
        peopleType,
    };
};
