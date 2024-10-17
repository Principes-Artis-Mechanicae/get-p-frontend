import { useSelector } from "react-redux";

import SelectTypeSection from "@/components/auth/SelectTypeSection";
import SignUpCompleteSection from "@/components/auth/SignUpCompleteSection";
import SignUpInputPage from "@/components/auth/SignUpInputSection";

import { RootState } from "@/store/store";

export default function SignUpPage() {
    const { signUpSectionIndex } = useSelector((state: RootState) => state.signUp);

    return (
        <>
            {signUpSectionIndex === 1 && <SelectTypeSection />}
            {signUpSectionIndex === 2 && <SignUpInputPage />}
            {signUpSectionIndex === 3 && <SignUpCompleteSection />}
        </>
    );
}
