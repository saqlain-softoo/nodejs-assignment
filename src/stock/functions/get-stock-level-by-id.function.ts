import { Messages } from "../../common/enums/messages.enum";
import { StatusCodes } from "../../common/enums/status-codes.enum";
import { ErrorResponse } from "../../common/response/functions/error-response.function";
import { SuccessResponse } from "../../common/response/functions/success-response.function";
import { ApiResponseType } from "../../common/response/types/response.type";
import { TransactionTypeEnum } from "../enums/transaction.enum";
import { StockResponseType } from "../types/stock-response.type";
import { StockType } from "../types/stock.type.";
import { TransactionType } from "../types/transaction.type";
import { readStockFile } from "./read-stock-file.function";
import { readTransactionFile } from "./read-transaction-file.function";

export const getStockLevelById = async (
  sku: string
): Promise<ApiResponseType> => {
  const stock: StockType[] = await readStockFile();
  const transactions: TransactionType[] = await readTransactionFile();

  if (stock.length === 0 && transactions.length === 0) {
    return ErrorResponse(StatusCodes.NOT_FOUND, Messages.NOT_FOUND);
  }

  const totalOrders: number = transactions.reduce(
    (total, curr) =>
      curr.type === TransactionTypeEnum.ORDER && curr.sku === sku
        ? total + curr.qty
        : total,
    0
  );

  const totalRefunds: number = transactions.reduce(
    (total, curr) =>
      curr.type === TransactionTypeEnum.REFUND && curr.sku === sku
        ? total + curr.qty
        : total,
    0
  );

  const previousStockItem = stock.find((item) => item.sku === sku);
  const previosStock: number = previousStockItem ? previousStockItem.stock : 0;

  const currentStockLevel: StockResponseType = {
    sku,
    stock: previosStock - totalOrders + totalRefunds,
  };

  return SuccessResponse(
    currentStockLevel,
    StatusCodes.OK,
    Messages.STOCK_FETCHED
  );
};
