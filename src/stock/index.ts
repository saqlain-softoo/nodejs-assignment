import { Request, Response } from "express";
import { getStockLevelById } from "./functions/get-stock-level-by-id.function";
import { ConstructResponse } from "../common/response/functions/construct-response.function";
import { ApiResponseType } from "../common/response/types/response.type";

export default class StockController {
  static stockLevel = async (req: Request, res: Response) => {
    const { sku } = req.body;

    const response: ApiResponseType = await getStockLevelById(sku);

    return ConstructResponse(res, response);
  };
}
