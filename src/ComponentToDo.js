import React, { useState } from "../node_modules/react";
import myTodoData from "./TodoData";

function ComponentToDo(props) {
    const [checked, setChecked] = useState(false)


  return (
    <div>
        <div className="myInnerContainer">

      <label>
        <input
            className="checkBoxStyle"
            type="checkbox"
            onChange={() => setChecked(!checked)}
        /> 
        
        {props.myNewitems.text}<br/ >
      </label>
      </div>
    </div>
  );
}

export default ComponentToDo;
