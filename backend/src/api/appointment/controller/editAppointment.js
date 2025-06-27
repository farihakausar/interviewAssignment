const { Appointment } = require("../../../models/Appointment");

const editAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(appointment);
};
module.exports = {
  editAppointment,
};
