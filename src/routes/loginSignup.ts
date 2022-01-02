import { Router } from "express";

const router = Router();

/**
 * Login Route
 */
router.get("/login", require("../controllers/login").loginController);

/**
 * Signup Route
 */
router.get("/signup", require("../controllers/signup").signupController);

module.exports = router;
