import { Router } from "express";

const router = Router();

/**
 * Route: GET '/*'
 */
router.use(require("../controllers/pageNotFound").pageNotFound);

module.exports = router;
