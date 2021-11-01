import React, { useState } from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

import { Image } from "antd";
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

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
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

        <ImgCrop rotate>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>

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
