import { css } from "@emotion/react";

export const resetStyles = css`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: 0;

        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    a:visited {
        color: #000;
        text-decoration: none;
    }
`;
