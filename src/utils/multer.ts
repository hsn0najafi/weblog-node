import { Request } from "express";

export const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback: any
) => {
  if (file.mimetype == "image/jpeg") {
    callback(null, true);
  } else {
    callback("تنها پسوند JPEG پشتیبانی میشود", false);
  }
};
