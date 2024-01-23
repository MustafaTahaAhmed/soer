import React, { useState } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const Icon = props.icon;
  const navigate = useNavigate();

  return (
    <div
      className="cardcont"
      onClick={() => {
        navigate(props.onClick);
      }}
    >
      <div className="iconcard">
        <div className="iconbackground">
        <Icon class="icon" color="#4BAF47" size={70} />
        </div>
      </div>

      <div className="title-card"> {props.title}</div>
      {/* <div className="title-description"> {props.description}</div> */}
    </div>
  );
}

export default Card;
