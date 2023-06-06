import { StockType } from "../../stock/types/stock.type.";

export const singleStockItemMock: StockType = {
  sku: "IQZ340003/37/30",
  stock: 1775,
};

export const multipleStockItemsMock = [
  { sku: "LTV719449/39/39", stock: 8525 },
  { sku: "CLQ274846/07/46", stock: 8414 },
  { sku: "SXB930757/87/87", stock: 3552 },
];

export const multipleTransactionItemsMock = [
  { sku: "KED089097/68/09", type: "order", qty: 8 },
  { sku: "DOK019240/66/49", type: "order", qty: 4 },
  { sku: "XOE089797/10/74", type: "refund", qty: 5 },
  { sku: "KGD740425/40/48", type: "order", qty: 6 },
  { sku: "YGH750695/17/53", type: "order", qty: 9 },
  { sku: "TZH873296/06/42", type: "order", qty: 0 },
  { sku: "JSZ454994/85/17", type: "order", qty: 5 },
  { sku: "DOK019240/66/49", type: "order", qty: 3 },
];
