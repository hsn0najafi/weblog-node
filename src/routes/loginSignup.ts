import { Router } from "express";

const router = Router();

/**
 * Route: GET '/users/login'
 */
router.get("/login", require("../controllers/login").loginController);

/**
 * Route: GET '/users//signup'
 */
router.get("/signup", require("../controllers/signup").signupController);

module.exports = router;
