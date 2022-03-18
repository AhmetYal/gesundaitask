import React from "react";
import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Cards = () => {
  return (
    <>
      <Card className="card">
        <UserOutlined className="icon" />
        <p>Name </p>

        <p>Value:500</p>

        <p>Total:1000 </p>
      </Card>
    </>
  );
};

export default Cards;
