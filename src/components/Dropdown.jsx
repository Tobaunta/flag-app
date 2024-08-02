import React, { useState, useEffect } from "react";
import "./Dropdown.css";

export default function Dropdown({ setRegion, region }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  let ref = React.createRef();

  return (
    <div className={`dropdown ${isOpen ? "show" : ""}`} ref={ref}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <label>Region</label>
        <span id="dropdown-region">{region === "All" ? "All" : region.substr(7)}</span>
        <svg
          className="dropdown-arrow"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </button>
      <span id="dropdown-selection"></span>
      {isOpen && (
        <ul className={`dropdown-content ${isOpen ? "show" : ""}`}>
          <li
            className="dropdown-item"
            onClick={function () {
              toggleDropdown();
              setRegion("All");
            }}
          >
            All
          </li>
          <li
            className="dropdown-item"
            onClick={function () {
              toggleDropdown();
              setRegion("region/Africa");
            }}
          >
            Africa
          </li>
          <li
            className="dropdown-item"
            onClick={function () {
              toggleDropdown();
              setRegion("region/America");
            }}
          >
            America
          </li>
          <li
            className="dropdown-item"
            onClick={function () {
              toggleDropdown();
              setRegion("region/Asia");
            }}
          >
            Asia
          </li>
          <li
            className="dropdown-item"
            onClick={function () {
              toggleDropdown();
              setRegion("region/Europe");
            }}
          >
            Europe
          </li>
          <li
            className="dropdown-item"
            onClick={function () {
              toggleDropdown();
              setRegion("region/Oceania");
            }}
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
}

