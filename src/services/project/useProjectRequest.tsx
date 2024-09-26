import { ChangeEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isValidDuration } from "@/utils/validation";

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

    const isProjectDurationValid = (): string | boolean => {
        if (
            !(
                applicationDuration.startDate &&
                applicationDuration.endDate &&
                estimatedDuration.startDate &&
                estimatedDuration.endDate
            )
        )
            return "아직 입력하지 않은 항목이 존재합니다";

        if (
            !(
                isValidDuration(applicationDuration.startDate, applicationDuration.endDate) &&
                isValidDuration(estimatedDuration.startDate, estimatedDuration.endDate)
            )
        )
            return "시작 날짜는 마감 날짜보다 앞서야 합니다";

        return true;
    };

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
