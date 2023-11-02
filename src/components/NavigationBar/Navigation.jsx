import React from "react";
import "./navigation.css";

import { useDispatch } from "react-redux";
import { toggleTheme } from "../../state/Reducers/themeSlice";

import { Button } from "react-bootstrap";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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

      <Button onClick={handleToggleTheme}>theme</Button>
    </section>
  );
};

export default Navigation;
