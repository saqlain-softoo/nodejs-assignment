import { StatusCodes } from "../../enums/status-codes.enum";
import { ApiResponseType } from "../types/response.type";

export const SuccessResponse = (
  data: any,
  statusCode: number,
  message = ""
): ApiResponseType => ({
  data,
  status: statusCode ? statusCode : StatusCodes.OK,
  message,
  success: true,
});
