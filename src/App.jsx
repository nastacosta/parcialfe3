import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";
import Beer from "./Pages/Beer";
import { routes } from "./utils/routes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contacto} element={<Contacto />} />
        <Route path={routes.beer + ":id"} element={<Beer />} />
        <Route path="/*" element={<h1>404 - Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
