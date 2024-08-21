import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Pedido from "./components/Pedido";

function App() {
  return (
    <>
      <Form></Form>
      <Pedido />
    </>
  );
}

export default App;
