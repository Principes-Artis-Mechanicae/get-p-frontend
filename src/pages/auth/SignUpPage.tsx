import { useSelector } from "react-redux";

import SelectTypePage from "./SelectTypePage";
import SignUpCompletePage from "./SignUpCompletePage";
import SignUpInputPage from "./SignUpInputPage";
import { RootState } from "@/store/store";

export default function SignUpPage() {
    const { page } = useSelector((state: RootState) => state.page);

    if (page === 1) return <SelectTypePage />;
    else if (page === 2) return <SignUpInputPage />;
    else if (page === 3) return <SignUpCompletePage />;
}
