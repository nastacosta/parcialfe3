import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../utils/routes";

function Navbar() {
  return (
    <nav>
      <Link to={routes.home}>
        <h4>Hola</h4>
      </Link>
      <Link to={routes.contacto}>
        <h4>Contacto</h4>
      </Link>
    </nav>
  );
}

export default Navbar;
