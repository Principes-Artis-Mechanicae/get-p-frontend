import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { AnimatePresence } from "framer-motion";

import { MainLayout } from "@/common/layout/MainLayout";

import FindPasswordPage from "@/pages/auth/FindPasswordPage";
import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import EditClientPage from "@/pages/client/EditClientPage";
import RegisterClientPage from "@/pages/client/RegisterClientPage";
import HomePage from "@/pages/home/HomePage";
import PeopleDetailPage from "@/pages/people/PeopleDetailPage";
import PeopleInfoRegisterPage from "@/pages/people/PeopleInfoRegisterPage";
import PeopleListPage from "@/pages/people/PeopleListPage";
import PeopleProfileEditPage from "@/pages/people/PeopleProfileEditPage";

import { queryClient } from "@/config/query";

import "./globals.css";
import { persistor, store } from "@/store/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/lib/integration/react";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <QueryClientProvider client={queryClient}>
                        <PersistGate loading={null} persistor={persistor}>
                            <AnimatePresence>
                                <Routes>
                                    <Route index element={<HomePage />} />

                                    <Route path="/" element={<MainLayout />}>
                                        <Route path="auth/signin" element={<SignInPage />}></Route>
                                        <Route path="auth/signup" element={<SignUpPage />}></Route>
                                        <Route path="auth/findpw" element={<FindPasswordPage />}></Route>

                                        <Route path="people" element={<PeopleListPage />} />
                                        <Route path="people/:id" element={<PeopleDetailPage />}></Route>
                                        <Route path="people/register" element={<PeopleInfoRegisterPage />}></Route>
                                        <Route path="people/edit" element={<PeopleProfileEditPage />} />

                                        <Route path="client/register" element={<RegisterClientPage />} />
                                        <Route path="client/edit" element={<EditClientPage />} />
                                    </Route>
                                </Routes>
                            </AnimatePresence>
                        </PersistGate>
                    </QueryClientProvider>
                </Provider>
            </BrowserRouter>
        </>
    );
}
