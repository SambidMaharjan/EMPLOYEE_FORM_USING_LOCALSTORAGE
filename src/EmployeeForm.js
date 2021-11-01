import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const EmployeeForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const employee = JSON.parse(localStorage.getItem("employeeRecord"));
    let employees = [];

    if (employee) {
      employees = [...employee, values];
    } else {
      employees = [values];
    }

    form.resetFields();
    localStorage.setItem("employeeRecord", JSON.stringify(employees));
  };

  return (
    <div className="formWrapper">
      <h1>Employee Record Form</h1>
      <Form
        name="basic"
        {...layout}
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Surname"
          name="Surname"
          rules={[
            {
              required: true,
              message: "Please input your surname",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Address" name="address">
          <Input />
        </Form.Item>

        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      <Button>
        <Link to="/employee-record">View Record</Link>
      </Button>
    </div>
  );
};

export default EmployeeForm;
