import { Messages } from "../../enums/messages.enum";
import { StatusCodes } from "../../enums/status-codes.enum";
import { singleStockItemMock } from "../../mocks/item.mock";
import { SuccessResponse } from "./success-response.function";

describe("SuccessResponse", () => {
  it("should return an object with the correct properties and values", () => {
    const data = singleStockItemMock;
    const statusCode = StatusCodes.OK;
    const message = Messages.STOCK_FETCHED;

    const result = SuccessResponse(data, statusCode, message);

    expect(result).toHaveProperty("data", data);
    expect(result).toHaveProperty("status", statusCode);
    expect(result).toHaveProperty("message", message);
    expect(result).toHaveProperty("success", true);
  });

  it("should return an object with default message if message is not provided", () => {
    const data = singleStockItemMock;
    const statusCode = StatusCodes.OK;

    const result = SuccessResponse(data, statusCode);

    expect(result).toHaveProperty("data", data);
    expect(result).toHaveProperty("status", statusCode);
    expect(result).toHaveProperty("message", "");
    expect(result).toHaveProperty("success", true);
  });
});
