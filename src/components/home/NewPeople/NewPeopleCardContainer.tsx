import * as Styles from "./NewPeopleCardContainer.style";

export interface NewPeopleCardContainerProps {
    children?: React.ReactNode;
}

export const NewPeopleCardContainer = ({ children }: NewPeopleCardContainerProps) => {
    return <Styles.Container>{children}</Styles.Container>;
};
