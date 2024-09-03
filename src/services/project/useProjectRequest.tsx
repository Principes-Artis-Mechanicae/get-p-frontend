import { ChangeEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { projectService } from "./service";
import { projectAction } from "@/store/slice/project.slice";
import { RootDispatch, RootState } from "@/store/store";
import { useMutation } from "@tanstack/react-query";

export const useProjectRequest = () => {
    const {
        title,
        description,
        meetingType,
        category,
        attachmentFiles,
        hashtags,
        applicationDuration,
        estimatedDuration,
        payment,
    } = useSelector((state: RootState) => state.project);

    const dispatch: RootDispatch = useDispatch();

    const mutation = useMutation({
        mutationFn: () =>
            projectService.requestProject({
                title,
                description,
                category,
                attachmentFiles,
                hashtags,
                payment,
                applicationDuration,
                estimatedDuration,
                meetingType,
            }),
        onSuccess: () => {
            // queryClient.invalidateQueries()
            dispatch(projectAction.nextStep());
        },
    });

    const isPostProjectInputValid = meetingType && category;
    const isProjectDurationValid =
        applicationDuration.startDate &&
        applicationDuration.endDate &&
        estimatedDuration.startDate &&
        estimatedDuration.endDate;

    const handleApplicationStartDateChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(projectAction.setApplicationStartDate(e.target.value));
        },
        [dispatch],
    );

    const handleApplicationEndDateChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(projectAction.setApplicationEndDate(e.target.value));
        },
        [dispatch],
    );

    const handleEstimatedStartDateChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(projectAction.setEstimatedStartDate(e.target.value));
        },
        [dispatch],
    );

    const handleEstimatedEndDateChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(projectAction.setEstimatedEndDate(e.target.value));
        },
        [dispatch],
    );

    return {
        isPostProjectInputValid,
        isProjectDurationValid,
        handleApplicationStartDateChange,
        handleApplicationEndDateChange,
        handleEstimatedEndDateChange,
        handleEstimatedStartDateChange,
        ...mutation,
    };
};
