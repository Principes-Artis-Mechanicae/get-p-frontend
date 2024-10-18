import * as Styles from "./index.style";

export interface DeadLineProjectCardProps {
    children?: React.ReactNode;
}

export const DeadLineProjectCardContainer = ({ children }: DeadLineProjectCardProps) => {
    return <Styles.Wrapper>{children}</Styles.Wrapper>;
};
