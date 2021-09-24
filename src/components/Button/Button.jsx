import React from "react";
import "./Button.scss";

export default function Button({ onClick }) {
  return (
    <button type="button" className="button" onClick={onClick}>
      GENERATE PASSWORD
    </button>
  );
}
