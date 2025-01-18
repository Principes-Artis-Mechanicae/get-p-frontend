import "react-toastify/dist/ReactToastify.css";

import { fontStyles } from "@getp/apps/styles/fonts";
import { resetStyles } from "@getp/apps/styles/reset";
import { rootStyles } from "@getp/apps/styles/root";

// import { getpGlobalStyles } from "get-p-design";
import { Global } from "@emotion/react";
import "swiper/css";
import "swiper/css/scrollbar";

export const GlobalStyles = () => <Global styles={[resetStyles, rootStyles, fontStyles]} />;
