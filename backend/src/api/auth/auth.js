const express = require("express");

const { login } = require("./controllers/login");
const { signUp } = require("./controllers/signUp");
const { refreshToken } = require("./controllers/refreshToken");

const { getMe } = require("./controllers/getMe");

const { verifyToken } = require("../../middleware/verifyToken");
const loginLimiter = require("../../middleware/loginLimiterMiddleware");
const router = express.Router();
router.post("/register", signUp);
router.post("/login",loginLimiter, login);
router.post("/refresh-token", refreshToken);
router.get("/me", verifyToken, getMe);

module.exports = router;
