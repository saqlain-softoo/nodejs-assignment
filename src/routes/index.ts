import { Application } from "express";
import stockRoutes from "./stock";

export const routes = (app: Application) => {
  app.use("/stock", stockRoutes);
};
