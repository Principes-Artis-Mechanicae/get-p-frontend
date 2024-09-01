import { Routes, Route } from "react-router-dom";

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
import ProjectApplyPage from "@/pages/project/ProjectApplyPage";
import ProjectRequestPage from "@/pages/project/ProjectRequestPage";

import { MemberType } from "@/services/auth/types";

import { RouteGuard } from "./components/__common__/guard/RouteGuard";
import { MainLayout } from "./components/__common__/layout/MainLayout";
import ProjectListPage from "./pages/project/ProjectListPage";

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

                <Route path="client/register" element={<RegisterClientPage />} />
                <Route path="client/edit" element={<EditClientPage />} />

                <Route path="project/apply" element={<ProjectApplyPage />} />

                <Route
                    path="project/request"
                    element={
                        <RouteGuard role={MemberType.ROLE_CLIENT}>
                            <ProjectRequestPage />
                        </RouteGuard>
                    }
                ></Route>
            </Route>
        </Routes>
    );
};
