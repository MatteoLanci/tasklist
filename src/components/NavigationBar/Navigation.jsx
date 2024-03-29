import React from "react";
import "./navigation.css";

import { useDispatch } from "react-redux";
import { toggleTheme } from "../../state/Reducers/themeSlice";

import Sun from "../../assets/svg/sun.svg";
import Moon from "../../assets/svg/moon.svg";

const Navigation = () => {
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <section className="navMainWrapper">
      <input
        type="checkbox"
        id="themeToggle"
        className="themeToggleCheckbox"
        onClick={handleToggleTheme}
      />
      <label for="themeToggle" className="themeToggleLabel">
        <img src={Sun} alt="Sun" className="sunSvg" />
        <img src={Moon} alt="Moon" className="moonSvg" />
      </label>
    </section>
  );
};

export default Navigation;
