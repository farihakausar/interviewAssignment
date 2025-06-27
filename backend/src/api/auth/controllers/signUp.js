const bcrypt = require("bcrypt");
const {User} = require("../../../models/User");

const signUp = async (req, res) => {
  const { name, email, password, role = "user" } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ msg: "User already exists" });

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hash,
    role 
  });

  res.status(201).json({ msg: "User registered successfully" });
};

module.exports = { signUp };
