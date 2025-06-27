const { Doctor } = require("../../../models/Doctor");


const getAllDoctors =  async (req, res) => {
  const { page = 1, limit = 10, specialty } = req.query;
  const query = specialty ? { specialty: { $regex: specialty, $options: 'i' } } : {};

  const doctors = await Doctor.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));
  const total = await Doctor.countDocuments(query);

  res.json({ doctors, total, page: Number(page), pages: Math.ceil(total / limit) });
};
module.exports = { getAllDoctors };
