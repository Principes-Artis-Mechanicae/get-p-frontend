import { persistReducer, persistStore } from "redux-persist";

import { authSlice } from "./slice/auth.slice";
import { signUpSlice } from "./slice/signup.slice";
import { uiSlice } from "./slice/ui.slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["auth"],
};

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    ui: uiSlice.reducer,

    signUp: signUpSlice.reducer,
});

export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
});

export const persistor = persistStore(store);

export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
