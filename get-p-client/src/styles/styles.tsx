import "react-toastify/dist/ReactToastify.css";

import { fontStyles } from "@getp/styles/fonts";
import { resetStyles } from "@getp/styles/reset";
import { rootStyles } from "@getp/styles/root";

import { Global } from "@emotion/react";
import "swiper/css";
import "swiper/css/scrollbar";

export const GlobalStyles = () => <Global styles={[resetStyles, fontStyles, rootStyles]} />;
