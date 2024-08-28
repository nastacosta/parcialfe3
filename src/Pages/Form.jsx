import { useState } from "react";
import Card from "../components/Card";

const Form = () => {
  const [error, setError] = useState(false);
  const [verified, setVerified] = useState(false);
  const [mascota, setMascota] = useState({
    name: "",
    color: "",
  });

  const handleChangeName = (event) => {
    setMascota({ ...mascota, name: event.target.value });
    setVerified(false);
    setError(false);
  };

  const handleChangeColor = (event) => {
    setMascota({ ...mascota, color: event.target.value });
    setVerified(false);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mascota.color.length >= 6 && mascota.name.trim().length >= 3) {
      setVerified(true);
      setError(false);
    } else {
      setVerified(false);
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
        <button>ENVIAR</button>
      </form>
      {error ? (
        <h4 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </h4>
      ) : (
        verified && <Card mascota={mascota}></Card>
      )}
    </>
  );
};

export default Form;
