import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

const EmployeeRecord = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const employee = JSON.parse(localStorage.getItem("employeeRecord"));

    setEmployeeData(employee);
  }, []);

  const handleDelete = (index) => {
    const employeeCopy = [...employeeData];
    employeeCopy.splice(index, 1);

    localStorage.setItem("employeeRecord", JSON.stringify(employeeCopy));

    setEmployeeData(employeeCopy);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "Surname",
      key: "name",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record, index) => (
        <DeleteOutlined onClick={() => handleDelete(index)} />
      ),
    },
  ];

  return (
    <div className="tableWrapper">
      <h1>Employee Record</h1>
      <Table columns={columns} dataSource={employeeData} pagination={false} />

      <Button type="primary">
        <Link to="/">Go back</Link>
      </Button>
    </div>
  );
};

export default EmployeeRecord;
