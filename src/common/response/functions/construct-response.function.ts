import { Response } from "express";
import { ApiResponseType } from "../types/response.type";

export const ConstructResponse = (
  expressResponse: Response,
  responseData: ApiResponseType
) =>
  responseData.success
    ? expressResponse.status(responseData.status).send({
        data: responseData.data,
        message: responseData.message,
        success: true,
      })
    : expressResponse.status(responseData.status).send({
        data: responseData.data,
        message: responseData.message,
        success: false,
      });
