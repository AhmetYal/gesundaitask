import { useState } from "react";
import Option from "./Option";

const Cards = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <div className="card">
        <ul className="list-group ">
          <li className="list-group-item">Name: Ahmet</li>
          <button className="icon" onClick={handleClick}>
            <i className="bi bi-three-dots-vertical"></i>{" "}
          </button>
          <li className="list-group-item">Value: 500</li>
          <li className="list-group-item">Total: 1000</li>
        </ul>
      </div>
      {visible && <Option />}
    </>
  );
};

export default Cards;
