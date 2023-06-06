import express, { Router } from "express";
import StockController from "../../stock";

const router: Router = express.Router();

router.post("/get-level", StockController.stockLevel);

export default router;
