import * as express from "express";
import routes from "./routes";
const app = express();

routes.forEach((route) => app[route.method](route.path, route.handler));

// tslint:disable-next-line:no-console
app.listen(3000, () => console.log("Provider listening on port 3000!"));
