import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import { projectService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const useLikeClick = () => {
    const [likeClick, setLikeClick] = useState<boolean>(false);
    const { id } = useParams();

    const mutation = useMutation({
        mutationFn: () =>
            likeClick ? projectService.registerProjectLike(Number(id)) : projectService.deleteProjectLike(Number(id)),
    });

    const handleLikeClick = useCallback(() => {
        setLikeClick((prev) => {
            const newLikeClick = !prev;
            mutation.mutate();
            return newLikeClick;
        });
    }, [mutation]);

    return {
        likeClick,
        handleLikeClick,
    };
};
