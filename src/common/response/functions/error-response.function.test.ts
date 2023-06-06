import { Messages } from "../../enums/messages.enum";
import { StatusCodes } from "../../enums/status-codes.enum";
import { ErrorResponse } from "./error-response.function";

describe("ErrorResponse", () => {
  it("should return an error response object with default values when no arguments are provided", () => {
    const statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    const message = Messages.INTERNAL_SERVER_ERROR;
    const data = null;
    const errorResponse = ErrorResponse(statusCode, message, data);
    expect(errorResponse).toEqual({
      data: null,
      status: statusCode,
      message,
      success: false,
    });
  });

  it("should return an error response object with provided values", () => {
    const statusCode = StatusCodes.NOT_FOUND;
    const message = Messages.NOT_FOUND;
    const data = null;
    const errorResponse = ErrorResponse(statusCode, message, data);
    expect(errorResponse).toEqual({
      data,
      status: statusCode,
      message,
      success: false,
    });
  });
});
