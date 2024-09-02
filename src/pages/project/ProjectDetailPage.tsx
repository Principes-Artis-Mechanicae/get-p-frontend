import { AuthFilterGuard } from "@/components/__common__/guard/AuthFilterGuard";

import { MemberType } from "@/services/auth/types";

import { ProjectDetailClientPage } from "./ProjectDetailClientPage";
import { ProjectDetailNoLogInPage } from "./ProjectDetailNoLogInPage";
import { ProjectDetailPeoplePage } from "./ProjectDetailPeoplePage";

export default function ProjectDetailPage() {
    return (
        <>
            <AuthFilterGuard role={MemberType.ROLE_CLIENT}>
                <ProjectDetailClientPage></ProjectDetailClientPage>
            </AuthFilterGuard>
            <AuthFilterGuard role={MemberType.ROLE_PEOPLE}>
                <ProjectDetailPeoplePage></ProjectDetailPeoplePage>
            </AuthFilterGuard>
            <AuthFilterGuard role={null}>
                <ProjectDetailNoLogInPage></ProjectDetailNoLogInPage>
            </AuthFilterGuard>
        </>
    );
}
