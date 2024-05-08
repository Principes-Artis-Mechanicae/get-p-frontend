/* eslint-disable no-case-declarations */
import { createContext, useContext, useReducer } from "react";

import { techStack } from "@/constants/techstack";

export interface IGroup {
    id: number;
    isOpened: boolean;
}

export interface AccordionState {
    groups: IGroup[];
}

export interface AccordionAction {
    type: "OPEN_ALL" | "CLOSE_ALL" | "OPEN_BY_GROUP_ID" | "CLOSE_BY_GROUP_ID";
    payload: number;
}

const accordionState: AccordionState = {
    groups: techStack.map((stack) => {
        return {
            id: stack.groupId,
            isOpened: false,
        };
    }),
};

const AccordionContext = createContext<{
    state: AccordionState;
    dispatch: React.Dispatch<AccordionAction>;
}>({
    state: accordionState,
    dispatch: () => undefined,
});

const reducer: React.Reducer<AccordionState, AccordionAction> = (state, action) => {
    let updatedGroups: IGroup[];

    switch (action.type) {
        case "OPEN_ALL":
            updatedGroups = state.groups.map((group) => ({
                ...group,
                isOpened: true,
            }));
            return {
                ...state,
                groups: updatedGroups,
            };
        case "CLOSE_ALL":
            updatedGroups = state.groups.map((group) => ({
                ...group,
                isOpened: false,
            }));
            return {
                ...state,
                groups: updatedGroups,
            };
        case "OPEN_BY_GROUP_ID":
            updatedGroups = state.groups.map((group) => {
                if (action.payload === group.id) {
                    return {
                        id: group.id,
                        isOpened: true,
                    };
                }
                return group;
            });
            return {
                ...state,
                groups: updatedGroups,
            };
        case "CLOSE_BY_GROUP_ID":
            updatedGroups = state.groups.map((group) => {
                if (action.payload === group.id) {
                    return {
                        id: group.id,
                        isOpened: false,
                    };
                }
                return group;
            });
            return {
                ...state,
                groups: updatedGroups,
            };
        default:
            return state;
    }
};

export const AccordionProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, accordionState);

    return (
        <AccordionContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </AccordionContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error("useAccordion 은 AccordionProvider 내부에서 사용되어야 합니다");
    return context;
};
