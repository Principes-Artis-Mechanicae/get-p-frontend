import { css } from "@emotion/react";

export const rootStyles = css`
    :root {
        --nav-height: 80px;

        --z-modal-container: 10001;
        --z-modal-backdrop: 10000;
        --z-modal-wrapper: 10000;
        --z-toast: 9999;
        --z-nav-bar: 9998;
        --z-nav-dropdown: 9998;
        --z-nav-aside-wrapper: 9997;
        --z-nav-aside-backdrop: 9996;

        --font-size-xs: 12px;
        --font-size-s: 14px;
        --font-size-m: 16px;
        --font-size-l: 18px;
        --font-size-xl: 24px;

        @keyframes skeleton-loading {
            0% {
                background-color: #e0e0e0;
            }
            50% {
                background-color: #f0f0f0;
            }
            100% {
                background-color: #e0e0e0;
            }
        }
    }
`;
