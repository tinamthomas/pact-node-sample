import * as express from "express";
import routes from "./routes";
import config from "./config";

const app = express();

routes.forEach((route) => app[route.method](route.path, route.handler));


// tslint:disable-next-line:no-console
app.listen(config.port, () => console.log("Server running on ", config.port));
