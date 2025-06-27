
const jwt = require("jsonwebtoken");
const { secKey } = require("../lib/exports");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No valid token provided" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, secKey, (err, decoded) => {
    if (err) {
      console.log("err.message", err.message);
      const message = err.message || "Invalid token";
      return res.status(403).json({ message });
    }

    req.user = decoded; // ✅ attach decoded token here
    next();
  });
};

module.exports = { verifyToken };
