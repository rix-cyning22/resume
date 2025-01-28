import React from "react";

const Achievement = ({ item }) => {
  return (
    <div className="achievement">
      <div
        className="achievement-text"
        dangerouslySetInnerHTML={{ __html: item }}
      />
    </div>
  );
};

const Skill = ({ item }) => {
  return (
    <div className="achievement">
      <div className="achievement-text">
        <strong>{item.field}: </strong>
        {item.technology.join(", ")}
      </div>
    </div>
  );
};

export { Skill, Achievement };
