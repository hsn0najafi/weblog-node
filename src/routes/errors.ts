import { Router } from "express";

const router = Router();

import { get404 } from "../controllers/errorController";

/**
 * @description    Show 404
 * @method         GET
 * @host           /*
 */
router.use(get404);

module.exports = router;
