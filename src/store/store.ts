import { persistReducer, persistStore } from "redux-persist";

import { authSlice } from "./slice/auth.slice";
import { pageSlice } from "./slice/page.slice";
import { userInterfaceSlice } from "./slice/userInterface.slice";
import { configureStore, combineReducers, Store } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["auth"],
};

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    userInterface: userInterfaceSlice.reducer,
    page: pageSlice.reducer,
});

let store: Store;
if (import.meta.env.SSR) {
    store = configureStore({
        reducer: rootReducer,
    });
} else {
    store = configureStore({
        reducer: persistReducer(persistConfig, rootReducer),
    });
}

export { store };
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
