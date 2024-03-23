import { Server } from "~/config/server";
const application = new Server();
export const app = application.app;
export const server = application.listen();
