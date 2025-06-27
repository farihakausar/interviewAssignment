const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../../models/User");
const refreshToken = (req, res) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const accessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    res.json({ accessToken });
  } catch {
    res.status(401).json({ msg: "Invalid refresh token" });
  }
};
module.exports = {
  refreshToken,
};
