import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();
  return (
    <div>
      <h2>Acá va el detalle del producto</h2>
      <h3>{params.id}</h3>
    </div>
  );
}

export default Detail;
