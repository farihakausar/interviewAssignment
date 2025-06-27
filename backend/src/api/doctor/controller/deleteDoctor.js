const { Doctor } = require("../../../models/Doctor");


const deleteDoctor = async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ message: 'Doctor deleted' });
};

module.exports = { deleteDoctor };
