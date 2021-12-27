import { Request, Response, NextFunction } from "express";

export const logger = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let current_datetime = new Date();
  let FORMATTED_DATA =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  let METHOD = request.method;
  let STATUS = response.statusCode;
  let URL = request.url;
  console.log(`[${FORMATTED_DATA}] [ ${METHOD} - ${STATUS} - ${URL} ]`);
  next();
};
