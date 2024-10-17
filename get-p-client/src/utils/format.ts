import { isValueAssigned } from "./validation";

export const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export const formatDate = (date: string) => {
    const [year, month, day] = date.split("-").map(Number);
    if (!isValueAssigned([year, month, day])) throw new Error("date 필드는 '년-월-일' 의 문자열 타입이어야 합니다");
    return new Date().setFullYear(year, month, day);
};
