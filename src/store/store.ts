import { persistReducer, persistStore } from "redux-persist";

import { authReducer } from "./slice/auth.slice";
import { signUpReducer } from "./slice/signup.slice";
import { uiReducer } from "./slice/ui.slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["auth"],
};

const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,

    signUp: signUpReducer,
});

export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
});

export const persistor = persistStore(store);

export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type GetState = typeof store.getState;
