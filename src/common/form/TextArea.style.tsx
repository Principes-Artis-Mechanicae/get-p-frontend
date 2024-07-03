import styled from "@emotion/styled";

export interface ITextAreaElement {
    variant: "primary" | "secondary";

    width: string;
    height: string;
    readOnly?: boolean;
    value?: string;
}

export const TextAreaElement = styled.textarea<ITextAreaElement>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    background-color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "#fff";
            case "secondary":
                return "#F9FAFA";
        }
    }};

    font-size: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "12px";
            case "secondary":
                return "16px";
        }
    }};

    border: none;
    border-radius: 12px;
    padding: 15px 10px;

    resize: none;
    line-height: 200%;

    &:focus {
        outline: none;
    }
`;
