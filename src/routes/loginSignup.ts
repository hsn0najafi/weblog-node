import { Router } from "express";

const router = Router();

/**
 * @description    Login Page
 * @method         GET
 * @host           /users/login
 */
router.get("/login", require("../controllers/login").loginController);

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

module.exports = router;
