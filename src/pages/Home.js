import React from "react";
import Cards from "../components/Cards";
import { UserAddOutlined } from "@ant-design/icons";
import NewUser from "../components/NewUser";

const Home = () => {
  const addUser = () => {};
  return (
    <div>
      <Cards />
      <button onClick={addUser}>
        <UserAddOutlined />
      </button>
      <NewUser />
    </div>
  );
};

export default Home;
