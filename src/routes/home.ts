import { Router } from "express";

const router = Router();

/**
 * @description    Show Home Page
 * @method         GET
 * @host           /
 */
router.get("/", require("../controllers/home").homeController);

module.exports = router;
