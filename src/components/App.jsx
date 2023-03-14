import React from "react";

function App() {
  const [heading, setHeading] = React.useState("Hello");
  const [colorBu, setColor] = React.useState({});
  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: "",
  });
  function changeHeading() {
    let texto = "Hello ";
    heading === "Hello" ? setHeading(texto + nombres) : setHeading("Hello");
  }

  function changeColor() {
    setColor({ backgroundColor: "#2f3e46", color: "#cad2c5" });
  }

  function quitColor() {
    setColor({});
  }

  function handleChange(event) {
    const { name, value } = event.target;
    //Se utiliza setFullname y se crea una función flecha que contiene el objeto áctual dentro de preValue
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        {heading} {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="fName"
          value={fullName.fName}
          placeholder="¿Cuál es tu nombre?"
        />
        <input
          onChange={handleChange}
          type="text"
          name="lName"
          value={fullName.lName}
          placeholder="¿Cuál es tu apellido?"
        />
        <button
          onMouseOver={changeColor}
          onMouseOut={quitColor}
          onClick={changeHeading}
          style={colorBu}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
