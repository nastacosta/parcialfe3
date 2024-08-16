import { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [error, setError] = useState(false);

  const [mascota, setMascota] = useState({
    name: "",
    color: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChangeName = (event) => {
    const name = event.target.value;
    if (name.trim().length >= 3) {
      setMascota({ ...mascota, name: event.target.value });
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleChangeColor = (event) => {
    const color = event.target.value;
    if (color.length >= 6) {
      setMascota({ ...mascota, color: event.target.value });
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" onChange={handleChangeName} />
        <label>Color</label>
        <input type="text" onChange={handleChangeColor} />
        <button></button>
      </form>
      {error ? (
        <h4 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </h4>
      ) : (
        <Card mascota={mascota}></Card>
      )}
    </>
  );
};

export default Form;
