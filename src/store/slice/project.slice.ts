import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MeetingType = "IN_PERSON" | null;

interface IProjectState {
    step: number;

    title: string;
    description: string;
    meetingType: MeetingType;
    category: string;
    attachmentFiles: string[];
    hashtags: string[];
}

const initialState: IProjectState = {
    step: 0,

    title: "",
    description: "",
    meetingType: null,
    category: "",
    attachmentFiles: [],
    hashtags: [],
};

const projectSlice = createSlice({
    name: "getp/project",
    initialState,

    reducers: {
        nextStep: (state) => {
            state.step++;
        },
        prevStep: (state) => {
            state.step--;
        },
        initializeStep: (state) => {
            state.step = 0;
        },
        initializeState: (state) => {
            state.step = 0;
            state.title = "";
            state.description = "";
            state.meetingType = null;
            state.category = "";
            state.attachmentFiles = [];
            state.hashtags = [];
        },

        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        setMeetingType: (state, action: PayloadAction<MeetingType>) => {
            state.meetingType = action.payload;
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        addAttachmentFile: (state, action: PayloadAction<string>) => {
            state.attachmentFiles.push(action.payload);
        },
        removeAttachmentFile: (state, action: PayloadAction<string>) => {
            state.attachmentFiles.filter((value) => value !== action.payload);
        },
        addHashTag: (state, action: PayloadAction<string>) => {
            state.hashtags.push(action.payload);
        },
        removeHashTag: (state, action: PayloadAction<string>) => {
            state.hashtags.filter((value) => value !== action.payload);
        },
    },
});

export const projectAction = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
