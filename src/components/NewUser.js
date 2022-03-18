import React from "react";
import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
const NewUser = () => {
  return (
    <div>
      <Card className="card">
        <UserOutlined className="icon" />
        <p>Name </p>
        <input placeholder="name" type="textbox"></input>
        <p>Value:500</p>
        <input placeholder="value" type="textbox"></input>

        <p>Total:1000 </p>
        <input placeholder="total" type="textbox"></input>
      </Card>
    </div>
  );
};

export default NewUser;
