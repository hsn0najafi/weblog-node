import { Router } from "express";

const router = Router();

/**
 * Route: '/*'
 */
router.use(require("../controllers/pageNotFound").pageNotFound);

module.exports = router;
