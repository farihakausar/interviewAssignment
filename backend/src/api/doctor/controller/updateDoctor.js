const { Doctor } = require("../../../models/Doctor");

const updateDoctor = async (req, res) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(doctor);
};

module.exports = {
  updateDoctor,
};
