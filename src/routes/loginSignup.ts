import { Router } from "express";

import { auth } from "../middlewares/auth";
import { signupController, handleSignup } from "../controllers/signup";
import {
  loginController,
  handleLogin,
  handleRememberMe,
  handleLogout,
} from "../controllers/login";

const router = Router();

/**
 * @description    Show Register/Signup Page
 * @method         GET
 * @host           /users/signup
 */
router.get("/signup", signupController);

/**
 * @description    Handle Register/Signup
 * @method         POST
 * @host           /users/signup
 */
router.post("/signup", handleSignup);

/**
 * @description    Show Login Page
 * @method         GET
 * @host           /users/login
 */
router.get("/login", loginController);

/**
 * @description    Handle Login/Auth - Handle Remember Me Button
 * @method         POST
 * @host           /users/login
 */
router.post("/login", handleLogin, handleRememberMe);

/**
 * @description    Handle Logout
 * @method         GET
 * @host           /users/logout
 */
router.get("/logout", auth, handleLogout);

module.exports = router;
