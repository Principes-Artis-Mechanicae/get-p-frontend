import { createBrowserRouter, createRoutesFromChildren, Route } from "react-router-dom";
import CoreWebVitals from "../pages/WebVitals";
import { RootLayout } from "../common/layouts/RootLayout";

export const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route path="/" element={<RootLayout />}>
            <Route path="webvitals" element={<CoreWebVitals />} />
        </Route>,
    ),
);
