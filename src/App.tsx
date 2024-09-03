import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { AnimatePresence } from "framer-motion";

import { queryClient } from "@/config/query";

import { Router } from "./Router";
import "./globals.css";
import { persistor, store } from "@/store/store";
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
                        </AnimatePresence>
                    </PersistGate>
                </QueryClientProvider>
            </Provider>
        </BrowserRouter>
    );
}
