import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "swiper/css";
import "swiper/css/scrollbar";
import { register } from "swiper/element/bundle";

register();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
