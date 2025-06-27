const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User} = require("../../../models/User");
const { generateTokens } = require("../../../lib/exports");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ msg: "Invalid credentials" });

  const tokens = generateTokens(user);
  res.json({
    ...tokens,
    user: { id: user._id, name: user.name, role: user.role },
  });
};
module.exports = {
  login,
};
