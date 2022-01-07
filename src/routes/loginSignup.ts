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

/**
 * Route: POST '/users/signup'
 */
router.post("/signup", require("../controllers/signup").handleSignup);

module.exports = router;
