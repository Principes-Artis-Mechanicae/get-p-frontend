import { CheckButtonProps, CheckButtonElement, Check } from "./CheckButton.style";

export interface ICheckButton extends CheckButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

export const CheckButton = (props: ICheckButton) => {
    return (
        <CheckButtonElement {...props}>
            <Check type="checkbox" isChecked={props.isChecked} />
            {props.children}
        </CheckButtonElement>
    );
};
