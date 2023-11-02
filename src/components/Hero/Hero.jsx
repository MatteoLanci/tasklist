import React from "react";
import "./hero.css";

import { Button } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { toggleInitialize } from "../../state/Reducers/initializeSlice";

const Hero = () => {
  const dispatch = useDispatch();

  const handleInitialize = () => {
    dispatch(toggleInitialize());
  };
  return (
    <section className="heroWrapper">
      <h2>Welcome to your TaskList</h2>
      <Button size="lg" onClick={handleInitialize}>
        START
      </Button>
    </section>
  );
};

export default Hero;
