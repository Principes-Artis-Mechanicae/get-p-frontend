import { useSelector } from "react-redux";

import { RootState } from "@/store/store";

export default function HomePage() {
    const { nickname } = useSelector((state: RootState) => state.auth);

    return <>{nickname}</>;
}
