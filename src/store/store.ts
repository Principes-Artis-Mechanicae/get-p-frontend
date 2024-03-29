import { persistReducer, persistStore } from "redux-persist";

import { authSlice } from "./slice/auth.slice";
import { pageSlice } from "./slice/page.slice";
import { userInterfaceSlice } from "./slice/userInterface.slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"],
};

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    userInterface: userInterfaceSlice.reducer,
    page: pageSlice.reducer,
});

export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
