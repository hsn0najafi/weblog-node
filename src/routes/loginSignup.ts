import { Router } from "express";

const router = Router();

/**
 * @description    Register/Signup Page
 * @method         GET
 * @host           /users/signup
 */
router.get("/signup", require("../controllers/signup").signupController);

/**
 * @description    Register/Signup Handler
 * @method         POST
 * @host           /users/signup
 */
router.post("/signup", require("../controllers/signup").handleSignup);

/**
 * @description    Login Page
 * @method         GET
 * @host           /users/login
 */
router.get("/login", require("../controllers/login").loginController);

/**
 * @description    Login/Auth Handler
 * @method         POST
 * @host           /users/login
 */
router.post("/login", require("../controllers/login").handleLogin);

module.exports = router;
