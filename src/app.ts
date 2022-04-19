import express from "express";
import { clientsRoutes } from "./routes/clientsRoute";
import { loginRoutes } from "./routes/loginRoutes";
import  dotenv  from "dotenv-safe";

const app = express();
const port = 3000;
dotenv.config();

clientsRoutes(app);
loginRoutes(app);

try {
    app.listen(port, () => {
        console.log(`Successfully started server at port ${port}`)
    })
} catch (err) {
    console.error(`An error has occurred: ${err}`);
}