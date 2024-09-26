import { useEffect, useState } from "react";

export const useDebouncedScreenSize = () => {
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
    const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        const handleResize = (e: Event) => {
            timer && clearTimeout(timer);

            timer = setTimeout(() => {
                const target = e.target as Window;
                setInnerWidth(target.innerWidth);
                setInnerHeight(target.innerHeight);
            }, 300);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            timer && clearTimeout(timer);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { innerWidth, innerHeight };
};
