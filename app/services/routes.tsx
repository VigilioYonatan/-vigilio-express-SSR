import type { RouteObject } from "react-router-dom";
import loadable from "@loadable/component";
import Layout from "../components/Layout/Layout";
import Home from "@/web/Home/Home";
import About from "@/web/About/About";

const Contact = loadable(() => import("./web/Contact/Contact"), {
    fallback: <div>Loading...</div>,
});

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => {
                    // here you can use ssr api fetch
                    return { success: true, message: "hola bro" };
                },
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
];

export default routes;
