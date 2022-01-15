import { Request, Response, Router } from "express";

const router = Router();

/**
 * @description    Show 404
 * @method         GET
 * @host           /*
 */
router.use((_: Request, res: Response) => {
  res.render("pages/errors/404", {
    pageTitle: "pageNotFound",
    message: "Page Not Found",
    layout: "layout",
  });
});

module.exports = router;
