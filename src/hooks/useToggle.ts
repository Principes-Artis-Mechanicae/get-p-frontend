import { useCallback, useState } from "react";

export const useToggle = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const handleClick = useCallback(() => {
        setToggle((toggle) => !toggle);
    }, []);
    return { toggle, handleClick };
};
