import { Text } from "./Text";

export interface ITitle {
    children: React.ReactNode;
}

export const Title: React.FC<ITitle> = ({ children }) => {
    return (
        <Text size="xl" weight="bold">
            {children}
        </Text>
    );
};
