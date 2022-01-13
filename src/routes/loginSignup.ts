import { Router } from "express";

import { auth } from "../middlewares/auth";
import {
  loginController,
  handleLogin,
  handleRememberMe,
  handleLogout,
} from "../controllers/login";

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
router.get("/login", loginController);

/**
 * @description    Login/Auth Handler
 * @method         POST
 * @host           /users/login
 */
router.post("/login", handleLogin, handleRememberMe);

/**
 * @description    Logout
 * @method         GET
 * @host           /users/logout
 */
router.get("/logout", auth, handleLogout);

module.exports = router;
