import { RadioGroupWrapper, RadioItemLabel, RadioItemWrapper, RadioItemElement } from "./index.style";

export interface RadioContainerProps {
    width: string;
    height: string;
    children?: React.ReactNode;
}

export interface RadioItemProps extends React.ComponentProps<"input"> {
    children: React.ReactNode;
}

export const RadioGroup = ({ width, height, children }: RadioContainerProps) => {
    return (
        <RadioGroupWrapper width={width} height={height}>
            {children}
        </RadioGroupWrapper>
    );
};

export const RadioItem = ({ children, ...rest }: RadioItemProps) => {
    return (
        <RadioItemWrapper {...rest}>
            <RadioItemLabel>
                <RadioItemElement type="radio" {...rest} />
                {children}
            </RadioItemLabel>
        </RadioItemWrapper>
    );
};
