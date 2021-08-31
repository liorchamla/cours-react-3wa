import React from "react";

const Toolbar = (props) => {
  // Code complexe

  return (
    <div>
      <button onClick={props.onChangeColor}>Changer</button>
      <button onClick={props.onChangeTitle}>Changer le titre</button>
    </div>
  );
};

export default Toolbar;
