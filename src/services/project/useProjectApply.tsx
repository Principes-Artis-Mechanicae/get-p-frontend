import { useCallback, useState, useRef } from "react";

import { projectService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const useProjectApply = () => {
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
    const [attachmentFiles, setAttachmentFiles] = useState<string[]>([]);

    const mutation = useMutation({
        mutationFn: () =>
            projectService.applyProjectById({
                expectedDuration: {
                    startDate: startDate,
                    endDate: endDate,
                },
                description: descriptionRef.current?.value as string,
                attachmentFiles: attachmentFiles,
            }),
    });

    const handleApplyBtnClicked = useCallback(() => {
        mutation.mutate();
    }, [mutation]);

    return { setStartDate, setEndDate, descriptionRef, setAttachmentFiles, handleApplyBtnClicked };
};
