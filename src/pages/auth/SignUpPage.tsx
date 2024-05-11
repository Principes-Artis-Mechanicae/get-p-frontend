import { useSelector } from "react-redux";

import SelectTypePage from "@/components/auth/SelectTypeSection";
import SignUpCompletePage from "@/components/auth/SignUpCompleteSection";
import SignUpInputPage from "@/components/auth/SignUpInputSection";

import { RootState } from "@/store/store";

export default function SignUpPage() {
    const { signUpSectionIndex } = useSelector((state: RootState) => state.signUp);

    return (
        <>
            {signUpSectionIndex === 1 && <SelectTypePage />}
            {signUpSectionIndex === 2 && <SignUpInputPage />}
            {signUpSectionIndex === 3 && <SignUpCompletePage />}
        </>
    );
}
