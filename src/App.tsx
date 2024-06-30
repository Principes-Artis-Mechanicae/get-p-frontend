import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { AnimatePresence } from "framer-motion";

import { MainLayout } from "@/common/layout/MainLayout";

import FindPasswordPage from "@/pages/auth/FindPasswordPage";
import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import HomePage from "@/pages/home/HomePage";

import "./globals.css";
import PeopleListPage from "./pages/people/PeopleListPage";
import PeopleProfileEditPage from "./pages/people/PeopleProfileEditPage";
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
                                <Route index element={<HomePage />} />

                                <Route path="/" element={<MainLayout />}>
                                    <Route path="auth/signin" element={<SignInPage />} />
                                    <Route path="auth/signup" element={<SignUpPage />} />
                                    <Route path="auth/findpw" element={<FindPasswordPage />} />

                                    <Route path="people" element={<PeopleListPage />} />
                                    <Route path="people/edit" element={<PeopleProfileEditPage />} />
                                </Route>
                            </Routes>
                        </AnimatePresence>
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        </>
    );
}
