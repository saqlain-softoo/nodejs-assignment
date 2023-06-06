import { Messages } from "../../common/enums/messages.enum";
import { StatusCodes } from "../../common/enums/status-codes.enum";
import {
  multipleStockItemsMock,
  multipleTransactionItemsMock,
} from "../../common/mocks/item.mock";
import { getStockLevelById } from "./get-stock-level-by-id.function";

jest.mock("./read-stock-file.function", () => ({
  readStockFile: jest.fn(() => multipleStockItemsMock),
}));

jest.mock("./read-transaction-file.function", () => ({
  readTransactionFile: jest.fn(() => multipleTransactionItemsMock),
}));

describe("getStockLevelById", () => {
  const sku = "LTV719449/39/39";

  it("should return the current stock level for the given SKU", async () => {
    const response = await getStockLevelById(sku);
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.success).toBe(true);
    expect(response.message).toBe(Messages.STOCK_FETCHED);
    expect(response.data).toEqual(multipleStockItemsMock[0]);
  });

  it("should return an error response when file not found", async () => {
    jest
      .spyOn(require("./read-stock-file.function"), "readStockFile")
      .mockImplementationOnce(() => Promise.resolve([]));
    jest
      .spyOn(require("./read-transaction-file.function"), "readTransactionFile")
      .mockImplementationOnce(() => Promise.resolve([]));
    const response = await getStockLevelById(sku);
    expect(response.status).toBe(StatusCodes.NOT_FOUND);
    expect(response.success).toBe(false);
    expect(response.message).toBe(Messages.NOT_FOUND);
    expect(response.data).toBeNull();
  });
});
