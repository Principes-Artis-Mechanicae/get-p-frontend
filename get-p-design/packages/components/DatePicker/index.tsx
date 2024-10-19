import { forwardRef } from "react";
import { DatePickerElement } from "./index.style";

export interface DatePickerProps extends React.ComponentProps<"input"> {
    width: string;
    height: string;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(({ width, height, ...rest }, ref) => {
    return <DatePickerElement ref={ref} type="date" width={width} height={height} {...rest}></DatePickerElement>;
});
