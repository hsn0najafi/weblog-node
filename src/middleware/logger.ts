import { Request, Response, NextFunction } from "express";

interface Logger {
  (request: Request, response: Response, next: NextFunction): void;
}

export const logger: Logger = (request, response, next) => {
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
  let METHOD: string = request.method;
  let STATUS: number = response.statusCode;
  let URL: string = request.url;
  console.log(`[${FORMATTED_DATA}] [ ${METHOD} - ${STATUS} - ${URL} ]`);
  next();
};
