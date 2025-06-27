const express = require("express");


const { editAppointment } = require("./controller/editAppointment");
const {  getAllAppointment } = require("./controller/getAllAppointment");

const {roleMiddleware} = require("../../middleware/roleMiddleware");
const { addAppointment } = require("./controller/addAppointment");
const { verifyToken } = require("../../middleware/verifyToken");
const router = express.Router();
router.post('/', verifyToken,addAppointment)

router.get('/', verifyToken, getAllAppointment)

router.put('/:id/status', verifyToken,roleMiddleware('admin'),editAppointment) 

module.exports = router;
