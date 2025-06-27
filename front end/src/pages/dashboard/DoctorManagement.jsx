import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Card } from "antd";
import axios from "../../utils/axios";

const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([]);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

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

  const handleSubmit = async () => {
    const values = await form.validateFields();
    if (editingDoctor) {
      await axios.patch(`/doctor/${editingDoctor._id}`, values, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
    } else {
      await axios.post("/doctor", values, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
    }
    setOpen(false);
    setEditingDoctor(null);
    form.resetFields();
    fetchDoctors();
  };

  const deleteDoctor = async (id) => {
    await axios.delete(`/doctor/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    fetchDoctors();
  };

  return (
    <Card title="Doctor Management" extra={<Button onClick={() => setOpen(true)}>Add Doctor</Button>}>
      <Table
        rowKey="_id"
        dataSource={doctors}
        columns={[
          { title: "Name", dataIndex: "name" },
          { title: "Specialty", dataIndex: "specialty" },
          { title: "Location", dataIndex: "location" },
          {
            title: "Actions",
            render: (_, doc) => (
              <>
                <Button onClick={() => { setEditingDoctor(doc); form.setFieldsValue(doc); setOpen(true); }}>Edit</Button>
                <Button onClick={() => deleteDoctor(doc._id)} danger>Delete</Button>
              </>
            )
          }
        ]}
      />
      <Modal open={open} onCancel={() => setOpen(false)} onOk={handleSubmit} title={editingDoctor ? "Edit Doctor" : "Add Doctor"}>
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="specialty" label="Specialty" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="location" label="Location" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="contact" label="Contact" rules={[{ required: true }]}><Input /></Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default DoctorManagement;
