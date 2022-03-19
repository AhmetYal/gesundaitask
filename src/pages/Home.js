import React from "react";
import Cards from "../components/Cards";
import NewUser from "../components/NewUser";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <button className="btn btn-primary">SAVE</button>
          <button className="btn btn-danger">ADD</button>
        </div>
        <div className="col-10">
          <Cards />
          <div className="newuser">
            <NewUser />
            <NewUser />
            <NewUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
