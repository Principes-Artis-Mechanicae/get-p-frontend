// import { RadioGroup } from "principes-getp";
import { useSelector } from "react-redux";

import { PostProjectRequestSection } from "./PostProjectRequestSection";
import { ProjectReqeustCompleteSection } from "./ProjectRequestCompleteSection";
import { ProjectRequestContentSection } from "./ProjectRequestContentSection";
import { ProjectRequestDateSection } from "./ProjectRequestDateSection";
import { ProjectRequestTagSection } from "./ProjectRequestTagSection";
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
