import React from "react";
import "./navigation.css";

import { useDispatch } from "react-redux";
import { toggleTheme } from "../../state/Reducers/themeSlice";

import { Button } from "react-bootstrap";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Sun from "../../assets/svg/sun.svg";
import Moon from "../../assets/svg/moon.svg";

const Navigation = () => {
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const mobileView = window.innerWidth <= 576;
  return (
    <section className="navMainWrapper">
      <h1 className={`${mobileView ? "d-none" : null}`}>Navbar</h1>

      {mobileView && <AiOutlineMenu />}

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

      {/* <Button onClick={handleToggleTheme}>theme</Button> */}
    </section>
  );
};

export default Navigation;
