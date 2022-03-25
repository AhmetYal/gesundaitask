const Option = ({ deletecard, adddownline }) => {
  return (
    <>
      <div className="card">
        <button className="list-group-item" onClick={adddownline}>
          Add a downline
        </button>
        <button className="list-group-item" onClick={deletecard}>
          Delete
        </button>
        <button className="list-group-item">Request income</button>
      </div>
    </>
  );
};

export default Option;
