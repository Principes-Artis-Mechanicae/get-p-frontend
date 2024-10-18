import { Text } from "@getp/common/components/typography/Text";

export interface ITitle {
    children: React.ReactNode;
}

export const Title: React.FC<ITitle> = ({ children }) => {
    return (
        <h1>
            <Text size="xl" weight="bold">
                {children}
            </Text>
        </h1>
    );
};
