// import { RadioGroup } from "principes-getp";
import { useSelector } from "react-redux";

import { PostProjectRequestSection } from "@/components/project/ProjectRequestSection/PostProjectRequestSection";
import { ProjectReqeustCompleteSection } from "@/components/project/ProjectRequestSection/ProjectRequestCompleteSection";
import { ProjectRequestContentSection } from "@/components/project/ProjectRequestSection/ProjectRequestContentSection";
import { ProjectRequestDateSection } from "@/components/project/ProjectRequestSection/ProjectRequestDateSection";
import { ProjectRequestTagSection } from "@/components/project/ProjectRequestSection/ProjectRequestTagSection";

import { RootState } from "@/store/store";

export default function ProjectRequestPage() {
    const { step } = useSelector((state: RootState) => state.project);

    return (
        <>
            {step === 0 && <PostProjectRequestSection />}
            {step === 1 && <ProjectRequestContentSection />}
            {step === 2 && <ProjectRequestDateSection />}
            {step === 3 && <ProjectRequestTagSection />}
            {step === 4 && <ProjectReqeustCompleteSection />}
        </>
    );
}
