import "react-toastify/dist/ReactToastify.css";

import { fontStyles } from "@/styles/fonts";
import { resetStyles } from "@/styles/reset";
import { rootStyles } from "@/styles/root";

import { Global } from "@emotion/react";
import "swiper/css";
import "swiper/css/scrollbar";

export const GlobalStyles = () => <Global styles={[resetStyles, fontStyles, rootStyles]} />;
