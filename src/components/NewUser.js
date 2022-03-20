import React from "react";

const NewUser = () => {
  return (
    <>
      <div className="card">
        <ul className="list-group ">
          <input className="list-group-item" value="Ahmet" />
          <input className="list-group-item" />
          <input className="list-group-item" />
          <button className="btn btn-success">Save</button>
        </ul>
      </div>
    </>
  );
};

export default NewUser;
