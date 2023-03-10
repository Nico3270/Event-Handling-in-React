import React from "react";

function App() {
  const [heading, setHeading] = React.useState("Hello");
  const [colorBu, setColor] = React.useState({});
  const [nombres, setNombre] = React.useState("");
  function changeHeading(){
    let texto = "Hello " ;
    heading==="Hello"?
    setHeading(texto + nombres)
    :
    setHeading("Hello")
  }

  function changeColor() {
    setColor({ backgroundColor: "#2f3e46", color: "#cad2c5" });
  }

  function quitColor() {
    setColor({ });
  }


  function handleChange(event){
    setNombre(event.target.value)
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input onChange={handleChange} type="text" value={nombres} placeholder="What's your name?" />
      <button onMouseOver={changeColor} onMouseOut={quitColor} onClick={changeHeading} style={colorBu}>Submit</button>
    </div>
  );
}

export default App;
