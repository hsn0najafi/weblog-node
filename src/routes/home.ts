import { Router } from "express";

const router = Router();

/**
 * Route: GET '/'
 */
router.get("/", require("../controllers/home").homeController);

module.exports = router;
