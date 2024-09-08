import { Routes, Route } from "react-router-dom";

import FindPasswordPage from "@/pages/auth/FindPasswordPage";
import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import EditClientPage from "@/pages/client/EditClientPage";
import RegisterClientPage from "@/pages/client/RegisterClientPage";
import HomePage from "@/pages/home/HomePage";
import NotFoundPage from "@/pages/home/NotFoundPage";
import PeopleDetailPage from "@/pages/people/PeopleDetail/PeopleDetailPage";
import PeopleInfoRegisterPage from "@/pages/people/PeopleInfoRegister/PeopleInfoRegisterPage";
import PeopleListPage from "@/pages/people/PeopleList/PeopleListPage";
import PeopleProfileEditPage from "@/pages/people/PeopleProfileEdit/PeopleProfileEditPage";
import ProjectApplyPage from "@/pages/project/ProjectApplyPage";
import ProjectDetailPage from "@/pages/project/ProjectDetailPage";
import ProjectListPage from "@/pages/project/ProjectListPage";
import ProjectRequestPage from "@/pages/project/ProjectRequestPage";

import { MemberType } from "@/services/auth/types";

import { RouteGuard } from "./components/__common__/guard/RouteGuard";
import { MainLayout } from "./components/__common__/layout/MainLayout";

export const Router = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />

            <Route path="/" element={<MainLayout />}>
                <Route path="auth/signin" element={<SignInPage />}></Route>
                <Route path="auth/signup" element={<SignUpPage />}></Route>
                <Route path="auth/findpw" element={<FindPasswordPage />}></Route>

                <Route path="projects" element={<ProjectListPage />} />
                <Route path="people" element={<PeopleListPage />} />
                <Route path="people/:id" element={<PeopleDetailPage />}></Route>

                <Route
                    path="people/edit"
                    element={
                        <RouteGuard role={MemberType.ROLE_PEOPLE}>
                            <PeopleProfileEditPage />
                        </RouteGuard>
                    }
                />
                <Route
                    path="people/register"
                    element={
                        <RouteGuard role={MemberType.ROLE_PEOPLE}>
                            <PeopleInfoRegisterPage />
                        </RouteGuard>
                    }
                />

                <Route
                    path="client/register"
                    element={
                        <RouteGuard role={MemberType.ROLE_CLIENT}>
                            <RegisterClientPage />
                        </RouteGuard>
                    }
                />
                <Route
                    path="client/edit"
                    element={
                        <RouteGuard role={MemberType.ROLE_CLIENT}>
                            <EditClientPage />
                        </RouteGuard>
                    }
                />

                <Route path="project/apply/:id" element={<ProjectApplyPage />} />

                <Route
                    path="project/request"
                    element={
                        <RouteGuard role={MemberType.ROLE_CLIENT}>
                            <ProjectRequestPage />
                        </RouteGuard>
                    }
                />

                <Route path="project/:id" element={<ProjectDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};
