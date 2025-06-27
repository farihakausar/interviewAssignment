const { Appointment } = require("../../../models/Appointment");

const getAllAppointment = async (req, res) => {
  const filter = req.user.role === 'admin' ? {} : { userId: req.user.id };
  const appointments = await Appointment.find(filter).populate('doctorId').populate('userId');
  res.json(appointments);
};
module.exports = {
  getAllAppointment,
};
