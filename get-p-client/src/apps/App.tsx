import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { queryClient } from "@getp/apps/config/query";
import { Router } from "@getp/apps/router";

import { persistor, store } from "@getp/store/store";

import { GlobalStyles } from "@getp/styles/styles";

import { QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/lib/integration/react";

export default function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <PersistGate loading={null} persistor={persistor}>
                        <AnimatePresence>
                            <Router />
                            <GlobalStyles />
                        </AnimatePresence>
                    </PersistGate>
                </QueryClientProvider>
            </Provider>
        </BrowserRouter>
    );
}
