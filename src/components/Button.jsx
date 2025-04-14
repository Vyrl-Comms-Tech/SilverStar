import React from "react";
import "../styles/Button.css";

const Button = ({ text = "Hover Me" }) => {
  return (
    <button className="fancy-button">
      {text}
    </button>
  );
};

export default Button;
