import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../utils/routes";

function Navbar() {
  return (
    <nav>
      <Link to={routes.home}>
        <h4>Form</h4>
      </Link>
      <Link to={routes.pedido}>
        <h4>Pedido</h4>
      </Link>
      <Link to={routes.pokeapi}>
        <h4>PokeApi</h4>
      </Link>
    </nav>
  );
}

export default Navbar;
