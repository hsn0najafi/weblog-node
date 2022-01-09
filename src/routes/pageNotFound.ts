import { Router } from "express";

const router = Router();

/**
 * @description    All NotDefined Routes
 * @method         GET
 * @host           /*
 */
router.use(require("../controllers/pageNotFound").pageNotFound);

module.exports = router;
