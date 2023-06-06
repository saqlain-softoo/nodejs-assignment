import { TransactionTypeEnum } from "../enums/transaction.enum";

export type TransactionType = {
  sku: string;
  type: TransactionTypeEnum;
  qty: number;
};
