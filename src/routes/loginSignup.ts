import { Router } from "express";

const router = Router();

/**
 * Route: '/users/login'
 */
router.get("/login", require("../controllers/login").loginController);

/**
 * Route: '/users//signup'
 */
router.get("/signup", require("../controllers/signup").signupController);

module.exports = router;
