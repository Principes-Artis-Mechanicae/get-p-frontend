import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export enum Mode {
    EDIT = "edit",
    REGISTER = "register",
}

export const useMode = (defaultMode: Mode) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const mode = searchParams.get("mode");

    useEffect(() => {
        setSearchParams({ mode: mode || defaultMode });
    }, [defaultMode, mode, setSearchParams]);

    return {
        mode: searchParams.get("mode") as Mode,
    };
};
