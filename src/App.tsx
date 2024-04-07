import { useEffect, useState } from "react";
import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "@/common/layout/MainLayout";

import HomePage from "@/pages/HomePage";
import FindPasswordPage from "@/pages/auth/FindPasswordPage";
import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";

import "./globals.css";
import { PersistGate } from "@/store/persist/PersistGate";
import { persistor, store } from "@/store/store";

export default function App() {
    useEffect(() => {
        persistor.persist();
    }, []);

    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route path="/" element={<HomePage />}></Route>
                            <Route path="auth/signin" element={<SignInPage />}></Route>
                            <Route path="auth/signup" element={<SignUpPage />}></Route>
                            <Route path="auth/findpw" element={<FindPasswordPage />}></Route>
                        </Route>
                    </Routes>
                </PersistGate>
            </Provider>
        </>
    );
}
