import { Router } from "express";

const router = Router();

/**
 * @description    Home
 * @method         GET
 * @host           /
 */
router.get("/", require("../controllers/home").homeController);

module.exports = router;
