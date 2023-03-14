import React from "react";

function App() {
  const [heading, setHeading] = React.useState("Hello");
  const [colorBu, setColor] = React.useState({});
  const [contact, setContact] = React.useState({
    fName: "",
    lName: "",
    email: "",
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
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h1>
        {heading} {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <br></br>
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="fName"
          value={contact.fName}
          placeholder="¿Cuál es tu nombre?"
        />
        <input
          onChange={handleChange}
          type="text"
          name="lName"
          value={contact.lName}
          placeholder="¿Cuál es tu apellido?"
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={contact.email}
          placeholder="¿Cuál es tu email?"
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
