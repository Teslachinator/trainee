import React from "react";
import "./searchFilter.css";

const Popup = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "popup_bg popActive" : "popup_bg"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "popup popActive" : "popup"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Popup;
