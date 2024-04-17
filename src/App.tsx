import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { AnimatePresence } from "framer-motion";

import { MainLayout } from "@/common/layout/MainLayout";

import HomePage from "@/pages/HomePage";
import FindPasswordPage from "@/pages/auth/FindPasswordPage";
import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";

import "./globals.css";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/lib/integration/react";

export default function App() {
    return (
        <>
            <BrowserRouter>
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
            </BrowserRouter>
        </>
    );
}
