import { useState } from "react";
import Cards from "../components/Cards";
import NewUser from "../components/NewUser";

const Home = () => {
  const [card, setCard] = useState([<Cards />]);
  //  const [newUser, setNewUser] = useState([<NewUser />]);

  const addCard = () => {
    setCard([...card, <Cards />]);
  };

  // const adddownline = () => {
  //   setNewUser([...newUser, <NewUser />]);
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <button className="btn btn-primary">SAVE</button>
          <button className="btn btn-danger" onClick={addCard}>
            ADD
          </button>
        </div>
        <div className="col-10">
          {card}
          <div className="newuser">
            {/* {newUser} */}
            <NewUser />

            <NewUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
