import type { Application } from "express";
import fs from "fs";
import path from "path";
import type { ViteDevServer } from "vite";
import enviroments from "~/config/enviroments.config.js";

async function ssr(app: Application) {
    let vite: ViteDevServer;
    const isProd = enviroments.NODE_ENV === "production";
    const root: string = process.cwd();
    if (!isProd) {
        vite = await (
            await import("vite")
        ).createServer({
            root,
            logLevel: "info",
            server: {
                middlewareMode: true,
                watch: {
                    usePolling: true,
                    interval: 100,
                },
            },
            appType: "custom",
        });

        app.use(vite.middlewares);
    }

    const indexProd: string = isProd
        ? fs.readFileSync(
              path.resolve(import.meta.dir, "client", "index.html"),
              "utf-8"
          )
        : "";
    if (isProd) {
        app.use((await import("compression")).default());

        app.use(
            (await import("serve-static")).default(
                path.resolve(import.meta.dir, "client"),
                {
                    index: false,
                }
            )
        );
    }
    app.use("*", async (req, res) => {
        try {
            const url = req.originalUrl;
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            let template: any;
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            let render: any;

            if (!isProd) {
                template = fs.readFileSync(
                    path.resolve(root, "index.html"),
                    "utf8"
                );
                template = await vite.transformIndexHtml(url, template);

                render = (
                    await vite.ssrLoadModule(
                        path.resolve(
                            import.meta.dir,
                            "..",
                            "services",
                            "entry-server.tsx"
                        )
                    )
                ).default.render;
            }

            if (isProd) {
                template = indexProd;

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                render = (
                    await import(
                        path.resolve(
                            import.meta.dir,
                            "entry",
                            "entry-server.js"
                        )
                    )
                ).default.render;
            }

            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            const context: any = {};
            const appHtml = await render(req);

            const { helmet } = appHtml;

            if (context.url) return res.redirect(301, context.url);

            let html = template.replace("<!--app-html-->", appHtml.html);

            const helmetData = `
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                ${helmet.style.toString()}
            `;

            html = html.replace("<!--app-head-->", helmetData);
            html = html.replace("<!--app-scripts-->", helmet.script.toString());

            res.status(200).set({ "Content-Type": "text/html" }).end(html);
        } catch (e: unknown) {
            !isProd && vite.ssrFixStacktrace(e as Error);
            // biome-ignore lint/suspicious/noConsoleLog: <explanation>
            console.log((e as Error).stack);
            res.status(500).end((e as Error).stack);
        }
    });
}

export default ssr;
