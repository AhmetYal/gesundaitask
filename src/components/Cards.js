import { useState } from "react";
import Option from "./Option";
import './cards.scss';

const Cards = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <div className="card bg-white">
        <div className="avatar-div d-flex justify-content-between align-items-end bg-white p-2">
          <img className="avatar" src="../assets/icons/avatar1.png" />
          <div className="avatar-div--text mb-1">My name</div>
          <img className="dots mb-3" src="../assets/icons/dots.png" />
        </div>
        <div className="info-div d-flex flex-column justify-content-around align-items-center">
          <div className="w-50 d-flex justify-content-around">Self: <span> 300</span></div>
          <div className="w-50 d-flex justify-content-around">Total: <span> 300</span></div>
        </div>


        {/* <ul className="list-group ">
          <li className="list-group-item">Name: Ahmet</li>
          <button className="icon" onClick={handleClick}>
            <i className="bi bi-three-dots-vertical"></i>{" "}
          </button>
          <li className="list-group-item">Value: 500</li>
          <li className="list-group-item">Total: 1000</li>
        </ul> */}
      </div>
      <Option />
    </>
  );
};

export default Cards;
