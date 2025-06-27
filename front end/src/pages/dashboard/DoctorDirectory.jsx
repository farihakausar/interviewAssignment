import React, { useEffect, useState } from "react";
import { Card, List, Select, Button, message } from "antd";
import axios from "../../utils/axios";

const DoctorDirectory = () => {
  const [doctors, setDoctors] = useState([]);
  const [specialty, setSpecialty] = useState("");
  const fetchDoctors = async () => {
    try {
      const res = await axios.get("/doctor", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setDoctors(res.data.doctors); // ✅ FIXED: only set the array
    } catch (err) {
      message.error("Failed to fetch doctors");
    }
  };
  
  

  useEffect(() => { fetchDoctors(); }, []);

  const bookAppointment = async (id) => {
    try {
      await axios.post(
        "/appointment",
        { doctorId: id, date: new Date(), time: "10:00" },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      message.success("Appointment booked!");
    } catch {
      message.error("Error booking appointment");
    }
  };

  const filtered = specialty ? doctors.filter(d => d.specialty === specialty) : doctors;
  const specialties = [...new Set(doctors.map(d => d.specialty))];


  return (
    <Card title={`Doctors `}>
  <Select
    placeholder="Filter by specialty"
    onChange={setSpecialty}
    allowClear
    style={{ width: 200, marginBottom: 16 }}
  >
    {specialties.map(s => <Select.Option key={s}>{s}</Select.Option>)}
  </Select>
  <List
    dataSource={filtered}
    renderItem={doctor => (
      <List.Item actions={[<Button onClick={() => bookAppointment(doctor._id)}>Book</Button>]}> 
        <List.Item.Meta
          title={doctor.name}
          description={`${doctor.specialty} | ${doctor.location}`}
        />
      </List.Item>
    )}
  />
</Card>

  );
};

export default DoctorDirectory;