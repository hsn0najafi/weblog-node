import { Request, Response, Router } from "express";

const router = Router();

/**
 * @description    All NotDefined Routes
 * @method         GET
 * @host           /*
 */
router.use((_: Request, res: Response) => {
  /**
   * @description    All NotDefined Routes
   * @pages          pages/pageNotFound
   * @param          ['pageTitle', 'message']
   * @layout         layout
   */
  res.render("pages/pageNotFound", {
    pageTitle: "pageNotFound",
    message: "Page Not Found",
    layout: "layout",
  });
});

module.exports = router;
