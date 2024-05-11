import { css } from "@emotion/react";

export const place_center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const horizontal_center = css`
    display: flex;
    justify-content: center;
`;

export const vertical_center = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return {
        color: isActive ? "#476FF1" : "#000",
        fontWeight: isActive ? "bold" : "normal",
    };
};

export const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};
