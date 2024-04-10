import { useEffect } from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { MainLayout } from "@/common/layout/MainLayout";

import HomePage from "@/pages/HomePage";
import FindPasswordPage from "@/pages/auth/FindPasswordPage";
import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";

import "./globals.css";
import { PersistGate } from "@/store/persist/PersistGate";
import { persistor, store } from "@/store/store";

export default function App({ isClient }: { isClient: boolean }) {
    useEffect(() => {
        if (isClient) persistor.persist();
    }, [isClient]);

    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AnimatePresence>
                        <Routes>
                            <Route path="/" element={<MainLayout />}>
                                <Route path="/" element={<HomePage />}></Route>
                                <Route path="auth/signin" element={<SignInPage />}></Route>
                                <Route path="auth/signup" element={<SignUpPage />}></Route>
                                <Route path="auth/findpw" element={<FindPasswordPage />}></Route>
                            </Route>
                        </Routes>
                    </AnimatePresence>
                </PersistGate>
            </Provider>
        </>
    );
}
