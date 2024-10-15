import { useState, createContext } from "react";

export const HashTagContext = createContext<{
    hashtag: string[];
    setHashTag: React.Dispatch<React.SetStateAction<string[]>>;
} | null>(null);

export const HashTagProvider = ({ children }: { children?: React.ReactNode }) => {
    const [hashtag, setHashTag] = useState<string[]>([]);
    return <HashTagContext.Provider value={{ hashtag, setHashTag }}>{children}</HashTagContext.Provider>;
};
