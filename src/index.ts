import express, { Application } from "express";
import dotenv from "dotenv";
import { routes } from "./routes";

dotenv.config();
const app: Application = express();
const PORT: number = Number(process.env.SERVER_PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes(app);

app.listen(PORT);
