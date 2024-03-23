import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import "~/assets/css/index.css";

const router = createBrowserRouter(routes);

const context = {};
ReactDOM.hydrateRoot(
    document.getElementById("app") as HTMLElement,
    <HelmetProvider context={context}>
        <RouterProvider router={router} fallbackElement={null} />
    </HelmetProvider>
);
