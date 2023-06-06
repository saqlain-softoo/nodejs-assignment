import fs from "fs";
import path from "path";
import { TransactionType } from "../types/transaction.type";
import { FileNames } from "../../common/enums/file-names.enum";

export const readTransactionFile = async (): Promise<TransactionType[]> => {
  try {
    const filePath = path.join(
      __dirname,
      `../../assets/${FileNames.transactions}`
    );
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};
