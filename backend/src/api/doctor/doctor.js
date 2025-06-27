const express = require("express");
const { getAllDoctors } = require("./controller/getAllDoctors");
const { createDoctor } = require("./controller/createDoctor");
const { updateDoctor } = require("./controller/updateDoctor");
const { deleteDoctor } = require("./controller/deleteDoctor");
const {roleMiddleware}=require("../../middleware/roleMiddleware")

const { verifyToken } = require("../../middleware/verifyToken");
const router = express.Router();
router.post('/', verifyToken, roleMiddleware("admin"),createDoctor)

router.patch('/:id',verifyToken, roleMiddleware('admin'), updateDoctor)

router.delete('/:id', verifyToken,roleMiddleware('admin'), deleteDoctor)
router.get('/',getAllDoctors)
module.exports = router;




