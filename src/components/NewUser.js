import { useState } from "react";
import Option from "./Option";

const NewUser = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      <div className="card">
        <ul className="list-group ">
          <input className="list-group-item" value="Ahmet" />
          <button className="icon" onClick={handleClick}>
            <i className="bi bi-three-dots-vertical"></i>
          </button>
          <input className="list-group-item" />
          <input className="list-group-item" />
          <button className="btn btn-success">Save</button>
        </ul>
      </div>
      {visible && <Option />}
    </>
  );
};

export default NewUser;
