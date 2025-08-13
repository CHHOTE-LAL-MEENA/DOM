import React from "react";

const ChildComponent = React.memo((props) => {
  console.log("child component got re-render again.");
  return (
    <div>
      <br />
      <button onClick={props.handleClick}>{props.btnName}</button>
    </div>
  );
});

export default ChildComponent;
