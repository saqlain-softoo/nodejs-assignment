import { Response } from "express";
import { ConstructResponse } from "./construct-response.function";
import { singleStockItemMock } from "../../mocks/item.mock";
import { Messages } from "../../enums/messages.enum";
import { StatusCodes } from "../../enums/status-codes.enum";

describe("ConstructResponse", () => {
  let expressResponse: Response;

  beforeEach(() => {
    // Create a mock Express response object for each test case
    expressResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    } as unknown as Response;
  });

  it("should set the response status to 200 when responseData.success is true", () => {
    const responseData = {
      success: true,
      status: StatusCodes.OK,
      data: singleStockItemMock,
      message: Messages.STOCK_FETCHED,
    };

    ConstructResponse(expressResponse, responseData);

    expect(expressResponse.status).toHaveBeenCalledWith(responseData.status);
    expect(expressResponse.send).toHaveBeenCalledWith({
      data: responseData.data,
      message: responseData.message,
      success: true,
    });
  });

  it("should set the response status to 404 when responseData.success is false", () => {
    const responseData = {
      success: false,
      status: StatusCodes.NOT_FOUND,
      data: null,
      message: Messages.NOT_FOUND,
    };

    ConstructResponse(expressResponse, responseData);

    expect(expressResponse.status).toHaveBeenCalledWith(responseData.status);
    expect(expressResponse.send).toHaveBeenCalledWith({
      data: responseData.data,
      message: responseData.message,
      success: false,
    });
  });
});
