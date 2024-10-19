import { createContext, useContext, useState } from "react";

export interface SelectedItem {
    index: number;
    value: string;
}

export const DropDownContext = createContext<{
    selected: SelectedItem;
    setSelected: React.Dispatch<React.SetStateAction<SelectedItem>>;
} | null>(null);

export const useDropDown = () => {
    const context = useContext(DropDownContext);
    if (!context) throw new Error("useDropDown 은 DropDownContext 내부에서 사용되어야 합니다");
    return context;
};

export const DropDownContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [selected, setSelected] = useState<SelectedItem>({ index: -1, value: "" });
    return <DropDownContext.Provider value={{ selected, setSelected }}>{children}</DropDownContext.Provider>;
};
