import { useContext } from "react";

import { TechStackContext } from "@getp/common/contexts/TechStackContext";

export const useTechStack = () => {
    const context = useContext(TechStackContext);
    if (!context) throw new Error("useTechStack 은 TechStackProvider 내부에서 사용되어야 합니다");
    return context;
};
