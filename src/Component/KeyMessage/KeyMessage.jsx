import React from "react";
import "./KeyMessage.css";
function KeyMessage(props) {
 return (
    <div className="cardcont1">
      <div className="title-card1"> {props.text}</div>
    </div>
  );
}

export default KeyMessage;
