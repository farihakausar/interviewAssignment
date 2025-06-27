const axios = require("axios");
const jwt = require("jsonwebtoken");
const PAGE_SIZE = 20;

const secKey = process.env.JWT_SECRET;

function getOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const generateTokens = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role, // ✅ include this
  };

  const token = jwt.sign(payload, secKey, { expiresIn: "1h" });
  return { accessToken: token };
};

module.exports = {
  PAGE_SIZE,
  secKey,
  generateTokens,
  getOTP,
};
