import { useSelector } from "react-redux";

import SelectTypeSection from "@getp/components/auth/SelectTypeSection";
import SignUpCompleteSection from "@getp/components/auth/SignUpCompleteSection";
import SignUpInputPage from "@getp/components/auth/SignUpInputSection";

import { RootState } from "@getp/store/store";

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
