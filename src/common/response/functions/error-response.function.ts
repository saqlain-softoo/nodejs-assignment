import { StatusCodes } from "../../enums/status-codes.enum";
import { ApiResponseType } from "../types/response.type";

export const ErrorResponse = (
  statusCode: number,
  message: string,
  data: any = null
): ApiResponseType => ({
  data,
  status: statusCode ? statusCode : StatusCodes.INTERNAL_SERVER_ERROR,
  message: message ? message : "Internal server error. Please try again later.",
  success: false,
});
