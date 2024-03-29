import { useDispatch } from "react-redux";

import { Button } from "@/common/form/Button";

import { pageActions } from "@/store/slice/page.slice";

export default function SelectTypePage() {
    const dispatch = useDispatch();

    return (
        <>
            <Button
                variant="primary"
                width="100px"
                height="40px"
                onClick={() => {
                    dispatch(pageActions.nextPage());
                }}
            >
                다음
            </Button>
        </>
    );
}
