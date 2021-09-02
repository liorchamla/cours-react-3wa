import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>A propos</h1>
      <Link to="/contact">Contactez nous !</Link>
    </>
  );
};

export default About;
