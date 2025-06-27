const { Doctor } = require("../../../models/Doctor");

const createDoctor =   async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.status(201).json(doctor);
};
module.exports = { createDoctor };
