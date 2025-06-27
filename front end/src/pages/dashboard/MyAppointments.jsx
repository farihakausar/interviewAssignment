import React, { useEffect, useState } from "react";
import {
  Table,
  Card,
  Button,
  Tooltip,
  Popconfirm,
  message,
  Modal,
  Form,
  Input,
  DatePicker,
  TimePicker,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import axios from "../../utils/axios";
import dayjs from "dayjs";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [editing, setEditing] = useState(null); // appointment to edit

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("/appointment", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setAppointments(res.data);
    } catch (err) {
      message.error("Failed to load appointments");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`/appointment/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      message.success("Appointment deleted");
      fetchAppointments();
    } catch (err) {
      message.error("Delete failed");
    }
  };

  const openModal = (record = null) => {
    setEditing(record);
    setModalVisible(true);
    if (record) {
      form.setFieldsValue({
        doctorId: record?.doctorId?._id,
        date: dayjs(record.date),
        time: dayjs(record.time, "HH:mm"),
      });
    } else {
      form.resetFields();
    }
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const payload = {
        doctorId: values.doctorId,
        date: values.date.format("YYYY-MM-DD"),
        time: values.time.format("HH:mm"),
      };

      if (editing) {
        await axios.put(`/appointment/${editing._id}`, payload, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        message.success("Appointment updated");
      } else {
        await axios.post("/appointment", payload, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        message.success("Appointment added");
      }

      fetchAppointments();
      setModalVisible(false);
      setEditing(null);
    } catch (err) {
      message.error("Operation failed");
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
    setEditing(null);
    form.resetFields();
  };

  return (
    <Card
      title="My Appointments"
      extra={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => openModal()}
        >
          Add Appointment
        </Button>
      }
    >
      <Table
        rowKey="_id"
        columns={[
          { title: "Doctor", dataIndex: "doctorId", render: (d) => d?.name },
          { title: "Date", dataIndex: "date" },
          { title: "Time", dataIndex: "time" },
          { title: "Status", dataIndex: "status" },
          {
            title: "Actions",
            render: (_, rec) => (
              <>
                <Tooltip title="Edit">
                  <Button
                    icon={<EditOutlined />}
                    type="link"
                    onClick={() => openModal(rec)}
                  />
                </Tooltip>
            
              </>
            ),
          },
        ]}
        dataSource={appointments}
      />

      <Modal
        title={editing ? "Edit Appointment" : "Add Appointment"}
        open={modalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
        okText={editing ? "Update" : "Create"}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Doctor ID"
            name="doctorId"
            rules={[{ required: true, message: "Doctor ID is required" }]}
          >
            <Input placeholder="Enter Doctor ID" />
          </Form.Item>
          <Form.Item
            label="User ID"
            name="userId"
            rules={[{ required: true, message: "User ID is required" }]}
          >
            <Input placeholder="Enter User ID" />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Date is required" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>

          <Form.Item
            label="Time"
            name="time"
            rules={[{ required: true, message: "Time is required" }]}
          >
            <TimePicker className="w-full" format="HH:mm" />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default MyAppointments;
