import { Routes, Route } from "react-router-dom";

import { RouteGuard } from "@getp/common/components/guards/RouteGuard";
import { MainLayout } from "@getp/common/layouts/RootLayout";

import FindPasswordPage from "@getp/pages/auth/FindPasswordPage";
import SignInPage from "@getp/pages/auth/SignInPage";
import SignUpPage from "@getp/pages/auth/SignUpPage";
import ClientProjectDetailPage from "@getp/pages/client/ClientProjectDetailPage/ClientProjectDetailPage";
import ClientProjectListPage from "@getp/pages/client/ClientProjectListPage/ClientProjectListPage";
import EditClientPage from "@getp/pages/client/EditClientPage/EditClientPage";
import MeetingRequestPage from "@getp/pages/client/MeetingRequest/MeetingRequestPage";
import RegisterClientPage from "@getp/pages/client/RegisterClientPage/RegisterClientPage";
import NotFoundPage from "@getp/pages/error/NotFoundPage";
import HomePage from "@getp/pages/home/HomePage";
import AppliedProjectDetailPage from "@getp/pages/people/AppliedProjectDetail/AppliedProjectDetailPage";
import PeopleDetailPage from "@getp/pages/people/PeopleDetail/PeopleDetailPage";
import PeopleInfoRegisterPage from "@getp/pages/people/PeopleInfoRegister/PeopleInfoRegisterPage";
import PeopleListPage from "@getp/pages/people/PeopleList/PeopleListPage";
import PeopleProfileEditPage from "@getp/pages/people/PeopleProfileEdit/PeopleProfileEditPage";
import PeopleProjectListPage from "@getp/pages/people/PeopleProjectListPage/PeopleProjectListPage";
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
                    // 피플 정보 등록 및 수정
                    path="people/me/info"
                    element={
                        <RouteGuard role={MemberType.ROLE_PEOPLE}>
                            <PeopleInfoRegisterPage />
                        </RouteGuard>
                    }
                />

                <Route
                    // 피플 프로필 등록 및 수정
                    path="people/me/profile/edit"
                    element={
                        <RouteGuard role={MemberType.ROLE_PEOPLE}>
                            <PeopleProfileEditPage />
                        </RouteGuard>
                    }
                />

                <Route
                    path="people/me/projects"
                    element={
                        <RouteGuard role={MemberType.ROLE_PEOPLE}>
                            <PeopleProjectListPage />
                        </RouteGuard>
                    }
                />

                <Route
                    // 의뢰자 정보 등록
                    path="client/me/register"
                    element={
                        <RouteGuard role={MemberType.ROLE_CLIENT}>
                            <RegisterClientPage />
                        </RouteGuard>
                    }
                />
                <Route
                    // 의뢰자 정보 수정
                    path="client/me/edit"
                    element={
                        <RouteGuard role={MemberType.ROLE_CLIENT}>
                            <EditClientPage />
                        </RouteGuard>
                    }
                />
                <Route
                    // 의뢰자가 의뢰중인 프로젝트
                    path="client/me/projects"
                    element={
                        <RouteGuard role={MemberType.ROLE_CLIENT}>
                            <ClientProjectListPage />
                        </RouteGuard>
                    }
                />

                <Route
                    path="client/me/projects/:id"
                    element={
                        <RouteGuard role={MemberType.ROLE_CLIENT}>
                            <ClientProjectDetailPage />
                        </RouteGuard>
                    }
                />

                <Route
                    // 프로젝트 지원하기
                    path="project/apply/:id"
                    element={<ProjectApplyPage />}
                />

                <Route
                    // 프로젝트 의뢰하기
                    path="project/request"
                    element={
                        <RouteGuard role={MemberType.ROLE_CLIENT}>
                            <ProjectRequestPage />
                        </RouteGuard>
                    }
                />

                <Route
                    // 프로젝트 상세 페이지
                    path="projects/:id"
                    element={<ProjectDetailPage />}
                />

                <Route
                    path="project/:id/meetings"
                    element={
                        <RouteGuard role={MemberType.ROLE_CLIENT}>
                            <MeetingRequestPage />
                        </RouteGuard>
                    }
                />

                <Route
                    // 프로젝트 지원 내역 조회
                    path="applications/me/:id"
                    element={<AppliedProjectDetailPage />}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};
