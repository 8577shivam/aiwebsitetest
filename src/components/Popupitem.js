import React, { useState } from "react";

const Popupitem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? "active" : ""}`}>
      <button className="dropbtn" onClick={toggleDropdown}>
        Menu <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
        </div>
      )}
    </div>
  );
};

export default Popupitem;
