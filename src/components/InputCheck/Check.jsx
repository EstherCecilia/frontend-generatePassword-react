import React from "react";
import Content from "../Content/Content";
import "./Check.scss";

export default function Check({ value, text, type, onChange }) {
  return (
    <Content>
      <div className="box">
        <span>{text}</span>

        <label className="switch">
          <input
            type="checkbox"
            checked={value}
            onChange={() => onChange({ type })}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </Content>
  );
}
