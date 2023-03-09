import React from "react";

function App() {
  const [heading, setHeading] = React.useState("Hello");
  const [colorBu, setColor] = React.useState({});
  function changeHeading(){
    let texto = "Enviado";
    heading==="Hello"?
    setHeading(texto)
    :
    setHeading("Hello")
  }

  function changeColor() {
    setColor({ backgroundColor: "#2f3e46", color: "#cad2c5" });
  }

  function quitColor() {
    setColor({ });
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={changeColor} onMouseOut={quitColor} onClick={changeHeading} style={colorBu}>Submit</button>
    </div>
  );
}

export default App;
