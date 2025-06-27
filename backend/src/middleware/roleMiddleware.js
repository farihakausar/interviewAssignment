const roleMiddleware = (role) => (req, res, next) => {
  console.log("🧾 req.user in roleMiddleware:", req.user); // ✅ debug line

  if (!req.user || req.user.role !== role) {
    return res.status(403).json({ message: "Access denied" });
  }

  next();
};

module.exports = { roleMiddleware };
