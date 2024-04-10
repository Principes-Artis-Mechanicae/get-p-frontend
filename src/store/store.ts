import { PersistorOptions, WebStorage, persistReducer, persistStore } from "redux-persist";

import { persistStorage } from "./persist/persistStorage";
import { authSlice } from "./slice/auth.slice";
import { signUpSlice } from "./slice/signup.slice";
import { uiSlice } from "./slice/ui.slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage: persistStorage as WebStorage,
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

export const persistor = persistStore(store, { manualPersist: true } as PersistorOptions);

export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
