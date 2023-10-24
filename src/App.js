import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }
  return (
    <Button
      color="red"
      disabled={false}
      text="Click me"
      yalla = {handleClick}
    />
  );
}

function Button({ color, disabled, text, yalla }) {


  
  return <button disabled={disabled} style={{ backgroundColor: color }} onClick={yalla} > {text}</button>;
}
