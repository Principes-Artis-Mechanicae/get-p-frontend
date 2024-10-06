import { useContext } from "react";

import { AccordionContext } from "@/contexts/AccordionContext";

export const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error("useAccordion 은 AccordionProvider 내부에서 사용되어야 합니다");
    return context;
};
