/* eslint-disable no-undef */
import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";

const PORT = process.env.PORT || 3000;
const BASE = process.env.BASE || "/";
const PRODUCTION = process.env.NODE_ENV === "production";

const TEMPLATE = PRODUCTION ? fs.readFileSync("./dist/client/index.html", { encoding: "utf-8" }) : "";
const SSR_MANIFEST = PRODUCTION ? fs.readFileSync("./dist/client/ssr-manifest.json", { encoding: "utf-8" }) : undefined;

const app = express();
let vite;

// ? Add vite or respective production middlewares
if (!PRODUCTION) {
    vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "custom",
    });
    app.use(vite.middlewares);
} else {
    const sirv = (await import("sirv")).default;
    const compression = (await import("compression")).default;
    app.use(compression());
    app.use(
        BASE,
        sirv("./dist/client", {
            extensions: [],
            gzip: true,
        }),
    );
}

app.use("*", async (req, res, next) => {
    // ! Favicon Fix
    if (req.originalUrl === "/favicon.ico") {
        return res.sendFile(path.resolve("./public/vite.svg"));
    }
    // ! SSR Render - Do not Edit if you don't know what heare whats going on
    let template, render;

    try {
        if (!PRODUCTION) {
            template = fs.readFileSync(path.resolve("./index.html"), "utf-8");
            template = await vite.transformIndexHtml(req.originalUrl, template);
            render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
        } else {
            template = TEMPLATE;
            render = (await import("./dist/server/entry-server.js")).render;
        }
        const rendered = await render({ path: req.originalUrl }, SSR_MANIFEST);
        const html = template.replace(`<!--app-html-->`, rendered ?? "");
        res.status(200).setHeader("Content-Type", "text/html").end(html);
    } catch (error) {
        vite.ssrFixStacktrace(error);
        next(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
