import { Request, Response, NextFunction } from "express";

export const auth = (_: Request, res: Response, next: NextFunction) => {
  if (_.isAuthenticated()) {
    return next();
  } else {
    _.flash("successMessage", "اول باید لاگین کنی");
    res.redirect("/users/login");
  }
};
