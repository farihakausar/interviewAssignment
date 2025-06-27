const { Appointment } = require("../../../models/Appointment");
const { User } = require("../../../models/User");
const {transporter}=require("../../../lib/transporter")
const addAppointment = async (req, res) => {
  const appointment = await Appointment.create({ ...req.body, userId: req.user.id });

  const user = await User.findById(req.user.id);
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Appointment Confirmation',
    text: `Dear ${user.name}, your appointment on ${req.body.date} at ${req.body.time} is confirmed.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Email error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });

  res.status(201).json(appointment);
};
module.exports = { addAppointment };
