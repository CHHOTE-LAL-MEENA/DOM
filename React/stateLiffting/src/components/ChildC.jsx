import React, { useContext } from "react";
import { UserContext } from "../App";

function ChildC() {
  const user = useContext(UserContext);

  return (
    <div>
      Hello World!
      <br />
      data:{user.name}
    </div>
  );
}

export default ChildC;
