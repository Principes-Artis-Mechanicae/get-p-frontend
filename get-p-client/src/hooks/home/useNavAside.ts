import { useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "@getp/store/slice/ui.slice";
import { RootDispatch, RootState } from "@getp/store/store";

import { useDebouncedScreenSize } from "../../common/hooks/useScreenSize";

export const useNavAside = () => {
    const backdropRef = useRef<HTMLDivElement>(null);
    const navasideRef = useRef<HTMLElement>(null);

    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const { isNavAsideOpened } = useSelector((state: RootState) => state.ui);
    const dispatch: RootDispatch = useDispatch();

    const { innerWidth } = useDebouncedScreenSize();

    useLayoutEffect(
        function closeNavAsideWhenScreenExpands() {
            if (innerWidth > 768 && isNavAsideOpened) dispatch(uiActions.closeNavAside());
        },
        [innerWidth, dispatch, isNavAsideOpened],
    );

    useLayoutEffect(() => {
        if (isNavAsideOpened) {
            if (backdropRef.current) backdropRef.current.style.display = "block";
            if (navasideRef.current) navasideRef.current.style.display = "block";

            timeout.current = setTimeout(() => {
                if (backdropRef.current) backdropRef.current.style.backdropFilter = `blur(10px)`;
                if (navasideRef.current) navasideRef.current.style.transform = `translateX(0px)`;
            }, 1);
        } else {
            if (backdropRef.current) backdropRef.current.style.backdropFilter = `blur(0px)`;
            if (navasideRef.current) navasideRef.current.style.transform = `translateX(300px)`;
            timeout.current = setTimeout(() => {
                // after animation set display none
                if (backdropRef.current) backdropRef.current.style.display = "none";
                if (navasideRef.current) navasideRef.current.style.display = "none";
            }, 500);
        }

        return () => {
            timeout.current && clearTimeout(timeout.current);
        };
    }, [isNavAsideOpened]);

    return { backdropRef, navasideRef };
};
