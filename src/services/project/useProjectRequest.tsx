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
            dispatch(projectAction.initializeState());
        },
    });

    const isPostProjectInputValid = meetingType && category;
    const isProjectDurationValid =
        applicationDuration.startDate &&
        applicationDuration.endDate &&
        estimatedDuration.startDate &&
        estimatedDuration.endDate;

    return { isPostProjectInputValid, isProjectDurationValid, ...mutation };
};
