import React from "react";
import "./Slider.scss";

export default function Slider({ value, onChangeValue }) {
  return (
    <div className="slideContainer">
      <span>4</span>
      <input
        type="range"
        min="4"
        max="32"
        value={value}
        onChange={onChangeValue}
        className="sliderRange"
      />
      <span>32</span>
    </div>
  );
}
