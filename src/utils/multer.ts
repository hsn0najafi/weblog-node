import { Request, Express } from "express";

import multer from "multer";
import { v4 as uuidv4 } from "uuid";

export const storage = multer.diskStorage({
  destination: (req: Request, file, callback) => {
    callback(null, "./dist/public/uploads/images/");
  },
  filename: (req: Request, file, callback) => {
    callback(null, `${uuidv4()}_${file.originalname}`);
  },
});

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
