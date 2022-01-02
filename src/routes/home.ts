import { Router } from "express";

const router = Router();

/**
 * Route: '/'
 */
router.get("/", require("../controllers/home").homeController);

module.exports = router;
