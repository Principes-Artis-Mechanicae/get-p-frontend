import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { register } from "swiper/element/bundle";

register();

async function enableMocking(enable: boolean) {
    if (!enable) return;
    if (import.meta.env.MODE !== "development") return;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { worker }: { worker: { start: () => Promise<void> } } = await import("./__mocks__/browser.js");
    return worker.start();
}

enableMocking(false).then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
});
