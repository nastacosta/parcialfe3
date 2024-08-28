import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
  const [beer, setBeer] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  const getBeer = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const data = await res.json();
    setBeer(data);
  };

  useEffect(() => {
    getBeer();
  });

  return (
    <div>
      <h2>Cerveza numero {beer.id}</h2>
      <div className="card">
        <img src={beer.image} alt="beer-detail" />
        <p>{beer.title}</p>
        <p>{beer.description}</p>
        <p>{beer.price} </p>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Beer;
