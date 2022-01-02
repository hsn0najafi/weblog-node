import { Router } from "express";

const router = Router();

/**
 * Route: '/login'
 */
router.get("/login", require("../controllers/login").loginController);

/**
 * Route: '/signup'
 */
router.get("/signup", require("../controllers/signup").signupController);

module.exports = router;
