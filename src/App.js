import React from "react";
import "./styles.css";

export default function App() {
  return <h1>Replace me with your component!</h1>;
}

function Button({color, disabled, text}) {
  return <button style={{ backgroundColor: color }} {disabled ? "disabled": null}> {text}</button>;
}
