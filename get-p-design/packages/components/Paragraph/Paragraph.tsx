import { Text, TextProps } from "../Text";

export interface ParagraphProps extends TextProps {
    children: React.ReactNode;
}

export const Paragraph = ({ size, color, weight, children }: ParagraphProps) => {
    return (
        <p>
            <Text size={size} color={color} weight={weight}>
                {children}
            </Text>
        </p>
    );
};
