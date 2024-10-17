// import { RadioGroup } from "principes-getp";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";

import { PostProjectRequestSection } from "./Section/PostProjectRequestSection";
import { ProjectReqeustCompleteSection } from "./Section/ProjectRequestCompleteSection";
import { ProjectRequestContentSection } from "./Section/ProjectRequestContentSection";
import { ProjectRequestDateSection } from "./Section/ProjectRequestDateSection";
import { ProjectRequestTagSection } from "./Section/ProjectRequestTagSection";

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
