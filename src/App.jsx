import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Pedido from "./components/Pedido";
import PokeApi from "./components/PokeApi";

function App() {
  return (
    <>
      <Form></Form>
      <h3>
        ---------------------------------------- Semana 5
        ----------------------------------------
      </h3>
      <Pedido />
      <PokeApi></PokeApi>
    </>
  );
}

export default App;
