import { PersistorOptions, WebStorage, persistReducer, persistStore } from "redux-persist";

import { persistStorage } from "./persist/persistStorage";
import { authSlice } from "./slice/auth.slice";
import { pageSlice } from "./slice/page.slice";
import { userInterfaceSlice } from "./slice/userInterface.slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage: persistStorage as WebStorage,
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

export const persistor = persistStore(store, { manualPersist: true } as PersistorOptions);
// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
