import { ProjectMeetingType, ProjectRequestBody } from "@getp/services/project/types";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProjectState extends ProjectRequestBody {
    step: number;
}

const initialState: IProjectState = {
    step: 0,

    title: "",
    description: "",
    meetingType: null,
    category: null,
    attachmentFiles: [],
    hashtags: [],
    payment: 0,

    applicationDuration: {
        startDate: "",
        endDate: "",
    },
    estimatedDuration: {
        startDate: "",
        endDate: "",
    },
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
            state.category = null;
            state.attachmentFiles = [];
            state.hashtags = [];
        },

        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        setMeetingType: (state, action: PayloadAction<ProjectMeetingType>) => {
            state.meetingType = action.payload;
        },
        setCategory: (state, action: PayloadAction<string>) => {
            switch (action.payload) {
                case "프론트엔드 개발":
                    state.category = "FRONTEND";
                    break;
                case "백엔드 개발":
                    state.category = "BACKEND";
                    break;
                case "앱 개발":
                    state.category = "APP";
                    break;
                case "프로그램 개발":
                    state.category = "PROGRAM";
                    break;
                case "기타":
                    state.category = "ETC";
                    break;
            }
        },
        setPayment: (state, action: PayloadAction<number>) => {
            state.payment = action.payload;
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
            state.hashtags = state.hashtags.filter((value) => value !== action.payload);
        },

        setApplicationStartDate: (state, action: PayloadAction<string>) => {
            state.applicationDuration.startDate = action.payload;
        },
        setApplicationEndDate: (state, action: PayloadAction<string>) => {
            state.applicationDuration.endDate = action.payload;
        },
        setEstimatedStartDate: (state, action: PayloadAction<string>) => {
            state.estimatedDuration.startDate = action.payload;
        },
        setEstimatedEndDate: (state, action: PayloadAction<string>) => {
            state.estimatedDuration.endDate = action.payload;
        },
    },
});

export const projectAction = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
