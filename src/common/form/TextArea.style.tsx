import styled from "@emotion/styled";

export interface ITextAreaElement {
    variant: "primary" | "secondary";

    width: string;
    height: string;
}

export const TextAreaContainer = styled.div`
    width: 700px;

    display: flex;

    border-bottom: 1px solid #ebedef;
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

    border: none;
    border-radius: 12px;
    padding: 15px 10px;

    resize: none;
    line-height: 200%;

    &:focus {
        outline: none;
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
