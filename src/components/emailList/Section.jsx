import React from "react";
import "./Section.css";

const Section = ({ Icon, text, color, selected, onClick }) => {
  return (
    <div
      className={`section ${selected && "section--selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected ? color : "gray"}`,
      }}
      onClick={onClick}
    >
      <Icon />
      <h4>{text}</h4>
    </div>
  );
};

export default Section;
