import React from "react";

let Selection = ({ keys, applyColor }) => {
  function colorChange(e) {
    e.target.style.backgroundColor = applyColor().background;
  }

  return (
    <div>
      <div className={keys} onClick={colorChange}></div>
    </div>
  );
};

export default Selection;