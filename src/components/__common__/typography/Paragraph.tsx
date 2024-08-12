import { IText, Text } from "./Text";

export interface IParagraph extends IText {
    children: React.ReactNode;
}

export const Paragraph: React.FC<IParagraph> = ({ size, color, weight, children }) => {
    return (
        <p>
            <Text size={size} color={color} weight={weight}>
                {children}
            </Text>
        </p>
    );
};
