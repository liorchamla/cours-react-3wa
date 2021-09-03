import React, { useEffect, useState } from "react";

const FunctionnalTimer = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    console.log("Le compteur a changé !");
  }, [counter]);

  return <h1>Timer : {counter}</h1>;
};

export default FunctionnalTimer;
