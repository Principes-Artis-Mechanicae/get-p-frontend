import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { persistor } from "@/store/store";

const root = ReactDOM.hydrateRoot(
    document.getElementById("app") as HTMLElement,
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);

/*
const hydrate = new Promise<ReactDOM.Root>((resolve) => {
    const root = ReactDOM.hydrateRoot(
        document.getElementById("app") as HTMLElement,
        <BrowserRouter>
            <App isClient={false} />
        </BrowserRouter>,
    );
    resolve(root);
}).then((root) => {
    root.render(
        <BrowserRouter>
            <App isClient={true} />
        </BrowserRouter>,
    );
});
*/

// hydrate.then((root) => {
//     root.render(
//         <BrowserRouter>
//             <App isClient={true} />
//         </BrowserRouter>,
//     );
// });
