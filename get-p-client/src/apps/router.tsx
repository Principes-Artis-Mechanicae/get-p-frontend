import { Routes, Route } from "react-router-dom";

import { RouteGuard } from "@getp/common/components/guards/RouteGuard";
import { MainLayout } from "@getp/common/layouts/RootLayout";

import FindPasswordPage from "@getp/pages/auth/FindPasswordPage";
import SignInPage from "@getp/pages/auth/SignInPage";
import SignUpPage from "@getp/pages/auth/SignUpPage";
import ClientProjectListPage from "@getp/pages/client/ClientProjectListPage/ClientProjectListPage";
import EditClientPage from "@getp/pages/client/EditClientPage/EditClientPage";
import MeetingRequestPage from "@getp/pages/client/MeetingRequest/MeetingRequestPage";
import RegisterClientPage from "@getp/pages/client/RegisterClientPage/RegisterClientPage";
import NotFoundPage from "@getp/pages/error/NotFoundPage";
import HomePage from "@getp/pages/home/HomePage";
import PeopleDetailPage from "@getp/pages/people/PeopleDetail/PeopleDetailPage";
import PeopleInfoRegisterPage from "@getp/pages/people/PeopleInfoRegister/PeopleInfoRegisterPage";
import PeopleListPage from "@getp/pages/people/PeopleList/PeopleListPage";
import PeopleProfileEditPage from "@getp/pages/people/PeopleProfileEdit/PeopleProfileEditPage";
import ProjectApplyPage from "@getp/pages/project/ProjectApplyPage/ProjectApplyPage";
import ProjectDetailPage from "@getp/pages/project/ProjectDetailPage/ProjectDetailPage";
import ProjectListPage from "@getp/pages/project/ProjectListPage/ProjectListPage";
import ProjectRequestPage from "@getp/pages/project/ProjectRequest/ProjectRequestPage";

import { MemberType } from "@getp/services/auth/types";

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
                <Route
                    path="client/me/projects"
                    element={
                        <RouteGuard role={MemberType.ROLE_CLIENT}>
                            <ClientProjectListPage />
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

                <Route path="projects/:id" element={<ProjectDetailPage />} />

                <Route path="project/:id/meetings" element={<MeetingRequestPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};
