/* eslint-disable no-case-declarations */
import { createContext, useContext, useReducer } from "react";

const techStackState: TechStackState = {
    selected: [],
};

const TechStackContext = createContext<{
    state: TechStackState;
    dispatch: React.Dispatch<TechStackAction>;
}>({
    state: techStackState,
    dispatch: () => undefined,
});

export interface TechStackItem {
    value: string;
}

export interface TechStackState {
    selected: TechStackItem[];
}

export interface TechStackAction {
    type: "ADD_TECH_STACK" | "REMOVE_TECH_STACK" | "TOGGLE_TECH_STACK";
    payload: TechStackItem;
}

const reducer: React.Reducer<TechStackState, TechStackAction> = (state, action) => {
    switch (action.type) {
        case "ADD_TECH_STACK":
            return {
                ...state,
                selected: [
                    ...state.selected,
                    {
                        value: action.payload.value,
                    },
                ],
            };
        case "REMOVE_TECH_STACK":
            return {
                ...state,
                selected: state.selected.filter((item) => item.value !== action.payload.value),
            };
        case "TOGGLE_TECH_STACK":
            const exists = state.selected.find((item) => item.value === action.payload.value);
            if (exists) {
                return {
                    ...state,
                    selected: state.selected.filter((item) => item.value !== action.payload.value),
                };
            } else {
                return {
                    ...state,
                    selected: [...state.selected, action.payload],
                };
            }
        default:
            return state;
    }
};

export const TechStackProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, techStackState);
    return <TechStackContext.Provider value={{ state, dispatch }}>{children}</TechStackContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTechStack = () => {
    const context = useContext(TechStackContext);
    if (!context) throw new Error("useTechStack 은 TechStackProvider 내부에서 사용되어야 합니다");
    return context;
};
