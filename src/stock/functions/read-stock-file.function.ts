import fs from "fs";
import path from "path";
import { StockType } from "../types/stock.type.";
import { FileNames } from "../../common/enums/file-names.enum";

export const readStockFile = async (): Promise<StockType[]> => {
  try {
    const filePath = path.join(__dirname, `../../assets/${FileNames.stock}`);
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};
