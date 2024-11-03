import { useContext } from "react";

import { HashTagContext } from "@getp/common/contexts/HashTagContext";

export const useHashTag = () => {
    const hashtagContext = useContext(HashTagContext);
    if (!hashtagContext) throw new Error("useHashTag 훅은 HashTagProvider 내부에서 사용되어야 합니다");
    return hashtagContext;
};
