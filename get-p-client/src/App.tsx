import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { persistor, store } from "@/store/store";

import { queryClient } from "@/config/query";

import { GlobalStyles } from "@/styles/styles";

import { Router } from "@/Router";
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
