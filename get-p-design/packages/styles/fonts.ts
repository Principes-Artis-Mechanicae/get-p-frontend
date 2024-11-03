import BOLD from "./fonts/SpoqaHanSansNeo-Bold.woff";
import LIGHT from "./fonts/SpoqaHanSansNeo-Light.woff";
import MEDIUM from "./fonts/SpoqaHanSansNeo-Medium.woff";
import REGULAR from "./fonts/SpoqaHanSansNeo-Regular.woff";

import { css } from "@emotion/react";

export const fontStyles = css`
    @font-face {
        font-family: "SpoqaHanSansNeo";
        src: url(${BOLD}) format("woff");
        font-weight: bolder;
        font-style: normal;
    }
    @font-face {
        font-family: "SpoqaHanSansNeo";
        src: url(${LIGHT}) format("woff");
        font-weight: lighter;
        font-style: normal;
    }
    @font-face {
        font-family: "SpoqaHanSansNeo";
        src: url(${MEDIUM}) format("woff");
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: "SpoqaHanSansNeo";
        src: url(${REGULAR}) format("woff");
        font-weight: normal;
        font-style: normal;
    }
`;
