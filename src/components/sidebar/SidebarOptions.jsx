import React from "react";

import "./SidebarOptions.css";

const SidebarOptions = ({ Icon, text, color, num }) => {
  return (
    <div className="sidebar__option">
      <div>
        {Icon && (
          <Icon style={{ color: color }} className="sidebar__optionIcon" />
        )}
        <p>{text}</p>
      </div>

      {num && <p className="sidebar__optionNumber">{num}</p>}
    </div>
  );
};

export default SidebarOptions;
