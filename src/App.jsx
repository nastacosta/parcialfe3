import { useState } from "react";
import "./App.css";
import Form from "./Pages/Form";
import Pedido from "./Pages/Pedido";
import PokeApi from "./Pages/PokeApi";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Detail from "./Pages/Detail";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/pokeapi" element={<PokeApi />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
