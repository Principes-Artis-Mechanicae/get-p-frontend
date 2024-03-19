import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "@/common/layout/MainLayout";

import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";

import "./globals.css";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route path="auth/signin" element={<SignInPage />}></Route>
                            <Route path="auth/signup" element={<SignUpPage />}></Route>
                        </Route>
                    </Routes>
                </PersistGate>
            </Provider>
        </>
    );
}
