import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import { projectService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const useProjectLike = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const { id } = useParams();

    const mutation = useMutation({
        mutationFn: () =>
            isActive ? projectService.registerProjectLike(Number(id)) : projectService.deleteProjectLike(Number(id)),
    });

    const handleLikeClick = useCallback(() => {
        setIsActive((prev) => {
            const newLikeClick = !prev;
            mutation.mutate();
            return newLikeClick;
        });
    }, [mutation]);

    return {
        isActive,
        handleLikeClick,
    };
};
