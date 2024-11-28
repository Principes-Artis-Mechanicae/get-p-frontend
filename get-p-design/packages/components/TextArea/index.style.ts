import styled from "@emotion/styled";

export interface ITextAreaElement extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant: "primary" | "secondary";

    width: string;
    height: string;
    readOnly?: boolean;
    value?: string;
}

export const TextAreaContainer = styled.div`
    width: auto;

    display: flex;
`;

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

    font-size: 16px;
    font-family: inherit;

    border: none;
    outline: none;
    border-radius: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "0px";
            case "secondary":
                return "12px";
        }
    }};
    border-bottom: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "1px solid #EBEDEF";
            case "secondary":
                return "none";
        }
    }};

    padding: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "10px 0px";
            case "secondary":
                return "10px 15px";
        }
    }};

    resize: none;
    line-height: 150%;

    &:focus {
        border-bottom: ${(props) => {
            switch (props.variant) {
                case "primary":
                    return "1.5px solid #476FF1";
                case "secondary":
                    return "none";
            }
        }};
    }
`;

export const TextDeleteButton = styled.button`
    width: 24px;
    height: 24px;

    background-color: transparent;
    background-image: url("/text_delete_btn.png");

    border: none;
    border-radius: 50%;

    margin: auto 0 10px auto;

    cursor: pointer;
`;
